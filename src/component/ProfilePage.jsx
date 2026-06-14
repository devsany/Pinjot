import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  arrayUnion,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import Navbar from "./Navbar";
import SEO from "../SEO/SEO";

export default function ProfilePage() {
  const { userId } = useParams();
  const [message, setMessage] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });

  // Social media platforms with icons and colors
  const socialPlatforms = [
    {
      id: "instagram",
      name: "Instagram",
      icon: "📸",
      color: "from-pink-500 to-orange-500",
      bgColor: "bg-gradient-to-r from-pink-500 to-orange-500",
    },
    {
      id: "facebook",
      name: "Facebook",
      icon: "👍",
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-gradient-to-r from-blue-600 to-blue-800",
    },
    {
      id: "twitter",
      name: "Twitter",
      icon: "🐦",
      color: "from-sky-500 to-blue-500",
      bgColor: "bg-gradient-to-r from-sky-500 to-blue-500",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: "🔗",
      color: "from-blue-700 to-blue-900",
      bgColor: "bg-gradient-to-r from-blue-700 to-blue-900",
    },
    {
      id: "youtube",
      name: "YouTube",
      icon: "📺",
      color: "from-red-600 to-red-800",
      bgColor: "bg-gradient-to-r from-red-600 to-red-800",
    },
    {
      id: "tiktok",
      name: "TikTok",
      icon: "🎵",
      color: "from-black to-gray-800",
      bgColor: "bg-gradient-to-r from-black to-gray-800",
    },
    {
      id: "snapchat",
      name: "Snapchat",
      icon: "👻",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    },
    {
      id: "pinterest",
      name: "Pinterest",
      icon: "📌",
      color: "from-red-500 to-red-700",
      bgColor: "bg-gradient-to-r from-red-500 to-red-700",
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      icon: "💬",
      color: "from-green-500 to-green-700",
      bgColor: "bg-gradient-to-r from-green-500 to-green-700",
    },
    {
      id: "telegram",
      name: "Telegram",
      icon: "✈️",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
    {
      id: "discord",
      name: "Discord",
      icon: "🎮",
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-gradient-to-r from-indigo-500 to-purple-600",
    },
    {
      id: "reddit",
      name: "Reddit",
      icon: "🤖",
      color: "from-orange-600 to-red-600",
      bgColor: "bg-gradient-to-r from-orange-600 to-red-600",
    },
    {
      id: "github",
      name: "GitHub",
      icon: "🐙",
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: "website",
      name: "Website",
      icon: "🌐",
      color: "from-gray-500 to-gray-700",
      bgColor: "bg-gradient-to-r from-gray-500 to-gray-700",
    },
    {
      id: "other",
      name: "Other",
      icon: "🔗",
      color: "from-gray-400 to-gray-600",
      bgColor: "bg-gradient-to-r from-gray-400 to-gray-600",
    },
  ];

  const showNotification = (message, type = "success") => {
    setNotification({ show: true, message, type });
    setTimeout(
      () => setNotification({ show: false, message: "", type: "" }),
      3000,
    );
  };

  const isValidUrl = (string) => {
    try {
      const url = new URL(string);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch (_) {
      return false;
    }
  };

  const sendMessage = async () => {
    if (!message.trim()) {
      showNotification("Please enter a URL", "error");
      return;
    }

    if (!selectedPlatform) {
      showNotification("Please select a social media platform", "error");
      return;
    }

    if (!isValidUrl(message)) {
      showNotification(
        "Please enter a valid URL (http:// or https://)",
        "error",
      );
      return;
    }

    try {
      setLoading(true);

      const q = query(
        collection(db, "userImages"),
        where("userId", "==", userId),
      );

      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        showNotification("User not found!", "error");
        return;
      }

      const userDoc = snapshot.docs[0];
      const selectedPlatformData = socialPlatforms.find(
        (p) => p.id === selectedPlatform,
      );

      await updateDoc(userDoc.ref, {
        messages: arrayUnion({
          text: message,
          platform: selectedPlatform,
          platformName: selectedPlatformData.name,
          platformIcon: selectedPlatformData.icon,
          platformColor: selectedPlatformData.color,
          createdAt: new Date().toISOString(),
        }),
      });

      showNotification(
        `URL shared on ${selectedPlatformData.name}!`,
        "success",
      );
      setMessage("");
      setSelectedPlatform("");

      await fetchUserData();
    } catch (error) {
      console.error(error);
      showNotification("Error: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserData = async () => {
    try {
      const q = query(
        collection(db, "userImages"),
        where("userId", "==", userId),
      );

      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        showNotification("User not found!", "error");
        return;
      }

      const userDoc = snapshot.docs[0];
      setUser(userDoc.data());
    } catch (error) {
      console.error(error);
      showNotification("Error fetching user data", "error");
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <SEO
        name={`PinJot - ${user.name}'s Profile. View and share ${user.name}'s personalized link in bio page showcasing all their important links in one beautiful page. Connect with ${user.name} on social media and explore their online presence.`}
        content={`View and share ${user.name}'s personalized link in bio page showcasing all their important links in one beautiful page.`}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
        {/* Notification Toast */}
        {notification.show && (
          <div className="fixed top-4 right-4 z-50 animate-slide-in">
            <div
              className={`rounded-lg shadow-lg p-4 ${
                notification.type === "success" ? "bg-green-500" : "bg-red-500"
              } text-white min-w-[300px]`}
            >
              <div className="flex items-center gap-3">
                {notification.type === "success" ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
                <p className="font-medium">{notification.message}</p>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <svg
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back
            </button>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-white rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                <div className="relative group">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/150?text=No+Image";
                    }}
                  />
                  <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                </div>

                <div className="text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    {user.name}
                  </h1>
                  <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
                    <p className="text-sm opacity-90 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      User ID: {userId}
                    </p>
                    <p className="text-sm opacity-90 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      📊 {user.messages?.length || 0} URLs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Section */}
            <div className="p-6 md:p-8">
              {/* Section Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    📋 Shared URLs
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {user.messages?.length > 0
                      ? `Showing ${user.messages.length} URL${user.messages.length > 1 ? "s" : ""}`
                      : "No URLs shared yet"}
                  </p>
                </div>

                {/* Section Header */}
                <div className="flex items-center justify-between mb-6">
                  {/* Share Profile Button - Replace the Copy All button with this */}
                  <button
                    onClick={() => {
                      const profileUrl = `${window.location.origin}/${userId}`;
                      navigator.clipboard.writeText(profileUrl);
                      showNotification(
                        "Profile link copied! Share it with others 📋",
                        "success",
                      );
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                    <span>Share Profile</span>
                  </button>
                </div>
              </div>

              {/* Messages List */}
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {user.messages?.length > 0 ? (
                  [...user.messages].reverse().map((msg, index) => (
                    <div
                      key={index}
                      className="group relative flex items-start justify-between gap-4 p-4 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          {/* Platform Badge */}
                          <div
                            className={`flex-shrink-0 ${msg.platformColor ? `bg-gradient-to-r ${msg.platformColor.split(" ").slice(1).join(" ")}` : "bg-gradient-to-r from-gray-500 to-gray-700"} rounded-xl p-2 shadow-md`}
                          >
                            <span className="text-white text-lg">
                              {msg.platformIcon || "🔗"}
                            </span>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <span
                                className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold text-white ${msg.platformColor ? `bg-gradient-to-r ${msg.platformColor.split(" ").slice(1).join(" ")}` : "bg-gradient-to-r from-gray-500 to-gray-700"}`}
                              >
                                <span>{msg.platformIcon}</span>
                                <span>{msg.platformName}</span>
                              </span>
                            </div>
                            <p className="break-all text-gray-700 font-mono text-sm">
                              {msg.text}
                            </p>
                            {msg.createdAt && (
                              <p className="text-xs text-gray-400 mt-1">
                                {new Date(msg.createdAt).toLocaleString()}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(msg.text);
                            showNotification("URL copied!", "success");
                          }}
                          className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-200 hover:scale-105"
                          title="Copy URL"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                            />
                          </svg>
                        </button>

                        <button
                          onClick={() => window.open(msg.text, "_blank")}
                          className="p-2 bg-gray-500 hover:bg-gray-600 text-white rounded-xl transition-all duration-200 hover:scale-105"
                          title="Open URL"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-12 h-12 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">
                      No URLs Found
                    </h3>
                    <p className="text-gray-400">
                      Share your first URL to get started
                    </p>
                  </div>
                )}
              </div>

              {/* Send URL Section */}
              <div className="mt-8 pt-6 border-t-2 border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <label className="text-lg font-semibold text-gray-800">
                    Share New URL
                  </label>
                </div>

                {/* Social Media Platform Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Platform <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {socialPlatforms.map((platform) => (
                      <button
                        key={platform.id}
                        onClick={() => setSelectedPlatform(platform.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 ${
                          selectedPlatform === platform.id
                            ? `${platform.bgColor} text-white shadow-lg scale-105`
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        <span className="text-lg">{platform.icon}</span>
                        <span className="text-sm font-medium">
                          {platform.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* URL Input */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    URL Link <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="4"
                    placeholder="https://example.com/your-url..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none font-mono text-sm"
                  />

                  {message && (
                    <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                      {message.length} characters
                    </div>
                  )}
                </div>

                {/* Selected Platform Preview */}
                {selectedPlatform && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-xl flex items-center gap-2">
                    <span className="text-sm text-gray-600">Sharing as:</span>
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold text-white ${
                        socialPlatforms.find((p) => p.id === selectedPlatform)
                          ?.bgColor
                      }`}
                    >
                      <span>
                        {
                          socialPlatforms.find((p) => p.id === selectedPlatform)
                            ?.icon
                        }
                      </span>
                      <span>
                        {
                          socialPlatforms.find((p) => p.id === selectedPlatform)
                            ?.name
                        }
                      </span>
                    </span>
                  </div>
                )}

                <button
                  onClick={sendMessage}
                  disabled={loading || !message.trim() || !selectedPlatform}
                  className={`mt-5 w-full py-4 rounded-2xl font-semibold text-white transition-all duration-300 transform ${
                    loading || !message.trim() || !selectedPlatform
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:scale-[1.02] active:scale-95"
                  }`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Sending URL...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      <span>Send URL</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes slide-in {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .animate-slide-in {
            animation: slide-in 0.3s ease-out;
          }

          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 10px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
          }
        `}</style>
      </div>
    </>
  );
}
