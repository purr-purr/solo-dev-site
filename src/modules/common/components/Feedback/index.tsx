import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import cn from 'classnames';

import BlockTitle from '@modules/common/components/BlockTitle';
import FeedbackForm from '@modules/common/components/FeedbackForm';

import BLUE_BUILDING from '../../assets/Feedback/blue-building.png';
import YELLOW_BUILDING from '../../assets/Feedback/yellow-building.png';
import s from './Feedback.module.scss';

const Feedback: FC<{
	type: 'owner' | 'cooperation';
}> = ({ type = 'owner' }) => {
	const { t } = useTranslation('common');

	const info = {
		owner: {
			title: t('FEEDBACK.DO_YOU_OWN_REAL_ESTATE'),
			desc: t('FEEDBACK.COOPERATION_WITH_THE_AKULA'),
		},
		cooperation: {
			title: t('FEEDBACK.INTERESTED_IN_COOPERATION'),
			desc: t('FEEDBACK.TO_LEARN_MORE_DETAILS_ABOUT_OUR_SERVICES_DESC'),
		},
	};

	return (
		<section className={cn(s.container, 'nude-bg')}>
			<article className={cn(s.inner, type === 'owner' && s.reverse)}>
				<BlockTitle title={info[type].title} />
				<p>{info[type].desc}</p>
				<FeedbackForm />
			</article>

			<Image
				className={cn(s.poster, type === 'owner' && s.reverse)}
				src={type === 'cooperation' ? BLUE_BUILDING : YELLOW_BUILDING}
				alt={''}
			/>
		</section>
	);
};

export default Feedback;
