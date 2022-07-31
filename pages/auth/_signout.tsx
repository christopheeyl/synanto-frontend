import { NextPage } from 'next';
import { signOut } from 'next-auth/react';
import React, { FC, Fragment } from 'react';

const SignOut: FC = () => {
  return (
    <Fragment>
      <button onClick={() => signOut()}>Sign out</button>
    </Fragment>
  );
};

export default SignOut;
