import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../utils/supabase";
export default function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) console.log(error);
    console.log("🔥 Signup clicked", email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05080d] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,193,255,0.15),transparent_60%)]" />

      <div className="relative z-10 w-full max-w-md bg-[#0b0f17]/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-3">
            <span className="text-cyan-400 text-xl">✦</span>
          </div>
          <h1 className="text-2xl font-semibold text-white">GradMentor AI</h1>
          <p className="text-sm text-white/60 mt-1">
            Create your account to get started.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition font-medium text-black"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs text-white/40">or continue with</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Social buttons */}
        <div className="flex gap-3">
          <button
            type="button" // ✅ IMPORTANT
            className="flex-1 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center justify-center gap-2"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
          </button>

          <button
            type="button"
            className="flex-1 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center justify-center"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.55-3.87-1.55-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.78 2.7 1.27 3.36.97.1-.75.4-1.27.72-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.77 1.04.77 2.1v3.11c0 .31.21.67.8.56 4.56-1.53 7.85-5.86 7.85-10.96C23.5 5.74 18.27.5 12 .5z" />
            </svg>
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-white/50 mt-6">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/  ")}
            className="text-cyan-400 hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
