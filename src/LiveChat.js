import React, { useState, useEffect, useRef } from "react";

function LiveChat({ socket }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [username, setUsername] = useState(sessionStorage.getItem("username") || "");
  const [isUsernameSet, setIsUsernameSet] = useState(!!sessionStorage.getItem("username"));
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => socket.off("message");
  }, [socket]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (inputMessage.trim() !== "" && username) {
      const fullMessage = { username, text: inputMessage };
      socket.emit("message", fullMessage);
      setInputMessage("");
    }
  };

  const setUsernameAndSave = () => {
    if (username.trim() !== "") {
      sessionStorage.setItem("username", username); 
      setIsUsernameSet(true);
    }
  };

  return (
    <div className="p-6 rounded-lg min-w-[300px]">

      {!isUsernameSet ? (
        <div className="mb-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Escribe tu nombre de usuario"
            className="bg-gray-700 text-white border border-gray-600 rounded p-2 w-full md:mr-2 mb-2 md:mb-0 focus:outline-none focus:border-primary-blue"
          />
          <button
            onClick={setUsernameAndSave}
            className="bg-sky-blue text-white px-4 py-2 mt-2 rounded hover:bg-secondary-blue focus:outline-none w-full md:w-auto"
          >
            Guardar nombre de usuario
          </button>
        </div>
      ) : (
        <>
          <div className="h-96 bg-black overflow-y-auto p-4 mb-4 rounded">
            {messages.map((msg, index) => (
              <p key={index} className="text-gray-300 mb-2 break-words">
                <span className="font-bold text-sky-blue">{msg.username}:</span> 
                <span className="text-white"> {msg.text}</span>
              </p>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex flex-wrap md:flex-nowrap">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyUp={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Escribe un mensaje"
              className="bg-gray-700 text-white border border-gray-600 rounded p-2 w-full md:mr-2 mb-2 md:mb-0 focus:outline-none focus:border-primary-blue"
            />
            <button
              onClick={sendMessage}
              className="bg-sky-blue text-white px-4 py-2 rounded hover:bg-secondary-blue focus:outline-none w-full md:w-auto"
            >
              Enviar
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default LiveChat;

