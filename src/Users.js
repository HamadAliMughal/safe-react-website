import React, { useEffect, useState } from "react";
import http from "./http";

export default function Users() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    http.get("/users").then((res) => {
      setUsers(res.data);
      console.log(res);
    });
  };

  return (
    <ul>
      {users.map((item) => (
        <li key={item.User_id}>
          {item.User_id} : <b>{item.First_Name} {item.Last_Name}</b> : {item.Email} : {item.Password}
        </li>
      ))}
    </ul>
  );
}
