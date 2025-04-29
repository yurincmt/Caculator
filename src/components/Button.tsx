import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  charText: string;
}

export function Button({charText, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>
        {charText}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2
  },
  text: {
    fontSize: 38,
  }
})