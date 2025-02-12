export const capitalizeCityName = (string: string) =>
	string
		.split(' ')
		.map((el) => {
			if (el.includes('-')) {
				const capEl = el
					.split('-')
					.map(
						(innerEl, index) =>
							`${innerEl[0].toUpperCase()}${innerEl.substring(1)}${
								index !== el.split('-').length - 1 ? '-' : ''
							}`
					)
					.join('');
				return capEl;
			}
			return `${el[0].toUpperCase()}${el.substring(1)}`;
		})
		.join(' ');
