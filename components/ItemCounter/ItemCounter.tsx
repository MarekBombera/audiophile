import {
	ItemCounterStyled,
	CounterButton,
} from '../styles/components/ItemCounter.styled';

type Props = {
	quantityCounter: number;
	setQuantityCounter: Function;
};

export const ItemCounter = ({
	quantityCounter,
	setQuantityCounter,
}: Props): JSX.Element => {
	const addNumber = () => {
		setQuantityCounter(quantityCounter + 1);
	};

	const subtractNumber = (): void => {
		if (quantityCounter === 1) return;

		setQuantityCounter(quantityCounter - 1);
	};

	return (
		<ItemCounterStyled>
			<CounterButton onClick={subtractNumber}>-</CounterButton>
			<p>{quantityCounter}</p>
			<CounterButton onClick={addNumber}>+</CounterButton>
		</ItemCounterStyled>
	);
};
