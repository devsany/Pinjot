import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";

const ProfilePage = () => {
  const [users, setUsers] = React.useState([]);
  const { userId } = useParams();
  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "userImages"));
      console.log(querySnapshot);
      const userList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUsers(userList);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userId);
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(users);
  return (
    <div>
      ProfilePage asdasdasd asdas asd asd{userId}
      {users.map((user) => {
        return <>{user.name}</>;
      })}
    </div>
  );
};

export default ProfilePage;
