import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';
import Layout from '../layouts/Layout';

function Event() {
  return (
    <Layout>
      <p>Event</p>
    </Layout>
  );
}

export default withPageAuthRequired(Event);
