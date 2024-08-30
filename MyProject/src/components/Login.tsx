import React from 'react';
import { Platform } from 'react-native';
import MobileLogin from '../mobile/MobileLogin';
import WebLogin from '../web/WebLogin';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Constants from 'expo-constants';

const Login: React.FC = () => {
  if (Platform.OS === 'web') {
    const clientId = Constants.expoConfig?.extra?.googleClientIdWeb;
    return (
      <GoogleOAuthProvider clientId={clientId}>
        <WebLogin />
      </GoogleOAuthProvider>
    );
  } else {
    return <MobileLogin />;
  }
};

export default Login;
