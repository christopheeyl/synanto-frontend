import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';
import Layout from '../layouts/Layout';

function Contacts() {
  return (
    <Layout>
      <p>Contacts</p>
    </Layout>
  );
}

export default withPageAuthRequired(Contacts);
