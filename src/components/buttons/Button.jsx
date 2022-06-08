import React from "react";
import { Pressable, Text } from "react-native";

const Button = () => {
  return (
    <Pressable>
      <Text style={{ color: 'red' }}>PRESS ME</Text>
    </Pressable>
  )
}

export default Button;