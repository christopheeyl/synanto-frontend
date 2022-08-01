import React from 'react';
import Chat from '../components/layout/Chat';
import Main from '../components/layout/Main';

function chat() {
  return (
    <Main isLoggedin={true}>
      <Chat />
    </Main>
  );
}

export default chat;