import React, { useEffect, useState } from "react";
import ApiData from "../ApiData";

const Card = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const data = await ApiData();
    setUser(data.results[0]);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) {
    return (
      <div className="text-center p-5">
        <p>Loading user data...</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-r from-gray-600 to-zinc-600">
      
      <div className="w-1/2 bg-zinc-500 shadow-lg rounded-lg p-6 flex border pt-[5rem]">
        
        <img
          className="w-[10rem] h-[15rem] rounded-lg border-2 border-gray-400 ml-2"
          src={user.picture.large}
          alt="Profile Pic"
        />

        
        <div className="ml-20 w-1/2">
          <h2 className="flex gap-x-2 text-2xl font-bold text-white mb-2">
            <p>{user.name.title}</p>
            <p>{user.name.first}</p>
            <p>{user.name.last}</p>
          </h2>
          <p className="text-white mt-3">Gender: {user.gender}</p>
          <p className="text-zinc-300 mt-3">Phone: {user.phone}</p>
          <div className="flex justify-between text-white mt-3">
            <p>DOB: {formatDate(user.dob.date)}</p>
            <p>Age: {user.dob.age}</p>
          </div>
          <div className="flex justify-between text-white mt-3">
            <p>Registered: {formatDate(user.registered.date)}</p>
            <p>Years: {user.registered.age}</p>
          </div>
        </div>
      </div>

      <button
        onClick={fetchUser}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      >
        Get New User
      </button>
    </div>
  );
};

export default Card;
