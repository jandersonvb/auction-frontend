"use client"

import MUILink from '@mui/material/Link';
import AuthPage from '../_components/auth/page';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const { login, error } = useLogin()


  return (
    <AuthPage
      submitLabel="Entrar"
      error={error ? 'E-mail ou senha inválidos' : ''}
      onSubmit={login}
      type='login'
    >
      <MUILink href="/signup" sx={{
        textAlign: 'center'

      }}>
        Não tem uma conta? Registre-se
      </MUILink>
    </AuthPage>
  )
}
export default Login