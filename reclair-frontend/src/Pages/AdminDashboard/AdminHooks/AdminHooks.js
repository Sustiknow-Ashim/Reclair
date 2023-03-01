import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/api/user/${email}`)
        .then((res) => res.json())
        .then((data) => {
          if(data.role === 'Admin'){
              setIsAdmin(true)
              setIsAdminLoading(false)
          }

        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
