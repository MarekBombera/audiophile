import { Field } from 'formik';
import { CheckoutSummary } from '../CheckoutSummary/CheckoutSummary';
import { FormField } from './FormComponents/FormField';

export const Form = (): JSX.Element => {
	return (
		<>
			<form>
				<h2>checkout</h2>
				<h4>billing details</h4>
				<FormField htmlFor="name" labelText="name" />
				<FormField htmlFor="email" labelText="email address" />
				<FormField htmlFor="phone" labelText="phone number" />
				<h4>shipping info</h4>
				<FormField htmlFor="address" labelText="your address" />
				<FormField htmlFor="postal" labelText="postal code" />
				<FormField htmlFor="city" labelText="city" />
				<FormField htmlFor="country" labelText="country" />
				<h4>payment details</h4>
				<div>
					<label htmlFor={'payment'}>{'payment method'}</label>
					<div className={'paymentField-wrapper'}>
						<Field
							className={`form-payment`}
							id={'payment'}
							name={'payment'}
							type="radio"
						/>
						<p>Stripe</p>
					</div>
				</div>
			</form>
			<CheckoutSummary />
		</>
	);
};
