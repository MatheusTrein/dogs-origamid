import React from 'react';

import { useNavigate } from 'react-router-dom';

import useFetch from '../hooks/useFetch';
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from '../api/api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setlogin] = React.useState(null);

  const navigate = useNavigate();

  const { error, request, loading } = useFetch('auth');

  function userLogout() {
    setData(null);
    setlogin(null);
    window.localStorage.removeItem('token');
    navigate('/login');
  }

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setData(json);
      setlogin(true);
    } else {
      userLogout();
    }
  }

  async function userLogin({ username, password }) {
    const { url, options } = TOKEN_POST({ username, password });
    const { response, json } = await request(url, options);
    if (response.ok) {
      const { token } = json;
      window.localStorage.setItem('token', JSON.stringify(token));
      await getUser(token);
      navigate('/conta');
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = JSON.parse(window.localStorage.getItem('token')) || null;
      if (token) {
        const { url, options } = TOKEN_VALIDATE_POST(token);
        const { response } = await request(url, options);
        if (response.ok) {
          await getUser(token);
        } else {
          userLogout();
        }
      }
    }
    autoLogin();
  }, []);

  return (
    <UserContext.Provider
      value={{
        data,
        getUser,
        userLogin,
        userLogout,
        login,
        loading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
