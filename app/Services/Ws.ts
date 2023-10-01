// app/Services/Ws.ts
import { Server } from "socket.io";
import AdonisServer from "@ioc:Adonis/Core/Server";

class Ws {
  public io: Server;
  private booted = false;

  public boot() {
    if (this.booted) {
      return;
    }

    this.booted = true;
    this.io = new Server(AdonisServer.instance!, {
      cors: {
        origin: "http://127.0.0.1:5500", // replace with your client's origin
        methods: ["GET", "POST"],
      },
    });
  }
}

export default new Ws();
