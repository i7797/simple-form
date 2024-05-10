import React, { useUser } from './UserContext';

const DashboardPage = () => {
  const { user } = useUser();

  return (
    <div  className='dashboard'>
      <h1>Welcome to the Dashboard</h1>
      {user && (
        <div >
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
