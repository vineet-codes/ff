import Head from 'next/head';
import styled from 'styled-components';

const LogoText = styled.h1`
  text-align: center;
`;

const Message = styled.p`
  text-align: center;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='app'>
        <LogoText className='heading-logo'>Fast Feedback</LogoText>
        <Message> Welcome to fast feedback landing page</Message>
      </div>
    </>
  );
}
