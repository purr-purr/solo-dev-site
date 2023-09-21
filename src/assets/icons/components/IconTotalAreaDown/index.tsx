import { FC } from 'react';

import type { IIconsProps } from '../../types';

import s from './IconTotalAreaDown.module.scss';

const IconTotalAreaDown: FC<IIconsProps> = ({
	color = '#575757',
	width = 24,
	height = 24,
}) => {
	return (
		<svg
			className={s.container}
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M19.7235 1.68186C19.7235 1.50102 19.6491 1.32758 19.5167 1.19971C19.3844 1.07184 19.2048 1 19.0176 1C18.8304 1 18.6509 1.07184 18.5185 1.19971C18.3861 1.32758 18.3117 1.50102 18.3117 1.68186V8.67319L16.2223 6.65488C16.1577 6.58789 16.0798 6.53416 15.9932 6.49689C15.9066 6.45962 15.8131 6.43959 15.7183 6.43797C15.6236 6.43635 15.5294 6.4532 15.4415 6.48749C15.3536 6.52178 15.2738 6.57283 15.2067 6.63758C15.1397 6.70232 15.0869 6.77945 15.0514 6.86435C15.0159 6.94926 14.9984 7.0402 15.0001 7.13175C15.0018 7.2233 15.0225 7.3136 15.0611 7.39724C15.0997 7.48088 15.1553 7.55615 15.2247 7.61858L18.5188 10.8006C18.6511 10.9283 18.8305 11 19.0176 11C19.2047 11 19.3841 10.9283 19.5164 10.8006L22.8105 7.61858C22.9352 7.48932 23.0031 7.31836 22.9999 7.14171C22.9967 6.96506 22.9226 6.79652 22.7933 6.67159C22.6639 6.54666 22.4894 6.4751 22.3066 6.47199C22.1237 6.46887 21.9467 6.53444 21.8129 6.65488L19.7235 8.67319V1.68186Z"
				fill={color}
			/>
			<g clipPath="url(#clip0_438_2539)">
				<path
					d="M14.6666 15.0832V17.4582M9.91658 17.4582V15.0832H7.54159M9.91658 10.3332H7.54159M3.58325 6.05817V20.9415C3.58325 21.0675 3.6333 21.1883 3.72238 21.2774C3.81146 21.3665 3.93227 21.4165 4.05825 21.4165H18.9416C19.0676 21.4165 19.1884 21.3665 19.2775 21.2774C19.3665 21.1883 19.4166 21.0675 19.4166 20.9415V15.5582C19.4166 15.4322 19.3665 15.3114 19.2775 15.2223C19.1884 15.1332 19.0676 15.0832 18.9416 15.0832H10.3916C10.2656 15.0832 10.1448 15.0331 10.0557 14.944C9.96663 14.855 9.91658 14.7341 9.91658 14.6082V6.05817C9.91658 5.99579 9.9043 5.93403 9.88043 5.8764C9.85656 5.81877 9.82157 5.7664 9.77746 5.7223C9.73335 5.67819 9.68099 5.6432 9.62336 5.61933C9.56573 5.59546 9.50396 5.58317 9.44158 5.58317H4.05825C3.99587 5.58317 3.93411 5.59546 3.87648 5.61933C3.81885 5.6432 3.76648 5.67819 3.72238 5.7223C3.67827 5.7664 3.64328 5.81877 3.61941 5.8764C3.59554 5.93403 3.58325 5.99579 3.58325 6.05817Z"
					stroke={color}
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_438_2539">
					<rect
						width="19"
						height="19"
						fill="white"
						transform="matrix(1 0 0 -1 2 23)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default IconTotalAreaDown;
