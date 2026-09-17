import PocketBase from 'pocketbase';
import { json, error } from '@sveltejs/kit';

const pb = new PocketBase('https://playgzero.pb.itcass.net');

export const PATCH = async ({ params, request }) => {
	const { trackingCode } = params;

	try {
		const shipment = await pb
			.collection('shipments')
			.getFirstListItem(`tracking_number="${trackingCode}"`);
		const body = await request.json();

		const updateData: Record<string, any> = {
			status: body.status ?? shipment.status,
			current_location: body.current_location ?? shipment.current_location,
			origin: body.origin ?? shipment.origin,
			destination: body.destination ?? shipment.destination,
			sender_name: body.sender_name ?? shipment.sender_name,
			receiver_name: body.receiver_name ?? shipment.receiver_name,
			receiver_email: body.receiver_email ?? shipment.receiver_email,
			receiver_phone: body.receiver_phone ?? shipment.receiver_phone,
			package_contents: body.package_contents ?? shipment.package_contents,
			weight: body.weight ?? shipment.weight,
			amount_due: body.amount_due ?? shipment.amount_due,
			payment_status: body.payment_status ?? shipment.payment_status,
			payment_reason: body.payment_reason ?? shipment.payment_reason
		};

		if (body.history !== undefined) {
			updateData.history = body.history;
		}

		const updated = await pb.collection('shipments').update(shipment.id, updateData);

		return json({ success: true, shipment: updated });
	} catch (err) {
		console.error(err);
		throw error(500, 'Failed to update shipment');
	}
};

export const DELETE = async ({ params }) => {
	const { trackingCode } = params;

	try {
		const shipment = await pb
			.collection('shipments')
			.getFirstListItem(`tracking_number="${trackingCode}"`);
		await pb.collection('shipments').delete(shipment.id);
		return json({ success: true });
	} catch (err) {
		console.error(err);
		throw error(500, 'Failed to delete shipment');
	}
};
