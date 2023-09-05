import { FC, memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

import FeedbackForm from '@modules/common/components/FeedbackForm';
import Loader from '@modules/common/components/Loader';
import Meta from '@modules/common/components/Meta';
import CatalogPageCarousel from '@modules/pages/catalogPage/components/CatalogPageCarousel';
import CatalogPageCrumbs from '@modules/pages/catalogPage/components/CatalogPageCrumbs';
import CatalogPageDescription from '@modules/pages/catalogPage/components/CatalogPageDescription';
import CatalogPageHeader from '@modules/pages/catalogPage/components/CatalogPageHeader';
import { formatMetaForCatalogPage } from '@modules/pages/catalogPage/utils/formatters';

import { useDataFetching, useFullAddress } from '@hooks/index';
import { formatCityTranslation, formatTranslation } from '@utils/formatters';

import type { ICatalogData } from '@global-types/index';

import s from './CatalogPage.module.scss';

const CatalogPage: FC = memo(() => {
	const { i18n } = useTranslation();
	const { data, loading, initialData } = useDataFetching();
	const router = useRouter();
	const { catalog } = router.query;
	const { t: tCommon } = useTranslation('common');
	const { t: tCatalog } = useTranslation('catalog');
	const [pageData, setPageData] = useState<ICatalogData>(initialData);
	const {
		address,
		city,
		description,
		id,
		price,
		property_type,
		real_estate_type,
		station,
		table,
		location,
		contract_type,
	} = pageData;

	useEffect(() => {
		if (!router.isReady) return;

		data.map((value: ICatalogData) => {
			value.id === Number(catalog) && setPageData(value);
		});
		// eslint-disable-next-line
	}, [data, router.query.catalog, router.isReady]);

	const itemAddress = formatTranslation(i18n.language, address);
	const itemStation = formatTranslation(i18n.language, station);
	const itemLocation = formatTranslation(i18n.language, location);
	const itemDescription = formatTranslation(i18n.language, description);
	const itemLocationAndAddress = useFullAddress(
		real_estate_type,
		location,
		address,
	);
	const itemCity = tCommon(formatCityTranslation(city));
	const itemOriginalFullAddress = `${city}, ${location.ua}, ${address.ua}`;
	const itemCityWithLocationAndAddress = `${itemCity}, ${itemLocation}, ${itemAddress}`;

	const tags = [property_type, real_estate_type];

	const pageMetaDesc = formatMetaForCatalogPage(
		city,
		address.ua as keyof typeof address,
		real_estate_type,
	);

	if (loading) {
		return <Loader />;
	}

	return (
		<>
			<Meta title={itemLocationAndAddress} desc={pageMetaDesc} />

			<CatalogPageCrumbs address={itemAddress} />
			<CatalogPageHeader
				city={itemCity}
				address={itemLocationAndAddress}
				price={price}
				tags={tags}
			/>
			<section className={s.container}>
				<div>
					<CatalogPageCarousel id={id} />
					<CatalogPageDescription
						contractType={contract_type}
						realEstateType={real_estate_type}
						id={id}
						description={itemDescription}
						tableInfo={table || {}}
						address={itemCityWithLocationAndAddress}
						originalAddress={itemOriginalFullAddress}
						station={itemStation}
						price={price}
					/>
				</div>
				<aside>
					<div className={s.feedback}>
						<h5>{tCatalog('FEEDBACK.DO_YOU_LIKE_THIS_PROPERTY')}</h5>
						<p>{tCatalog('FEEDBACK.IF_YOU_LIKE_THIS_PROPERTY')}</p>
						<FeedbackForm isColumnType message={itemLocationAndAddress} />
					</div>
				</aside>
			</section>
		</>
	);
});
CatalogPage.displayName = 'catalog';
export default CatalogPage;
