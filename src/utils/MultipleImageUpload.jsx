import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function MultipleImageUpload({
  name,
  username,
  password,
  confirm,
}) {
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    if (!files.length) return;

    const validFiles = [];
    const previewUrls = [];

    files.forEach((file) => {
      if (file.size > 200 * 1024) {
        alert(`${file.name} is larger than 200KB`);
        return;
      }

      validFiles.push(file);
      previewUrls.push(URL.createObjectURL(file));
    });

    setImages(validFiles);
    setPreviews(previewUrls);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  };

  const uploadImages = async () => {
    if (images.length === 0) {
      alert("Please select images");
      return;
    }

    try {
      setLoading(true);

      const userId = "user123";

      for (const image of images) {
        const base64Image = await convertToBase64(image);

        await addDoc(collection(db, "userImages"), {
          userId: crypto.randomUUID(),
          image: base64Image,
          fileName: image.name,
          createdAt: serverTimestamp(),
          name: name,
          username: username,
          password: password,
          conformPassword: confirm,
        });
      }

      alert("Registration successful!");

      setImages([]);
      setPreviews([]);
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-1 p-6 bg-white rounded-2xl shadow-md">
      {/* Upload input */}
      <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-indigo-300 rounded-xl cursor-pointer bg-indigo-50 hover:bg-indigo-100 transition">
        <svg
          className="w-8 h-8 text-indigo-400 mb-2"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"
          />
        </svg>
        <span className="text-sm text-indigo-500 font-medium">
          Click to upload images
        </span>
        <span className="text-xs text-gray-400 mt-1">PNG, JPG supported</span>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {/* Previews */}
      {previews.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-5">
          {previews.map((preview, index) => (
            <div key={index} className="relative group">
              <img
                src={preview}
                alt={`Preview ${index + 1}`}
                className="w-24 h-24 object-cover rounded-xl border border-gray-200 shadow-sm group-hover:opacity-80 transition"
              />
              <span className="absolute bottom-1 right-1 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded-md">
                {index + 1}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Submit button */}
      <button
        onClick={uploadImages}
        disabled={loading}
        className={`mt-5 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition
          ${
            loading
              ? "bg-indigo-300 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700 active:scale-95 cursor-pointer"
          }`}
      >
        {loading ? (
          <>
            <svg
              className="w-4 h-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v3M12 18v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M3 12h3M18 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
              />
            </svg>
            Registering...
          </>
        ) : (
          <>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
            Register
          </>
        )}
      </button>
    </div>
  );
}
