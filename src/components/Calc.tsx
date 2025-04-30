import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { keyboardContext } from "../screens/Home";

export function Calc() {
  const keyboardInput = useContext(keyboardContext);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 32, fontWeight: 'bold'}}>
        {keyboardInput}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '49%',
    alignItems:'flex-end',
    justifyContent: 'flex-end',

    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    paddingBottom: 16,
  }
})