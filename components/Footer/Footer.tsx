import Image from 'next/image';
import Link from 'next/link';

import {
	FooterStyled,
	Logo,
	FooterNav,
	About,
	Copyright,
	Social,
	Hr,
} from '../styles/components/Footer.styled';

import logo from '../../public/assets/shared/desktop/logo.svg';
import facebook_img from '../../public/assets/shared/desktop/icon-facebook.svg';
import twitter_img from '../../public/assets/shared/desktop/icon-twitter.svg';
import instagram_img from '../../public/assets/shared/desktop/icon-instagram.svg';

export const Footer = (): JSX.Element => {
	return (
		<FooterStyled>
			<Hr />
			<Logo>
				<Link href="/" passHref>
					<Image src={logo} alt="logo" />
				</Link>
			</Logo>

			<FooterNav>
				<Link href="/">
					<a>home</a>
				</Link>
				<Link href="/headphones">
					<a>headphones</a>
				</Link>
				<Link href="/speakers">
					<a>speakers</a>
				</Link>
				<Link href="/earphones">
					<a>earphones</a>
				</Link>
			</FooterNav>
			<About>
				<p>
					Audiophile is an all in one stop to fulfill your audio needs. We're a
					small team of music lovers and sound specialists who are devoted to
					helping you get the most out of personal audio. Come and visit our
					demo facility - we’re open 7 days a week.
				</p>
			</About>
			<Copyright>
				<p>Copyright 2022. All Rights Reserved</p>
			</Copyright>
			<Social>
				<Image src={facebook_img} alt="Facebook" />
				<Image src={twitter_img} alt="Twitter" />
				<Image src={instagram_img} alt="Instagram" />
			</Social>
		</FooterStyled>
	);
};
