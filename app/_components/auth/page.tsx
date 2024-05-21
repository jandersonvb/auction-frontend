"use client"

import { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';

interface AuthPageProps {
  type?: 'login' | 'signup'
  submitLabel: string
  error?: string
  children: React.ReactNode
  onSubmit: (request: { username: string, email: string, password: string }) => Promise<void>
}

const AuthPage = ({ submitLabel, children, error, onSubmit, type }: AuthPageProps) => {
  const [username, setUserName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <Stack spacing={3} sx={{ height: '100vh', maxWidth: { xs: '70%', md: '30%' }, margin: '0 auto', justifyContent: 'center' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        {type}
      </Typography>
      <TextField
        label='Nome'
        variant='outlined'
        value={username}
        error={!!error}
        helperText={error}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        label='Email'
        type='email'
        variant='outlined'
        value={email}
        error={!!error}
        helperText={error}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Senha"
        type="password"
        variant='outlined'
        value={password}
        error={!!error}
        helperText={error}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="inherit"
        onClick={() => onSubmit({ username, email, password })}
      > {submitLabel}
      </Button>

      {children}
    </Stack >
  )
}

export default AuthPage;