import { StyleSheet, Text, View } from "react-native";
import { Button } from "./Button";
import { ButtonIcon } from "./ButtonIcon";

export function Keyboard() {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Button charText="C"/>
        <Button charText="7"/>
        <Button charText="4"/>
        <Button charText="1"/>
      </View>

      <View style={styles.column}>
        <ButtonIcon iconName="Backspace"/>
        <Button charText="8"/>
        <Button charText="5"/>
        <Button charText="2"/>
        <Button charText="0"/>
      </View>

      <View style={styles.column}>
        <ButtonIcon iconName="Percent"/>
        <Button charText="9"/>
        <Button charText="6"/>
        <Button charText="3"/>
        <Button charText="."/>
      </View>

      <View style={styles.column}>
        <View style={styles.opColum}>
          <ButtonIcon iconName="Divide"/>
          <ButtonIcon iconName="X"/>
          <ButtonIcon iconName="Minus"/>
          <ButtonIcon iconName="Plus"/>
        <ButtonIcon iconName="Equals"/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
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
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 18,
    width: '90%',
    height: '100%',
  }
})