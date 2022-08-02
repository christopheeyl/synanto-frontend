import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import MainLayout from '../common/components/layouts/MainLayout';

function Events() {
  return (
    <MainLayout isLoggedin={true}>
      <p>Events</p>
    </MainLayout>
  );
}

export default withPageAuthRequired(Events);
