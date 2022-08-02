import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import MainLayout from "../src/components/layouts/MainLayout";

function Events() {
  return (
    <MainLayout>
      <p>Events</p>
    </MainLayout>
  );
}

export default withPageAuthRequired(Events);
