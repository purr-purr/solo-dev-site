import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import cn from 'classnames';
import { v4 as uniqueId } from 'uuid';

import BlockTitle from '@modules/common/components/BlockTitle';
import CardSlider from '@modules/common/components/CardSlider';
import STAR_ICON from '@modules/pages/home/assets/HomeReviews/star_icon.svg';

import s from './HomeReviews.module.scss';

const HomeReviews = () => {
	const { t } = useTranslation('home');

	const CASES = [
		{
			text: 'BAT_UKRAINE_TEXT',
			signature: 'BAT_UKRAINE_TITLE',
			color: 'gray',
		},
		{
			text: 'EKOL_LOGISTICS_TEXT',
			signature: 'EKOL_LOGISTICS_TITLE',
			color: 'blue',
		},
		{
			text: 'ENERGY_SOLUTIONS_TEXT',
			signature: 'ENERGY_SOLUTIONS_TITLE',
			color: 'darkBlue',
		},
		{
			text: 'ANIMATION_STUDIO_95_TEXT',
			signature: 'ANIMATION_STUDIO_95_TITLE',
			color: 'blue',
		},
	];
	return (
		<section className={s.container}>
			<BlockTitle title={t('REVIEWS.FEEDBACK_ABOUT_COOPERATION')} />

			<CardSlider childrenClassName={s.card} slidesToShow={3}>
				{CASES.map((item) => {
					return (
						<Fragment key={uniqueId()}>
							<p className={cn(s.text, s[item.color])}>{t(`REVIEWS.${item.text}`)}</p>
							<p className={s.signature}>{t(`REVIEWS.${item.signature}`)}</p>
							<ul className={s.rating}>
								{[...Array(5)].map((_) => (
									<li key={uniqueId()}>
										<Image src={STAR_ICON} alt="Rating Star" />
									</li>
								))}
							</ul>
						</Fragment>
					);
				})}
			</CardSlider>
		</section>
	);
};

export default HomeReviews;
