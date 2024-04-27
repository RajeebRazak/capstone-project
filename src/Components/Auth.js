// auth.js

import { useState, useEffect } from 'react';
import axios from 'axios';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   /*  // Your authentication logic here, such as checking if the user is logged in */
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3004/login'); /* // Adjust the URL to your backend endpoint */
        setUser(response.data);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return { user, loading };
}
