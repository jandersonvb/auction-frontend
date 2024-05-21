"use client"

import { useState } from "react";
import { UNKNOWN_ERROR_MESSAGE } from "../constants/errors";

export interface SignUpRequest {
  username: string;
  email: string;
  password: string;
}

const useSignUp = () => {
  const [error, setError] = useState<string>();

  const signUp = async (request: SignUpRequest) => {
    try {
      const response = await fetch('http://localhost:3001/auth/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        if (response.status === 401) {
          setError('Nome, e-mail ou senha inválidos.');
        } else {
          setError(UNKNOWN_ERROR_MESSAGE);
        }
        return;
      }
      setError("");
      // Handle successful sign up (e.g., store token, redirect, etc.)
    } catch (error) {
      setError(UNKNOWN_ERROR_MESSAGE);
    }
  };

  return { signUp, error };
}

export { useSignUp }
