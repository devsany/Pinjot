import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import SEO from "../SEO/SEO";

const LoginPage = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "userImages"));

      const userList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUsers(userList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password,
    );
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate(`/profile/${user.userId}`, { replace: true });
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Navbar />
      <SEO name="PinJot - Log In to Your Account. Access your personalized link in bio page on PinJot by logging in with your credentials. Manage your links, customize your profile, and share your online presence effortlessly. Log in now to continue showcasing all your important links in one beautiful page." content="Log in to your account and manage your PinJot profile today!" />
      <div className="flex min-h-screen items-center justify-center  to-pink-500 px-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-800">Welcome Back</h1>
            <p className="mt-2 text-gray-500">Log In to continue</p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full rounded-xl bg-indigo-600 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg active:scale-95"
            >
              Log In
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link to="/registration">
                <span className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-700">
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
