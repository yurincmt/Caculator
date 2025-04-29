import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export const orageColor = '#EF7303';

type Props = TouchableOpacityProps & {
  charText: string;
  color?: boolean;
}

export function Button({charText, color, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={[styles.text, color && {color: orageColor}]}>
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