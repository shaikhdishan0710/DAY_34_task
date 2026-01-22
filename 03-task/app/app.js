import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { saveToken, getToken, removeToken } from './services/tokenStorage';

export default function App() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUserToken();
  }, []);

  const checkUserToken = async () => {
    const storedToken = await getToken();
    if (storedToken) setToken(storedToken);
    setLoading(false);
  };

  const login = async () => {
    const fakeToken = 'token_12345'; // simulate backend token
    await saveToken(fakeToken);
    setToken(fakeToken);
  };

  const logout = async () => {
    await removeToken();
    setToken(null);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return token ? (
    <HomeScreen onLogout={logout} />
  ) : (
    <LoginScreen onLogin={login} />
  );
}
