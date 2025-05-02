import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native"
import {
  Plus,
  Minus,
  X,
  Divide,
  Equals,
  Backspace,
  Percent
} from "phosphor-react-native"

type Props = TouchableOpacityProps & {
  iconName: string;
}

export function ButtonIcon({iconName, ...rest}:Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      {iconName === 'Plus' && <Plus size={32} weight="bold" />}
      {iconName === 'Minus' && <Minus size={32} weight="bold" />}
      {iconName === 'X' && <X size={32} weight="bold" />}
      {iconName === 'Divide' && <Divide size={32} weight="bold" />}
      {iconName === 'Equals' && <Equals size={32} weight="bold" />}
      {iconName === 'Backspace' && <Backspace size={32} weight="bold" color="#EF7303"/>}
      {iconName === 'Percent' && <Percent size={32} weight="bold" />}
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
  }
})