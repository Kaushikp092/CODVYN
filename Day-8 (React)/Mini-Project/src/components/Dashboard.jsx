import { useState, useEffect } from "react";
import "./Dashboard.css";
import LimitSelector from "./LimitSelector";
import PageSelector from "./PageSelector";

const Dashboard = () => {
   const [photos, setPhotos] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [limit, setLimit] = useState(10);
   const [page, setPage] = useState(1);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(
               `https://boringapi.com/api/v1/photos/?page=${page}&limit=${limit}`,
            );
            if (!res.ok) throw new Error("Network connection failed");
            const data = await res.json();
            setPhotos(data.photos || []);
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };
      fetchData();
   }, [limit, page]);

   return (
      <>
         <div className="header">
            <h2>Fetching Cards detail info</h2>
            <LimitSelector limit={limit} onLimitChange={setLimit} />
            <PageSelector page={page} onPageChange={setPage} />
         </div>
         <div className="container">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
               <div className="card-grid">
                  {photos.map((photo) => (
                     <div className="card" key={photo.id}>
                        <img src={photo.url} />
                        <div className="card-content">
                           <h2>{photo.title}</h2>
                           <p>{photo.description}</p>
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>
      </>
   );
};

export default Dashboard;
