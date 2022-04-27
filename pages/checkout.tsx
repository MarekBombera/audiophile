import type { NextPage } from 'next';
import { CheckoutForm } from '../components/CheckoutForm/CheckoutForm';
import { CheckoutStyled } from '../components/styles/pages/Checkout.styled';

const Checkout: NextPage = (): JSX.Element => {
	return (
		<CheckoutStyled>
			<CheckoutForm />
		</CheckoutStyled>
	);
};

export default Checkout;
