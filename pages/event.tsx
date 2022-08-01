import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Main from '../components/layout/Main';

function Event() {
  return (
    <Main isLoggedin={true}>
      <p>Event</p>
    </Main>
  );
}

export default withPageAuthRequired(Event);
