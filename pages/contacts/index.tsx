import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import MainLayout from '../../components/layout/MainLayout';

function Contacts() {
  return (
    <MainLayout isLoggedin={true}>
      <p>Contacts</p>
    </MainLayout>
  );
}

export default withPageAuthRequired(Contacts);
