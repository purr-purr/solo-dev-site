import { useContext } from 'react';
import { HeaderContext } from '@context/HeaderContext';

import IconCross from '@modules/icons/components/IconCross';
import IconMobileNav from '@modules/icons/components/IconMobileNav';

import s from './NavigationBurgerButton.module.scss';

const NavigationBurgerButton = () => {
	const { handleMobileNavMode, isMobileNavMode } = useContext(HeaderContext);

	return (
		<button
			onClick={() => handleMobileNavMode(!isMobileNavMode)}
			className={s.container}
		>
			{isMobileNavMode ? <IconCross /> : <IconMobileNav />}
		</button>
	);
};

export default NavigationBurgerButton;
