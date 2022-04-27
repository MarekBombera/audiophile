import { Field, ErrorMessage, useFormikContext } from 'formik';
import { Error } from './Error';

type Props = {
	htmlFor: string;
	labelText: string;
};

export const FormField = ({ htmlFor, labelText }: Props): JSX.Element => {
	const { handleChange } = useFormikContext();
	return (
		<div className={`form-${htmlFor}`}>
			<label htmlFor={htmlFor}>{labelText}</label>
			<Field
				className={`form-${htmlFor}`}
				id={htmlFor}
				name={htmlFor}
				type="text"
				onChange={handleChange}
			/>
			<ErrorMessage
				name={htmlFor}
				component={() => <Error message="Required" />}
			/>
		</div>
	);
};
