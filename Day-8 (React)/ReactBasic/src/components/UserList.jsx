import React, { useState, useEffect } from "react";

const UserList = ({ title }) => {
   //       Task 1
   const [userData, setUserData] = useState([]);

   useEffect(() => {
      fetch(
         "https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users"
      )
         .then((res) => res.json())
         .then((data) => setUserData(data));
   }, []);

   //    TASK 2
   //trying using async await
   const [todos, setTodos] = useState(null);
   useEffect(() => {
      async function fetchUser() {
         const res = await fetch("https://jsonplaceholder.typicode.com/todos");
         const data = await res.json();
         setTodos(data);
      }
      fetchUser();
   }, [title]);
   return (
      <>
         <h1>Printing of fetch data of Task 1</h1>
         <div>
            {userData
               ? userData.map((data) => (
                    <p key={data.id}>
                       {data.id}. {data.username} Email - {data.email}
                    </p>
                 ))
               : "Loading..."}
         </div>

         {/* TASK 2*/}
         <h2>Printing Task 2 data</h2>
         <div>
            {/* using slice method to print only first 10 todos */}
            {todos
               ? todos.slice(0,10).map((todo) => (
                    <p key={todo.id}>
                       {todo.id} {todo.title}
                    </p>
                 ))
               : "Loading..."}
         </div>
      </>
   );
};

export default UserList;
