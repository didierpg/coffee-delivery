import { Minus, Plus } from "phosphor-react";
import { StyledInputNumber } from "./styled";
import { ChangeEvent } from "react";

const MIN_AMOUNT = 1;
const MAX_AMOUNT = 99;

interface IInputNumber {
  value: number;
  setAmount: (value: number) => void;
}

export function InputNumber({ value, setAmount }: IInputNumber) {
  function handleClickMinusButton() {
    const decreasedAmount = Math.max(value - 1, MIN_AMOUNT);
    setAmount(decreasedAmount);
  }

  function handleClickPlusButton() {
    const increasedAmount = Math.min(value + 1, MAX_AMOUNT);
    setAmount(increasedAmount);
  }

  function handleOnChangeValue(event: ChangeEvent<HTMLInputElement>) {
    const changedAmount = event.target.valueAsNumber;
    if (changedAmount) {
      if (changedAmount >= MIN_AMOUNT && changedAmount <= MAX_AMOUNT) {
        setAmount(changedAmount);
      } else {
        setAmount(MAX_AMOUNT);
      }
    } else {
      setAmount(MIN_AMOUNT);
    }
  }

  return (
    <StyledInputNumber>
      <button onClick={handleClickMinusButton}>
        <Minus />
      </button>
      <input
        type="number"
        value={value}
        min={MIN_AMOUNT}
        max={MAX_AMOUNT}
        required
        onChange={handleOnChangeValue}
      />
      <button onClick={handleClickPlusButton}>
        <Plus />
      </button>
    </StyledInputNumber>
  );
}
