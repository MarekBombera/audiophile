import { Formik } from 'formik';
import { Form } from './Form';

import { validationSchema } from './validationSchema';
import { initialValues } from './initialValues';

import { CheckoutFormStyled } from '../styles/components/CheckoutForm.styled';
import { stripePostRequest } from '../../utils/requests/stripePostRequest';
import { useSelector } from 'react-redux';

export const CheckoutForm = (): JSX.Element => {
	const {
		shoppingCart: { cart },
	} = useSelector((state: any) => state);

	const handleSubmit = () => {
		if (cart.length === 0) return;

		const stripeArr = [{ id: 0, quantity: 1 }];
		cart.forEach(({ id, quantity }: { id: number; quantity: number }) => {
			stripeArr.push({
				id: id,
				quantity: quantity,
			});
		});

		stripePostRequest(stripeArr);
	};

	return (
		<CheckoutFormStyled>
			<Formik
				initialValues={initialValues}
				onSubmit={() => handleSubmit()}
				validationSchema={validationSchema}
				component={Form}
			/>
		</CheckoutFormStyled>
	);
};
