import { ErrorStyled_p } from '../../styles/components/Error.styled';

type Props = {
	message: string;
};

export const Error = ({ message }: Props): JSX.Element => {
	return <ErrorStyled_p className="input-error">{message}</ErrorStyled_p>;
};
