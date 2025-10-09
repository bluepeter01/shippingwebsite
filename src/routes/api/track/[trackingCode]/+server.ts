
import PocketBase from 'pocketbase';
import { error, json } from '@sveltejs/kit';

const pb = new PocketBase('http://127.0.0.1:8090'); // remove the trailing slash/underscore!

export const GET = async ({ params }) => {
  const { trackingCode } = params;

  if (!trackingCode) {
    throw error(400, 'Tracking code is required');
  }

  try {
    const shipment = await pb.collection('shipments').getFirstListItem(
      `tracking_number="${trackingCode}"`,
      { expand: 'history' }
    );

    if (!shipment) {
      throw error(404, 'Tracking code not found');
    }

    return json({
      tracking_number: shipment.tracking_number,
      status: shipment.status,
      current_location: shipment.current_location,
      estimated_delivery: shipment.estimated_delivery,
      history: shipment.history || []
    });
  } catch (err) {
    console.error(err);
    throw error(500, 'Failed to fetch tracking data');
  }
};