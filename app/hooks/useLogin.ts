"use client"

import { useState } from "react";
import { UNKNOWN_ERROR_MESSAGE } from "../constants/errors";

interface LoginRequest {
  username: string;
  password: string;
}

const useLogin = () => {
  const [error, setError] = useState<string>();

  const login = async (request: LoginRequest) => {
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        if (response.status === 401) {
          setError('Email ou senha inválidos.');
        } else {
          setError(UNKNOWN_ERROR_MESSAGE);
        }
        return;
      }
      setError("");
      // Handle successful login (e.g., store token, redirect, etc.)
    } catch (error) {
      setError(UNKNOWN_ERROR_MESSAGE);
    }
  };

  return { login, error };
}

export { useLogin };

