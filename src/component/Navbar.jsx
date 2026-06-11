import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Navbar() {
  const [data, setData] = React.useState(
    JSON.parse(localStorage.getItem("user")),
  );
  const { userId } = useParams();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setData(null);
    navigate("/"); // Smooth navigation without reload
  };
  console.log(JSON.parse(localStorage.getItem("user")));
  return (
    <nav className="bg-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <div className="text-2xl font-bold cursor-pointer">
              <span className="text-blue-600">Pin</span>
              <span className="text-gray-900">Jot</span>
            </div>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {data ? (
              <img className="w-10 h-10 rounded-full" src={data.image} alt="" />
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Login
              </Link>
            )}

            {localStorage.getItem("user") ? (
              <>
                <Link
                  to={`/profile/${data.userId}`}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/registration"
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                Register
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
