import React, { useState, useEffect } from "react";

const UserList = () => {
   //       Task 1
   const [userData, setUserData] = useState([]);

   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((res) => res.json()) //fetch the raw respone data and convert into json format
         .then((data) => setUserData(data)) //passing data in userData using setuserData
         .catch((err) => console.log(err));
   }, []); //empty array means it only onces where dom mounted

   return (
      <>
         <h1>Fetching and Printing data</h1>
         {userData ? (
            <div>
               {userData.map((data) => (
                  <ul key={data.id}>
                     {data.name}
                     {data.email}
                  </ul>
               ))}
            </div>
         ) : (
            <p>Loading...</p>
         )}
      </>
   );
};

export default UserList;
