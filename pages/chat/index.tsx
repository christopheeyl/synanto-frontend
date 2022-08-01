import QuickChat from './components/QuickChat';
import MainLayout from '../../components/layout/MainLayout';

function Chat() {
  return (
    <MainLayout isLoggedin={true}>
      <QuickChat />
    </MainLayout>
  );
}

export default Chat;