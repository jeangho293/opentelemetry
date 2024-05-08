import { Store } from "confidence";

const doc = {
  server: {
    port: {
      $env: "PORT",
      $default: 3000,
    },
  },
};

const store = new Store(doc);
export const getConfig = (key: string) => store.get(key);
