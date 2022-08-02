import QuickChat from '../features/chat/QuickChat';
import MainLayout from '../common/components/layouts/MainLayout';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function Chat() {
  return (
    <MainLayout isLoggedin={true}>
      <QuickChat />
    </MainLayout>
  );
}

export default withPageAuthRequired(Chat);