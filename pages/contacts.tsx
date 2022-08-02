import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import MainLayout from "../src/components/layouts/MainLayout";

function Contacts() {
  return (
    <MainLayout>
      <p>Contacts</p>
    </MainLayout>
  );
}

export default withPageAuthRequired(Contacts);
