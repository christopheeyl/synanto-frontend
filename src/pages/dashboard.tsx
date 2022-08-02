import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Router from 'next/router';
import React from 'react';
import MainLayout from '../common/components/layouts/MainLayout';
import { removeTokenCookie, setTokenCookie } from '../common/helpers/auth/tokenCookies';

function Dashboard() {
  
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return (
    <MainLayout isLoggedin={true}>
      <>      
        You are not log in
        <button onClick={() => {Router.replace('/api/auth/login')}}>Log in</button>
      </>
    </MainLayout>
  );
}

export default withPageAuthRequired(Dashboard);
