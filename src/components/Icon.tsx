import {
  Plus,
  Minus,
  X,
  Divide,
  Equals,
  Backspace,
  Percent
} from "phosphor-react-native"

type Props = {
  name: string;
}

export function Icon({name}: Props) {
  return (
    <>
      {name === 'Plus' && <Plus size={32} weight="bold" />}
      {name === 'Minus' && <Minus size={32} weight="bold" />}
      {name === 'X' && <X size={32} weight="bold" />}
      {name === 'Divide' && <Divide size={32} weight="bold" />}
      {name === 'Equals' && <Equals size={32} weight="bold" color="#FFFFFF"/>}
      {name === 'Backspace' && <Backspace size={32} weight="bold" color="#EF7303"/>}
      {name === 'Percent' && <Percent size={32} weight="bold" />}
    </>
  )
}