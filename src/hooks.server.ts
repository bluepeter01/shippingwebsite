import PocketBase from 'pocketbase';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	event.locals.pb = new PocketBase('https://playgzero.pb.itcass.net');
	event.locals.user = null;

	const cookie = event.request.headers.get('cookie') || '';
	event.locals.pb.authStore.loadFromCookie(cookie);

	if (event.locals.pb.authStore.isValid) {
		try {
			const authData = await event.locals.pb.collection('admin_users').authRefresh();
			event.locals.user = authData.record;
		} catch {
			event.locals.pb.authStore.clear();
		}
	}

	const response = await resolve(event);

	if (event.url.pathname === '/api/auth/logout') {
		event.locals.pb.authStore.clear();
	}

	response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie({ path: '/' }));

	return response;
}
