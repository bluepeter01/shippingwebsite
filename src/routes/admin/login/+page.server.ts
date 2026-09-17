import { redirect, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/admin');
	}
	return {};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const email = formData.get('email')?.toString() || '';
		const password = formData.get('password')?.toString() || '';

		if (!email || !password) {
			return fail(400, { email, error: 'Email and password are required' });
		}

		try {
			await locals.pb.collection('admin_users').authWithPassword(email, password);
			locals.user = locals.pb.authStore.record;
		} catch (err) {
			console.error('Login error:', err);
			return fail(401, { email, error: 'Invalid email or password' });
		}

		throw redirect(302, '/admin');
	}
};
