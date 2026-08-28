import React, { useContext } from 'react';
import userContext from '../context/userContext';

function Profile() {
  // Is baar hum 'user' state read kar rahe hain
  const { user } = useContext(userContext);

  if (!user) return <div>Please Login Pehle</div>;

  return <div>Welcome, {user.username}!</div>;
}

export default Profile;