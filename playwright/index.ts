import { beforeMount } from '@playwright/experimental-ct-react/hooks';
import { createServer } from "miragejs"

beforeMount(async () => {
  createServer({
    routes() {
      this.get("/api/users", () => [
        { id: "1", name: "Luke" },
        { id: "2", name: "Leia" },
        { id: "3", name: "Anakin" },
      ])
    },
  });
});
