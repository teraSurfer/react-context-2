import { createContext } from "react";

const userContext = createContext({ id: "", name: "" });

export const UserProvider = userContext.Provider;

export const UserConsumer = userContext.Consumer;
