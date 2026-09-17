import { redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import type { Actions } from './$types';

export const actions: Actions = {
	logout: async ({ cookies }) => {
		cookies.delete('pb_auth', { path: '/' });
		throw redirect(302, '/admin/login');
	}
};
