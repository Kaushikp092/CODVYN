import { useState, useEffect } from "react";

const UserList = () => {
   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const res = await fetch(
               "https://jsonplaceholder.typicode.com/users",
            );
            if (!res.ok) throw new Error("Failed to fetch users data");
            const data = await res.json();
            setUsers(data);
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };
      fetchUsers();
   }, []);

   return (
      <>
         {/* Day - 12 */}
         {loading && <p>Loading users...</p>}
         {error && <p>Error: {error}</p>}
         {!loading && !error && (
            <ul>
               {users.map((user) => (
                  <li key={user.id}>
                     {user.name} - {user.email}
                  </li>
               ))}
            </ul>
         )}

         {/* Day - 13*/}
      </>
   );
};

export default UserList;
