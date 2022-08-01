import React from 'react';
import Chat from '../components/layout/Chat';
import Main from '../components/layout/Main';

export default function chat() {
  return (
    <Main isLoggedin={true}>
      <Chat />
    </Main>
  );
}
