const { log } = require("console");
const { setMaxListeners } = require("stream");

fetch("http://90.49.45.190:3000/api/messages")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      messages.innerHTML += `<li>${data[i].message}</li>`;
      window.scrollTo(0, document.body.scrollHeight);
    }
  });
var socket = io();
var send = function () {
  var text = document.getElementById("input").value;
  const idConnected = window.location.search.slice(9);
  fetch("http://90.49.45.190:3000/api/auth/login")
    .then((response) => response.json())
    .then((data) => {
      let findUser = data.find((p) => p._id == idConnected);
      socket.emit("chat message", findUser.username + " : " + text);
    });
};
var receiveMessage = function (msg) {
  messages.innerHTML += `<li>${msg}</li>`;
  window.scrollTo(0, document.body.scrollHeight);
};

socket.on("request message", receiveMessage);
btnSend.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.value);
  send();
  input.value = "";
  spam()
  
});
const spam = setTimeout(()=>{
console.log('test');

},10000)



socket.on("play song", () => {
  var audio = new Audio("https://od.lk/s/NTRfMjMyOTQwMDVf/light-562.mp3");
  audio.play();
});
