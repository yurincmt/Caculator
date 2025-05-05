import { StyleSheet, View } from "react-native";
import { useState } from "react";

import { Keyboard } from "../components/Keyboard";
import { Display } from "../components/Display";

export function Home() {
  const [previousInput, setPreviousInput] = useState<string>('');
  const [keyboardInput, setKeyboardInput] = useState<string>('0');

  return (
    <View style={style.container}>
      <Display
        lastInput={previousInput}
        input={keyboardInput}
        />
      <Keyboard
        setLastInput={setPreviousInput}
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