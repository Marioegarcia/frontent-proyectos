import io from "socket.io-client";

let socket = io("https://chatmario.herokuapp.com/");

export default socket;
