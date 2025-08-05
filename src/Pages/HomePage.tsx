import React, { useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const getUserData = async () => {
    try {
      const res = await axios.post(
        'http://localhost:3000/api/v1/user/getUserData',
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem('token'),
          },
        }
      );
      console.log(res.data); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return <div>HomePage</div>;
}

export default HomePage;
