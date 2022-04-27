const key = process.env.STRIPE;

const stripe = require('stripe')(key);

const connectStripe = async (req: any, res: any): Promise<void> => {
	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			mode: 'payment',
			line_items: req.body.items.map((item: any) => {
				const storeItem: any = storeItems.get(item.id);
				return {
					price_data: {
						currency: 'usd',
						product_data: {
							name: storeItem.name,
						},
						unit_amount: storeItem.priceInCents,
					},
					quantity: item.quantity,
				};
			}),
			success_url: process.env.STRIPE_SUCCESS,
			cancel_url: process.env.STRIPE_CANCEL,
		});
		res.json({ url: session.url });
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
};

const storeItems = new Map([
	[0, { priceInCents: 5000, name: 'Shipping' }],
	[1, { priceInCents: 299900, name: 'XX99 MARK II' }],
	[2, { priceInCents: 175000, name: 'XX99 MARK I' }],
	[3, { priceInCents: 89900, name: 'XX59' }],
	[4, { priceInCents: 450000, name: 'ZX9 SPEAKER' }],
	[5, { priceInCents: 350000, name: 'ZX7 SPEAKER' }],
	[6, { priceInCents: 59900, name: 'YX1' }],
]);

export default connectStripe;
