"use client"

import MUILink from '@mui/material/Link';
import AuthPage from '../_components/auth/page';
import { SignUpRequest, useSignUp } from '../hooks/useSignUp';

const SignUp = () => {
  const { signUp, error } = useSignUp();

  return (
    <AuthPage
      submitLabel="Cadastrar"
      error={error ? 'Nome, e-mail ou senha inválidos' : ''}
      onSubmit={signUp}
      type="signup"
    >
      <MUILink href="/login" sx={{ textAlign: 'center' }}>
        Já tem uma conta? Entre
      </MUILink>
    </AuthPage>
  );
}

export default SignUp;
