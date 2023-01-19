import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "John doe",
      image:"https://www.guinnessworldrecords.com/Images/Burj-portrait-lagre_tcm25-475749.jpg",
      placeCount: 3,
    },
  ];
  return <UsersList users={USERS} />;
};

export default Users;
