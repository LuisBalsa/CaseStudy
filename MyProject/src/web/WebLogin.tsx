import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import '../index.css';

const WebLogin: React.FC = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [tokenValid, setTokenValid] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Verificar se já existe um token no localStorage
    const token = localStorage.getItem('access_token');
    if (token) {
      // Verifique com o backend se o token ainda é válido
      axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/verify-token`, { token })
        .then(response => {
          if (response.data.valid) {
            // Se o token for válido, definir o usuário e redirecionar para a página de perfil
            setUser(response.data.user);
            setTokenValid(true);
          } else {
            // Se o token não for válido, remover do localStorage
            localStorage.removeItem('access_token');
            setTokenValid(false);
          }
        })
        .catch(() => {
          localStorage.removeItem('access_token');
          setTokenValid(false);
        });
    }
    setIsLoading(false);
  }, []);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        // Enviar o código de autorização para o backend
        const backendResponse = await axios.post(`/api/authenticate`, {
          code: response.access_token,
        });

        // Armazenar o token de acesso no localStorage
        localStorage.setItem('access_token', backendResponse.data.access_token);

        // Definir o usuário e redirecionar para a página de perfil
        setUser(backendResponse.data.user);
        setTokenValid(true);
      } catch (error) {
        setError('Login falhou, tente novamente.');
      }
    },
    onError: () => setError('Login falhou, tente novamente.'),
    flow: 'implicit',
  });

  const logout = () => {
    localStorage.removeItem('access_token');
    setUser(null);
    setTokenValid(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-lg flex flex-col items-center space-y-4">
          <div className="text-center">
            <img
              src="https://fococriativo.pt/wp-content/uploads/2023/09/logo-foco-criativo-Preto.svg"
              alt="Fococriativo Logo"
              className="w-20 h-20 mb-4 mx-auto"
            />
            <p className="text-gray-500">Carregando...</p>
          </div>
        </div>
      </div>
    );
  }

  if (tokenValid) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-lg flex flex-col items-center space-y-4">
          <div>
            <div className="text-2xl font-semibold text-gray-800">Bem-vindo, {user?.name}</div>
            {user &&
            <p className="text-gray-500">Email: {user?.email}</p>}
            <button
              className="items-center justify-center  px-4 py-2 border border-gray-300 rounded-full bg-red-500 text-white hover:bg-red-700"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full bg-gray-100">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-lg flex flex-col items-center space-y-4">
        <div className="text-center">
          <img
            src="https://fococriativo.pt/wp-content/uploads/2023/09/logo-foco-criativo-Preto.svg"
            alt="Fococriativo Logo"
            className="w-20 h-20 mb-4 mx-auto"
          />
          <button
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            onClick={() => login()}
          >
            <img
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
              alt="Google G Logo"
              className="w-6 h-6 mr-3"
            />
            <span className="text-sm font-medium">Sign in with Google</span>
          </button>
          {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default WebLogin;
