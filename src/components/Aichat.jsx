import React from "react";

function Aichat() {
  return (
    <div className="App">
      {/* <main className="App-main"> */}
      <div className="welcome-box">
        <h2>Welcome to Chat AI! 👋</h2>
        <p>
          I'm here to help you with anything you'd like to know. You can ask me
          about:
        </p>
        <div className="button-container">
          <button>💡 General knowledge</button>
          <button>🛠️ Technical questions</button>
          <button>✍️ Writing assistance</button>
          <button>🧩 Problem solving</button>
        </div>
        <p>Just type your question below and press Enter or click Send!</p>
      </div>
      <div className="input-box">
        <input type="text" placeholder="Ask anything..." />
        <button>Send</button>
      </div>
      {/* </main> */}
    </div>
  );
}

export default Aichat;
