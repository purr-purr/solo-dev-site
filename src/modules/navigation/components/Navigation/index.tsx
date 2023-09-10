import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HeaderContext } from '@context/HeaderContext';
import cn from 'classnames';

import NavigationBurgerButton from '@modules/navigation/components/NavigationBurgerButton';
import NavigationContacts from '@modules/navigation/components/NavigationContacts';

import { useMediaQuery } from '@hooks/index';
import {
	CATALOG_NAME,
	MOBILE_BREAKPOINT,
	TABLET_BREAKPOINT,
} from '@utils/const';

import s from './Navigation.module.scss';

interface INavigation {
	title: string;
	path: string;
}

const Navigation = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const { isMobileNavMode, handleMobileNavMode } = useContext(HeaderContext);
	const { t } = useTranslation('common');
	const { pathname } = useRouter();

	const NAVIGATION: INavigation[] = [
		{ title: 'MAIN', path: `/` },
		{ title: 'SERVICES', path: `/services` },
		{ title: 'ALL_REAL_ESTATE', path: `/${CATALOG_NAME}` },
	];

	useEffect(() => {
		const element = document.querySelector('html');
		if (!isMobile) {
			handleMobileNavMode(false);
		}
		if (element) {
			element.setAttribute(
				'style',
				`${isMobileNavMode ? `overflow:hidden;` : ``}`,
			);
		}
		// eslint-disable-next-line
	}, [isMobileNavMode, isMobile]);

	return (
		<>
			<nav className={cn(s.container, isMobileNavMode && s.active)}>
				{NAVIGATION.map((item: INavigation) => (
					<Link
						key={item.path}
						className={cn(s.item, item.path === pathname && s.current)}
						onClick={() => handleMobileNavMode(false)}
						href={item.path}
					>
						{t(`NAVIGATION.${item.title}`)}
					</Link>
				))}
			</nav>

			<NavigationContacts />
			{isMobile && <NavigationBurgerButton />}
		</>
	);
};

export default Navigation;
