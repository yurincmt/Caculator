import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Icon } from "./Icon";

export const accentColor = '#EF7303';

type Props = TouchableOpacityProps & {
  iconName: string;
  accent?: boolean;
}

export function Button({iconName, accent, ...rest}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      {'0123456789C'.includes(iconName) ? 
        <Text style={[styles.text, accent && {color: accentColor}]}>
          {iconName}
        </Text> :
        <Icon name={iconName}/>
      }
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