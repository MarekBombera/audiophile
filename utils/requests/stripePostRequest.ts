export const stripePostRequest = (checkoutItems: {}[]): void => {
	fetch('/api/stripe', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			items: checkoutItems,
		}),
	})
		.then((res) => {
			if (res.ok) return res.json();
			return res.json().then((json) => Promise.reject(json));
		})
		.then(({ url }) => {
			window.location = url;
		})
		.catch((e) => {
			console.error(e.error);
		});
};
