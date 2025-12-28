export default function DashBoard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f14] to-black text-white flex flex-col">
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/5 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
            <svg
              className="h-5 w-5 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5c-3.314 0-6.314-1.343-8.16-3.522L12 14z" />
            </svg>
          </div>
          <div>
            <h1 className="font-semibold text-lg">GradMentor AI</h1>
            <p className="text-xs text-gray-400">Your AI Career Companion</p>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        {/* ICON */}
        <div className="mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 animate-fadeIn">
          <svg
            className="h-8 w-8 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5c-3.314 0-6.314-1.343-8.16-3.522L12 14z" />
          </svg>
        </div>

        {/* TITLE */}
        <h2 className="text-3xl font-semibold mb-3">
          Welcome to <span className="text-cyan-400">GradMentor AI</span>
        </h2>
        <p className="text-gray-400 max-w-md mb-10">
          Ask anything about your career, learning, or personal growth. I’m here
          to guide you.
        </p>
      </main>

      {/* INPUT BAR */}
      <footer className="px-4 pb-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
            <input
              type="text"
              placeholder="Ask GradMentor AI anything..."
              className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-400"
            />
            <button className="h-9 w-9 rounded-lg bg-cyan-500 hover:bg-cyan-400 flex items-center justify-center transition">
              <svg
                className="h-4 w-4 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">
            Press <span className="text-gray-300">Enter</span> to send,{" "}
            <span className="text-gray-300">Shift + Enter</span> for new line
          </p>
        </div>
      </footer>
    </div>
  );
}
