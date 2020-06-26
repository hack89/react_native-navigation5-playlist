import React from "react";

import { Button } from "react-native";

export default ({ navigation }) => {
  return (
    <>
      <Button title="Sign In" onPress={() => alert("go")} />
      <Button title="Sign Up" onPress={() => navigation.push("SignUp")} />
    </>
  );
};
