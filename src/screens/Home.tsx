import { StyleSheet, View } from "react-native";
import { createContext, useState } from "react";

import { Calc } from "../components/Calc";
import { Keyboard } from "../components/Keyboard";

export const keyboardContext = createContext<string>('');

export function Home() {
  const [keyboardInput, setKeyboardInput] = useState<string>('31337');
  return (
    <View style={style.container}>
      <keyboardContext.Provider value={keyboardInput}
      >
        <Calc />

        <Keyboard />
      </keyboardContext.Provider>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    // borderWidth: 1,
    flex: 1,
    padding: 22,
    backgroundColor: '#FFFFFF',
  }
})