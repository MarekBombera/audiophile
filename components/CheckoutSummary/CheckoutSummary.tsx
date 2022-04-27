import { useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import { SummaryItem } from '../SummaryItem/SummaryItem';
import { useFormikContext } from 'formik';

import {
	CheckoutSummaryStyled,
	Head,
	PriceSummary,
	Field,
	GrandTotal,
} from '../styles/components/CheckoutSummary.styled';

type CartMap = {
	itemName: string;
	price: string;
	img: string;
	quantity: number;
};

export const CheckoutSummary = (): JSX.Element => {
	const {
		shoppingCart: { cart },
		totalPrice: { total },
	} = useSelector((state: any) => state);
	const { submitForm } = useFormikContext();

	const renderSummaryItems = cart.map((item: CartMap) => {
		const { itemName, price, img, quantity } = item;
		return (
			<SummaryItem
				key={price}
				itemName={itemName}
				price={+price}
				img={img}
				quantity={quantity}
			/>
		);
	});

	return (
		<>
			<CheckoutSummaryStyled>
				<Head>
					<h3>summary</h3>
				</Head>
				{renderSummaryItems}
				<PriceSummary>
					<Field>
						<p>total</p>
						<h3>{`$ ${total}`}</h3>
					</Field>
					<Field>
						<p>shipping</p>
						<h3>$ 50</h3>
					</Field>
					<Field>
						<p>vat (included)</p>
						<h3>{`$ ${Math.floor((total / 100) * 21)}`}</h3>
					</Field>
					<GrandTotal color={'var(--orange)'}>
						<p>grand total</p>
						<h3>{`$ ${total + 50}`}</h3>
					</GrandTotal>
					<Button text="continue & pay" onClick={submitForm} type="submit" />
				</PriceSummary>
			</CheckoutSummaryStyled>
		</>
	);
};
