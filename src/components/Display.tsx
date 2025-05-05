import { StyleSheet, Text, View } from "react-native";
import { HistoryCalc } from "./HistoryCalc";
import { useEffect, useState } from "react";

type Props = {
  input: string;
  lastInput: string;
}

export function Display({input, lastInput}: Props) {
  
  return (
    <View style={styles.container}>
      <HistoryCalc />
      <View style={styles.inputContainer}>
        <Text style={styles.lastExpText}>
          {lastInput}
        </Text>
        <Text style={styles.inputText}>
          {input} 
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    height: '50%',

    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    marginBottom: 8,
  },
  inputContainer: {
    // borderWidth: 1,
    height: '30%',

    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  lastExpText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#515151',
  },
  inputText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#1F1F1F',
  }
})