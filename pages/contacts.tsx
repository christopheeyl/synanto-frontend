import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Main from '../components/layout/Main';

function Contacts() {
  return (
    <Main isLoggedin={true}>
      <p>Contacts</p>
    </Main>
  );
}

withPageAuthRequired(Contacts);
