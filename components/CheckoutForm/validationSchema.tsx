import * as Yup from 'yup';

export const validationSchema = Yup.object({
	name: Yup.string().required('Required'),
	email: Yup.string().email('Email is invalid').required('Required'),
	phone: Yup.string().required('Required'),
	address: Yup.string().required('Required'),
	postal: Yup.string().required('Required'),
	city: Yup.string().required('Required'),
	country: Yup.string().required('Required'),
});
