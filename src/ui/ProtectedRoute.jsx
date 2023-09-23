import { useEffect } from 'react';
import styled from 'styled-components';
import { useUser } from '../features/authentication/useUser';
import { useNavigate } from 'react-router-dom';

import Spinner from './Spinner';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser();

  // 2. If there is No authenticated user, redirect to the /login
  // we need to use a function or useEffect as navigate has to be called inside of a function
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login');
  }, [isAuthenticated, isLoading, navigate]);

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner></Spinner>
      </FullPage>
    );

  // 4. if there IS a user, render the children/app
  if (isAuthenticated) return children;
}
