import QuickChat from "../src/features/chat/QuickChat";
import MainLayout from "../src/components/layouts/MainLayout";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

function Chat() {
  return (
    <MainLayout>
      <QuickChat />
    </MainLayout>
  );
}

export default withPageAuthRequired(Chat);
