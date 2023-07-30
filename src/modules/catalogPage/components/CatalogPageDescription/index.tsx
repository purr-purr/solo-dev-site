import { FC } from 'react';

import { v4 as uniqueId } from 'uuid';

import s from './CatalogPageDescription.module.scss';

const CatalogPageDescription: FC<{
	description: string;
	services: string;
	infoList: { [key: string]: string }[];
}> = ({ description, infoList, services }) => {
	return (
		<article className={s.container}>
			<h4>Info</h4>
			<table className={s.table}>
				<tbody>
					{infoList.map((item) => (
						<tr key={uniqueId()}>
							<td>{item.title}</td>
							<td>{item.value}</td>
						</tr>
					))}
				</tbody>
			</table>

			<h4>Description</h4>
			<p>{description}</p>

			<h4>Services</h4>
			<p>{services}</p>
		</article>
	);
};

export default CatalogPageDescription;
