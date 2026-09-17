import PocketBase from 'pocketbase';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { email, password } = await request.json();

	if (!email || !password) {
		return json({ error: 'Email and password are required' }, { status: 400 });
	}

	try {
		const pb = new PocketBase('https://playgzero.pb.itcass.net');
		const authData = await pb.collection('admin_users').authWithPassword(email, password);

		const cookie = pb.authStore.exportToCookie({ path: '/' });

		return new Response(
			JSON.stringify({
				success: true,
				user: {
					id: authData.record.id,
					email: authData.record.email,
					name: authData.record.name || email
				}
			}),
			{
				status: 200,
				headers: {
					'Content-Type': 'application/json',
					'Set-Cookie': cookie
				}
			}
		);
	} catch (err) {
		console.error('Login error:', err);
		return json({ error: 'Invalid email or password' }, { status: 401 });
	}
};
