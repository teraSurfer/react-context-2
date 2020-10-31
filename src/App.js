import React, { useState } from "react";
import { UserProvider } from "./contexts/UserContext";
import UserProfile from "./components/UserProfile";
import styled from "styled-components";

const Button = styled.button`
  padding: 20px;
  background-color: skyblue;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
`;

export default function App() {
  const [user, setUser] = useState({ id: "1", name: "Hello" });

  function handleButtonClick(evt) {
    evt.preventDefault();
    setUser({
      id: "3",
      name: "Virat"
    });
  }

  return (
    <UserProvider value={user}>
      <UserProfile />
      <Button onClick={handleButtonClick}>Get User Data</Button>
    </UserProvider>
  );
}
