console.log("Simüle chatbot script geldi")


window.initializeChatbot = () => {
    const chatbox = document.createElement("div");
    chatbox.textContent = "Chatbot";
    chatbox.style.position = "fixed";
    chatbox.style.bottom = "10px";
    chatbox.style.right = "10px";
    chatbox.style.backgroundColor = "lightgrey";
    chatbox.style.color = "black";
    chatbox.style.padding = "5px";
    document.body.appendChild(chatbox);
}