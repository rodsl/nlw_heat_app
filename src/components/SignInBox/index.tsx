import React from "react";

import { View } from "react-native";
import { Button } from "../Button";

import { styles } from "./styles";
import { COLORS } from "./../../theme/colors";
import { useAuth } from './../../hooks/auth';

export function SignInBox() {
  const {signIn, isSigningIn} = useAuth()
  return (
    <View style={styles.container}>
      <Button
        title="Entrar com o GitHub"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </View>
  );
}
