import { FC } from 'react';
import cn from 'classnames';

import { IIconsProps } from '@modules/icons/types';

const IconEmail: FC<IIconsProps> = ({
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
				d="M2.80372 8.3533C2.52358 10.9562 2.53607 13.9582 2.92589 16.5505C3.14159 17.9849 4.31226 19.0845 5.75733 19.2102L7.26756 19.3414C10.4166 19.6152 13.5835 19.6152 16.7325 19.3414L18.2427 19.2102C19.6878 19.0845 20.8585 17.9849 21.0742 16.5505C21.464 13.9582 21.4765 10.9564 21.1964 8.35345C21.1602 8.05169 21.1194 7.75034 21.0742 7.44949C20.8585 6.0151 19.6878 4.91545 18.2427 4.78983L16.7325 4.65855C13.5835 4.38481 10.4166 4.38481 7.26756 4.65855L5.75733 4.78983C4.31226 4.91545 3.14159 6.0151 2.92589 7.44949C2.88066 7.75028 2.83994 8.05159 2.80372 8.3533ZM7.39746 6.15292C10.4601 5.88669 13.54 5.88669 16.6026 6.15292L18.1128 6.2842C18.8672 6.34977 19.4783 6.92379 19.5909 7.67254C19.6026 7.7503 19.6139 7.82809 19.625 7.90592L14.064 10.9954C12.7804 11.7085 11.2196 11.7085 9.93602 10.9954L4.37508 7.90596C4.38614 7.82812 4.39752 7.75031 4.40921 7.67254C4.52181 6.92379 5.1329 6.34977 5.88723 6.2842L7.39746 6.15292ZM19.8085 9.51989C20.0025 11.7876 19.93 14.0725 19.5909 16.3274C19.4783 17.0762 18.8672 17.6502 18.1128 17.7158L16.6026 17.8471C13.54 18.1133 10.4601 18.1133 7.39746 17.8471L5.88723 17.7158C5.1329 17.6502 4.52181 17.0762 4.40921 16.3274C4.07013 14.0725 3.99756 11.7877 4.19153 9.51992L9.20755 12.3066C10.9442 13.2714 13.0558 13.2714 14.7925 12.3066L19.8085 9.51989Z"
				fill={color}
			/>
		</svg>
	);
};

export default IconEmail;
