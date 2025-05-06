import { StyleSheet, Text, View } from "react-native";

type Props = {
  input: string;
  lastInput: string;
}

export function Display({input, lastInput}: Props) {

  return (
    <View style={styles.container}>
      <Text style={styles.lastExpText}>
        {lastInput}
      </Text>
      <Text style={styles.inputText}>
        {input}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    height: '50%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',

    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    marginBottom: 8,
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