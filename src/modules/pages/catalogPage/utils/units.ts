export const UNITS = {
	en: {
		pieces: 'pcs',
		landPlot: 'acres',
		squareMeters: 'm²',
		month: 'month',
		currency: 'uah',
		priceFrom: 'from ',
		priceTo: 'to ',
		separator: ' or ',
	},
	ru: {
		pieces: 'шт.',
		landPlot: 'соток',
		squareMeters: 'м²',
		month: 'месяц',
		currency: 'грн',
		priceFrom: 'от ',
		priceTo: 'до ',
		separator: ' или ',
	},
	ua: {
		pieces: 'шт.',
		landPlot: 'соток',
		squareMeters: 'м²',
		month: 'місяць',
		currency: 'грн',
		priceFrom: 'від ',
		priceTo: 'до ',
		separator: ' або ',
	},
} as Record<string, { [key: string]: string }>;
