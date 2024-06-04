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

// window.initializeChatbot = () => {
//     const chatbox = document.createElement("div");
//     chatbox.style.backgroundImage = "url('/images/evrenoochatbot.png')";
//     chatbox.style.position = "fixed";
//     chatbox.style.bottom = "10px";
//     chatbox.style.right = "10px";
//     chatbox.style.width = "100px"; // Add width
//     chatbox.style.height = "100px"; // Add height
//     chatbox.style.backgroundSize = "cover"; // Ensure the image covers the div
//     chatbox.style.backgroundRepeat = "no-repeat"; // Prevent the image from repeating
//     chatbox.style.cursor = "pointer"; // Add cursor style to indicate it's clickable
//     document.body.appendChild(chatbox);
// }