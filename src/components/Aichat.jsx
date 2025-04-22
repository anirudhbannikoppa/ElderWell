import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, generatingAnswer]);

  async function generateAnswer(e) {
    e.preventDefault();
    if (!question.trim()) return;

    setGeneratingAnswer(true);
    const currentQuestion = question;
    setQuestion(""); // Clear input immediately after sending

    // Add user question to chat history
    setChatHistory((prev) => [
      ...prev,
      { type: "question", content: currentQuestion },
    ]);

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      const aiResponse =
        response["data"]["candidates"][0]["content"]["parts"][0]["text"];
      setChatHistory((prev) => [
        ...prev,
        { type: "answer", content: aiResponse },
      ]);
      setAnswer(aiResponse);
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }
    setGeneratingAnswer(false);
  }

  return (
    <div className="inset-0 bg-white">
      <div className="h-full max-w-4xl mx-auto flex flex-col p-1 pb-4">
        {/* Fixed Header */}
        <header className="text-center py-1 ">
          <h1 className="text-2xl font-bold text-customPurple hover:text-blue-600 transition-colors">
            Chat AI
          </h1>
        </header>

        {/* Scrollable Chat Container - Updated className */}
        <div
          ref={chatContainerRef}
          className="h-[450px] overflow-y-auto mb-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg p-4 hide-scrollbar"
        >
          {chatHistory.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="bg-white rounded-xl p-6 max-w-2xl">
                <h2 className="text-xl font-bold text-customPurple mb-2">
                  Welcome to Chat AI! 👋
                </h2>
                <p className="text-gray-600 mb-2">
                  I'm here to help you with anything you'd like to know. You can
                  ask me about:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-left">
                  <div className="bg-gradient-to-r from-violet-50 to-violet-100 p-4 rounded-lg shadow-sm ">
                    <span className="text-blue-500">💡</span> General knowledge
                  </div>
                  <div className="bg-gradient-to-r from-violet-50 to-violet-100  p-4 rounded-lg shadow-sm ">
                    <span className="text-blue-500">🔧</span> Technical
                    questions
                  </div>
                  <div className="bg-gradient-to-r from-violet-50 to-violet-100 p-4 rounded-lg shadow-sm ">
                    <span className="text-blue-500">📝</span> Writing assistance
                  </div>
                  <div className="bg-gradient-to-r from-violet-50 to-violet-100 p-4 rounded-lg shadow-sm ">
                    <span className="text-blue-500">🤔</span> Problem solving
                  </div>
                </div>
                <p className="text-gray-500 mt-4 text-sm">
                  Just type your question below and press Enter or click Send!
                </p>
              </div>
            </div>
          ) : (
            <>
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    chat.type === "question" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block max-w-[80%] p-3 rounded-lg overflow-auto hide-scrollbar ${
                      chat.type === "question"
                        ? "bg-customPurple text-white rounded-br-none"
                        : "bg-white text-gray-800 rounded-bl-none"
                    }`}
                  >
                    <ReactMarkdown>{chat.content}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </>
          )}
          {generatingAnswer && (
            <div className="text-left">
              <div className="inline-block bg-gray-100 p-3 rounded-lg animate-pulse">
                Thinking...
              </div>
            </div>
          )}
        </div>

        {/* Fixed Input Form */}
        <form
          onSubmit={generateAnswer}
          className=" rounded-lg shadow-lg p-2 bg-gradient-to-r from-blue-50 to-blue-100"
        >
          <div className="flex gap-2">
            <textarea
              required
              className="flex-1 border border-gray-300 rounded p-2 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask anything..."
              rows="2"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  generateAnswer(e);
                }
              }}
            ></textarea>
            <button
              type="submit"
              className={`px-4 py-1 bg-customPurple text-white rounded-md hover:bg-blue-600 transition-colors ${
                generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={generatingAnswer}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
