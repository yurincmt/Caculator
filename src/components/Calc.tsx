import { StyleSheet, Text, View } from "react-native";

type Props = {
  currentValue: string;
}

export function Calc({currentValue}: Props) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 32, fontWeight: 'bold', color: '#1F1F1F'}}>
        {currentValue}
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