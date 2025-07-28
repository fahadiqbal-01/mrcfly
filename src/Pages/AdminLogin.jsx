import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/adminmrc");
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-[#18181b] border border-gray-700 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col gap-6 w-full max-w-md"
      >
        <h2 className="text-[#ffffff] font-G-Sans-bold text-2xl sm:text-3xl text-center mb-2">
          Admin Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#232325] text-white placeholder-gray-400 px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-green-600 transition duration-300 ease-out w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-[#232325] text-white placeholder-gray-400 px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-green-600 transition duration-300 ease-out w-full"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-green-600 to-green-800 text-white font-G-Sans-bold py-3 rounded-lg shadow hover:from-green-700 hover:to-green-900 transition duration-300 ease-out w-full"
        >
          Login
        </button>
      </form>
    </section>
  );
}
