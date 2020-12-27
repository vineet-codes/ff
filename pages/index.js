import Head from 'next/head';
import styled, { css } from 'styled-components';

import { useAuth } from './../lib/auth';

const UserInfo = styled.div`
  width: 65ch;
  display: flex;
  flex-direction: column;
`;

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  text-align: center;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
    `}

  &:hover {
    cursor: pointer;
  }
`;

export default function Home() {
  const auth = useAuth();
  return (
    <div className='app'>
      <Head>
        <title>Home | Last Man Standing</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <UserInfo>
        <p className='email'>User: {auth?.user?.email}</p>
        {!auth.user ? (
          <Button onClick={(e) => auth.signinWithGithub()} primary>
            Sign in with Github
          </Button>
        ) : (
          <Button onClick={(e) => auth.signout()} primary>
            SignOut
          </Button>
        )}
      </UserInfo>
    </div>
  );
}
