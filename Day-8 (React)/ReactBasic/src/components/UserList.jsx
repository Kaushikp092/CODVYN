import React, { useState, useEffect } from "react";

const UserList = () => {
   const [userData, setUserData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      //using async await inside useEffect and also using Try catch
      const fetchData = async () => {
         try {
            const res = await fetch(
               "https://jsonplaceholder.typicode.com/users",
            );
            if (!res.ok) throw new Error("Network response was not ok"); //if res is not ok then it's throw error if anything wrong in api call after user Query then this msg will pop up in ui
            const data = await res.json();
            setUserData(data);
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };
      fetchData();
   }, []);

   return (
      <>
         <h2>Fetching and Printing data</h2>
         {loading && <p>Loading...</p>}

         {/*or other wise this will shown up */}
         {error && <p style={{ color: "red" }}>Error: {error}</p>}

         {/* if everthing works well then only data will be shown in ui */}
         {!loading && !error && (
            <div>
               {userData.map((data) => (
                  <ul key={data.id} style={{ listStyle: "none" }}>
                     <li>Username: {data.name}</li>
                     <li>Phone Number: {data.phone}</li>
                     <li>Company Name: {data.company.name}</li>
                  </ul>
               ))}
            </div>
         )}
      </>
   );
};

export default UserList;
