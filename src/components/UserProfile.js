import React, { Fragment } from "react";
import { UserConsumer } from "../contexts/UserContext";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  justify-items: center;
  flex-direction: column;
`;

const UserInfo = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  padding: 0;
  margin-top: 5px;
`;

export const UserProfile = (props) => {
  return (
    <Wrapper>
      <UserConsumer>
        {({ id, name }) => {
          return (
            <Fragment>
              <UserInfo>ID: {id}</UserInfo>
              <UserInfo>Name: {name}</UserInfo>
            </Fragment>
          );
        }}
      </UserConsumer>
    </Wrapper>
  );
};

export default UserProfile;
