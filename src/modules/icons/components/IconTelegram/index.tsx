import { FC } from 'react';
import cn from 'classnames';

import { IIconsProps } from '@modules/icons/types';

const IconTelegram: FC<IIconsProps> = ({
	color = '#fff',
	width = 24,
	height = 24,
	className,
}) => {
	return (
		<svg
			className={cn(className, 'svg-icon')}
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.78754 14.0196C5.83131 14.0344 5.87549 14.0448 5.91963 14.0512C5.96777 14.1644 6.02996 14.3107 6.10252 14.4818C6.27959 14.8994 6.51818 15.4643 6.76446 16.0535C7.2667 17.2552 7.77332 18.4939 7.88521 18.8485C8.02372 19.2868 8.17013 19.5848 8.32996 19.7883C8.4126 19.8935 8.50819 19.9853 8.62003 20.0549C8.67633 20.0899 8.7358 20.1186 8.79788 20.14C8.80062 20.141 8.80335 20.1419 8.80608 20.1428C9.1261 20.2636 9.41786 20.2133 9.60053 20.1518C9.69827 20.1188 9.77735 20.0791 9.8334 20.0469C9.86198 20.0304 9.88612 20.0151 9.90538 20.0021L9.90992 19.9991L12.7361 18.2366L16.0007 20.7394C16.0488 20.7763 16.1014 20.8073 16.157 20.8316C16.5492 21.0027 16.929 21.0624 17.2862 21.0136C17.6429 20.9649 17.926 20.8151 18.1368 20.6464C18.3432 20.4813 18.4832 20.2963 18.5703 20.1589C18.6148 20.0887 18.6482 20.0266 18.6718 19.9791C18.6836 19.9552 18.6931 19.9346 18.7005 19.9181L18.7099 19.8963L18.7135 19.8877L18.715 19.8841L18.7156 19.8824L18.7163 19.8808C18.7334 19.8379 18.7466 19.7935 18.7556 19.7482L21.7358 4.72274C21.7453 4.67469 21.7501 4.62581 21.7501 4.57682C21.7501 4.13681 21.5843 3.71841 21.1945 3.46452C20.8613 3.24752 20.4901 3.23818 20.2556 3.25598C20.0025 3.27519 19.7688 3.33766 19.612 3.38757C19.5304 3.41355 19.4619 3.43861 19.4126 3.45773C19.3878 3.46734 19.3675 3.47559 19.3523 3.48188L19.341 3.48666L2.62725 10.0432L2.62509 10.044C2.61444 10.0479 2.60076 10.053 2.58451 10.0593C2.55215 10.0719 2.50878 10.0896 2.45813 10.1126C2.35935 10.1574 2.22077 10.2273 2.07856 10.3247C1.85137 10.4803 1.32888 10.9064 1.41686 11.6097C1.48705 12.1708 1.87143 12.5154 2.10562 12.6811C2.23421 12.7721 2.35638 12.8371 2.44535 12.8795C2.48662 12.8991 2.57232 12.9339 2.6095 12.9491L2.61889 12.9529L5.78754 14.0196ZM19.9259 4.86786L19.9236 4.86888C19.9152 4.8725 19.9069 4.87596 19.8984 4.87928L3.1644 11.4438C3.15566 11.4472 3.14686 11.4505 3.138 11.4536L3.12869 11.4571C3.11798 11.4613 3.09996 11.4686 3.07734 11.4788C3.06451 11.4846 3.05112 11.491 3.03747 11.4978C3.05622 11.5084 3.07417 11.5175 3.09012 11.5251C3.10543 11.5324 3.11711 11.5374 3.1235 11.54L6.26613 12.598C6.32365 12.6174 6.37727 12.643 6.42649 12.674L16.8033 6.59948L16.813 6.59374C16.8205 6.58927 16.8305 6.58353 16.8424 6.5768C16.866 6.56345 16.8984 6.54568 16.937 6.52603C17.009 6.48938 17.1243 6.43497 17.2541 6.39485C17.3444 6.36692 17.6109 6.28823 17.899 6.38064C18.0768 6.43767 18.2609 6.56028 18.3807 6.76798C18.4401 6.87117 18.4718 6.97483 18.4872 7.06972C18.528 7.2192 18.5215 7.36681 18.4896 7.49424C18.4208 7.76875 18.228 7.98287 18.0525 8.14665C17.9021 8.28706 15.9567 10.1629 14.0376 12.0147C13.0805 12.9381 12.1333 13.8525 11.4252 14.5359L10.9602 14.9849L16.8321 19.4867C16.9668 19.5349 17.0464 19.5325 17.0832 19.5274C17.1271 19.5214 17.163 19.5045 17.1997 19.4752C17.2407 19.4424 17.2766 19.398 17.3034 19.3557L17.3045 19.354L20.195 4.78102C20.1521 4.79133 20.1087 4.80361 20.0669 4.81691C20.0196 4.83198 19.9805 4.84634 19.9547 4.85637C19.9418 4.86134 19.9326 4.86511 19.9276 4.86719L19.9259 4.86786ZM11.4646 17.2618L10.2931 16.3636L10.0093 18.1693L11.4646 17.2618ZM9.21846 14.5814L10.3834 13.4567C11.0915 12.7732 12.0389 11.8588 12.9961 10.9352L13.9686 9.997L7.44853 13.8138L7.48351 13.8963C7.66121 14.3154 7.90087 14.8827 8.14845 15.4751C8.33358 15.918 8.52717 16.3844 8.70349 16.8162L8.98653 15.0158C9.01381 14.8422 9.09861 14.692 9.21846 14.5814Z"
				fill={color}
			/>
		</svg>
	);
};

export default IconTelegram;
