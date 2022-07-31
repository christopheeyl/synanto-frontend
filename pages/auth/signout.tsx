import { NextPage } from 'next';
import { signOut } from 'next-auth/react';
import React, { Fragment } from 'react';

const SignOut: NextPage = (): JSX.Element  => {
  return (
    <Fragment>
      <button onClick={() => signOut()}>Sign out</button>
    </Fragment>
  )
}

export default SignOut;
