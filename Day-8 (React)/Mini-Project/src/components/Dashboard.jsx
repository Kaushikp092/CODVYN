import { useState, useEffect } from "react";
import "./Dashboard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import LimitSelector from "./LimitSelector";
import PageSelector from "./PageSelector";

const Dashboard = () => {
   const [userData, setUserData] = useState([]);
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
            setUserData(data.photos || []);
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };
      fetchData();
   }, [limit,page]);

   const handleChange = () => {
      window.location.reload();
   };

   return (
      <>
         <div className="header">
            <h2>Fetching Cards detail info</h2>
            <Button variant="contained" size="medium" onClick={handleChange}>
               Refresh
            </Button>
            <LimitSelector limit={limit} onLimitChange={setLimit} />
            <PageSelector page={page} onPageChange={setPage} />
         </div>
         <div className="container">
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {!loading && !error && (
               <>
                  <div className='card-grid'>
                     {userData.map((data) => (
                        <Card className='card' key={data.id} sx={{ maxWidth: 345 }}>
                           <CardActionArea>
                              <CardMedia
                                 component="img"
                                 height="140"
                                 image={data.url}
                              />
                              <CardContent>
                                 <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                 >
                                    {data.title}
                                 </Typography>
                                 <Typography
                                    variant="body2"
                                    sx={{ color: "text.secondary" }}
                                 >
                                    {data.description}
                                 </Typography>
                              </CardContent>
                           </CardActionArea>
                        </Card>
                     ))}
                  </div>
               </>
            )}
         </div>
      </>
   );
};

export default Dashboard;
