// start/socket.ts
import Ws from "App/Services/Ws";

Ws.boot();

Ws.io.on("connection", (socket) => {
  socket.emit("message", { hello: "world" });

  socket.on("response", (data) => {
    console.log(data);
  });
});
