import React from "react";
import { StyleSheet, View } from "react-native";

import { infix2Polish, polishExpSolver } from "../utils/polishMath";
import { Button } from "./Button";

interface Props {
  setLastInput: (exp: string) => void;
  input: string;
  setInput: (buttonChar: string) => void;
  // setInput: React.Dispatch<React.SetStateAction<string>>;
}

export function Keyboard({setLastInput, input, setInput}: Props) {

  function handlePress(buttonChar: string) {
    switch (buttonChar) {
      case 'clear':
        setLastInput('');
        setInput('');
        break;

      case 'del':
        setInput(input.slice(0, -1));
        break;

      case '=':
        setLastInput(input);
        const polishExp = infix2Polish(input);
        setInput(String(polishExpSolver(polishExp)));
        break;
      
      default:
        setInput(input+buttonChar);
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Button iconName="C" accent onPress={() => handlePress('clear')}/>
        <Button iconName="7" onPress={() => handlePress('7')}/>
        <Button iconName="4" onPress={() => handlePress('4')}/>
        <Button iconName="1" onPress={() => handlePress('1')}/>
      </View>

      <View style={styles.column}>
        <Button iconName="Backspace" onPress={() => handlePress('del')}/>
        <Button iconName="8" onPress={() => handlePress('8')}/>
        <Button iconName="5" onPress={() => handlePress('5')}/>
        <Button iconName="2" onPress={() => handlePress('2')}/>
        <Button iconName="0" onPress={() => handlePress('0')}/>
      </View>

      <View style={styles.column}>
        <Button iconName="Percent" onPress={() => handlePress('%')}/>
        <Button iconName="9" onPress={() => handlePress('9')}/>
        <Button iconName="6" onPress={() => handlePress('6')}/>
        <Button iconName="3" onPress={() => handlePress('3')}/>
        <Button iconName="." onPress={() => handlePress('.')}/>
      </View>

      <View style={styles.column}>
        <View style={styles.opColum}>
          <Button iconName="Divide" onPress={() => handlePress('÷')}/>
          <Button iconName="X" onPress={() => handlePress('×')}/>
          <Button iconName="Minus" onPress={() => handlePress('−')}/>
          <Button iconName="Plus" onPress={() => handlePress('+')}/>
          <View style={styles.equalButton}>
            <Button iconName="Equals" onPress={() => handlePress('=')}/>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    // borderWidth: 1,
    width: '25%',
    height: '100%',
    alignItems: 'center'
  },
  opColum: {
    backgroundColor: '#F5F5F5',
    borderRadius: 18,
    width: '90%',
    height: '99%',
    alignItems: 'center'
  },
  equalButton: {
    flex: 1,
    borderRadius: 18,
    backgroundColor: '#EF7303',
  }
})