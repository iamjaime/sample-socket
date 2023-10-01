import type { ApplicationContract } from "@ioc:Adonis/Core/Application";

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
    if (this.app.environment === "web") {
      await import("../start/socket"); // make sure to adjust this to your actual socket.ts file path
    }
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
