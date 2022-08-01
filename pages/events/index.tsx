import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import MainLayout from '../../components/layout/MainLayout';

function Events() {
  return (
    <MainLayout isLoggedin={true}>
      <p>Events</p>
    </MainLayout>
  );
}

export default withPageAuthRequired(Events);
