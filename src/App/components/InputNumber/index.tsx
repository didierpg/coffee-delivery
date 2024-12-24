import { Minus, Plus } from "phosphor-react";
import { ChangeEvent, forwardRef } from "react";
import { StyledInputNumber } from "./styled";

interface IInputNumber extends React.InputHTMLAttributes<HTMLInputElement> {
  setAmount: (value: number) => void;
}

export const InputNumber = forwardRef<HTMLInputElement, IInputNumber>(
  ({ value, setAmount, onChange, ...props }, ref) => {
    const MIN_AMOUNT = 1;
    const MAX_AMOUNT = 99;
    const valueAsNumber = Number(value) || MIN_AMOUNT;

    function handleClickMinusButton() {
      const decreasedAmount = Math.max(valueAsNumber - 1, MIN_AMOUNT);
      setAmount(decreasedAmount);
    }

    function handleClickPlusButton() {
      const increasedAmount = Math.min(valueAsNumber + 1, MAX_AMOUNT);
      setAmount(increasedAmount);
    }

    function handleOnChangeValue(event: ChangeEvent<HTMLInputElement>) {
      const inputValue = Number(event.target.value) || MIN_AMOUNT;
      const clampedAmount = Math.min(
        Math.max(inputValue, MIN_AMOUNT),
        MAX_AMOUNT
      );

      setAmount(clampedAmount);
      onChange?.(event);
    }

    return (
      <StyledInputNumber>
        <button type="button" onClick={handleClickMinusButton}>
          <Minus />
        </button>
        <input
          ref={ref}
          type="number"
          value={value}
          min={MIN_AMOUNT}
          max={MAX_AMOUNT}
          onChange={handleOnChangeValue}
          {...props}
        />
        <button type="button" onClick={handleClickPlusButton}>
          <Plus />
        </button>
      </StyledInputNumber>
    );
  }
);
