import { StyleSheet, Text, View } from "react-native";

type Props = {
  input: string;
}

export function Calc({input}: Props) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 32, fontWeight: 'bold', color: '#1F1F1F'}}>
        {input} 
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    alignItems:'flex-end',
    justifyContent: 'flex-end',


    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    paddingBottom: 10,
    marginBottom: 8,
  }
})