import { StyleSheet, View } from "react-native";
import { useState } from "react";

import { Calc } from "../components/Calc";
import { Keyboard } from "../components/Keyboard";

export function Home() {
  const [keyboardInput, setKeyboardInput] = useState<string>('31337');
  return (
    <View style={style.container}>
      <Calc input={keyboardInput}/>
      <Keyboard
        input={keyboardInput}
        setInput={setKeyboardInput}
      />
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