import  { useEffect, useState } from 'react';

const UserHooks = (email) => {
  const [isUser, setIsUser] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/api/user/${email}`)
        .then((res) => res.json())
        .then((data) => {
            if(data.role === 'user'){
                setIsUser(true);
                setIsUserLoading(false)
            }
        });
    }
  }, [email]);
  return [isUser, isUserLoading];


};

export default UserHooks;