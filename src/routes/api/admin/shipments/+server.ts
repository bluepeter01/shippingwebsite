import PocketBase from 'pocketbase';
import { json } from '@sveltejs/kit';

const pb = new PocketBase('https://playgzero.pb.itcass.net');

export const GET = async () => {
	try {
		const shipments = await pb.collection('shipments').getFullList({
			sort: '-created'
		});

		const total = shipments.length;
		const pending = shipments.filter((s) => s.status === 'Pending').length;
		const inTransit = shipments.filter((s) => s.status === 'In Transit').length;
		const delivered = shipments.filter((s) => s.status === 'Delivered').length;
		const unpaid = shipments.filter((s) => s.payment_status === 'Unpaid').length;

		return json({
			shipments,
			stats: { total, pending, inTransit, delivered, unpaid }
		});
	} catch (err) {
		console.error(err);
		return json({
			shipments: [],
			stats: { total: 0, pending: 0, inTransit: 0, delivered: 0, unpaid: 0 }
		});
	}
};
