import React from 'react';
import { View, Text, Button } from 'react-native';

const MobileLogin: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login com Google</Text>
      <Button title="Login" onPress={() => console.log('Login pressed')} />
    </View>
  );
};

export default MobileLogin;
