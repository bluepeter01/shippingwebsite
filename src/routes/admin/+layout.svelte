<script>
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	let { children } = $props();
	let sidebarOpen = $state(false);
	let currentPath = $derived($page.url.pathname);

	const mainLinks = [
		{ label: 'Dashboard', href: '/admin', icon: 'grid' },
		{ label: 'Shipments', href: '/admin/shipments', icon: 'package' },
	];

	const toolsLinks = [
		{ label: 'Track Shipment', href: '/track', icon: 'search' },
		{ label: 'Back to Site', href: '/', icon: 'arrow-left' },
	];

	let isLoginPage = $derived(currentPath === '/admin/login');

	function close() { sidebarOpen = false; }
</script>

{#if isLoginPage}
	{@render children()}
{:else}
<div class="flex h-screen overflow-hidden bg-[#F8FAFC]" style="font-family: var(--font-admin);">

	{#if sidebarOpen}
		<button class="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden" onclick={close} aria-label="Close sidebar"></button>
	{/if}

	<aside
		class="flex flex-col w-[260px] shrink-0 border-r border-slate-200/80 bg-white
			transition-all duration-300 ease-in-out
			fixed top-0 left-0 h-screen z-50
			lg:relative lg:z-auto lg:h-screen
			{sidebarOpen ? 'translate-x-0 shadow-2xl lg:shadow-none' : '-translate-x-full lg:translate-x-0'}"
	>

		<div class="flex h-[68px] shrink-0 items-center gap-3 border-b border-slate-200/80 px-5">
			<img src="/Gemini_Generated_Image_l3496wl3496wl349.png" alt="SwiftPort" class="h-10 w-10 shrink-0 rounded-xl object-cover" />
			<div class="min-w-0">
				<p class="truncate text-[15px] font-bold text-navy leading-tight">SwiftPort</p>
				<p class="truncate text-[11px] font-semibold uppercase tracking-widest text-muted/50">Admin Panel</p>
			</div>
			<button onclick={close} class="ml-auto flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-navy lg:hidden" aria-label="Close sidebar">
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
			</button>
		</div>

		<nav class="flex-1 overflow-y-auto py-4 px-3">
			<p class="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-muted/40">Main</p>
			<ul class="space-y-0.5 mb-6">
				{#each mainLinks as link}
					{@const active = currentPath === link.href || (link.href !== '/admin' && currentPath.startsWith(link.href))}
					<li>
						<a
							href={link.href}
							onclick={close}
							class="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-all duration-150 {active ? 'bg-navy text-white shadow-md shadow-navy/20' : 'text-slate-500 hover:bg-slate-50 hover:text-navy'}"
						>
							<div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg {active ? 'bg-white/15' : 'bg-slate-100 group-hover:bg-white'}">
								{#if link.icon === 'grid'}
									<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
								{:else}
									<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
								{/if}
							</div>
							<span>{link.label}</span>
						</a>
					</li>
				{/each}
			</ul>

			<p class="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-muted/40">Tools</p>
			<ul class="space-y-0.5">
				{#each toolsLinks as link}
					{@const active = currentPath === link.href}
					<li>
						<a
							href={link.href}
							onclick={close}
							class="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-all duration-150 {active ? 'bg-navy text-white shadow-md shadow-navy/20' : 'text-slate-500 hover:bg-slate-50 hover:text-navy'}"
						>
							<div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg {active ? 'bg-white/15' : 'bg-slate-100 group-hover:bg-white'}">
								{#if link.icon === 'search'}
									<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
								{:else}
									<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
								{/if}
							</div>
							<span>{link.label}</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="shrink-0 border-t border-slate-200/80 px-5 py-4 mt-auto">
			<div class="flex items-center gap-3 mb-3">
				<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">A</div>
				<div class="min-w-0">
					<p class="truncate text-sm font-semibold text-navy">Admin</p>
					<p class="truncate text-[11px] text-muted/50">swiftportlogistics.online</p>
				</div>
			</div>
			<a href="/api/auth/logout" class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-semibold text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600">
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
				Sign Out
			</a>
		</div>
	</aside>

	<div class="flex flex-1 flex-col min-w-0">

		<header class="flex h-[68px] shrink-0 items-center gap-4 border-b border-border bg-white px-5 sm:px-8">
			<button onclick={() => sidebarOpen = true} class="flex h-9 w-9 items-center justify-center rounded-lg text-navy transition-colors hover:bg-surface lg:hidden" aria-label="Open menu">
				<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
			</button>
			<h1 class="text-lg font-bold text-navy" style="font-family: var(--font-display);">
				{#if currentPath === '/admin'}Dashboard{:else if currentPath.includes('/shipments')}Shipments{:else}Admin{/if}
			</h1>
			<div class="ml-auto flex items-center gap-3">
				<div class="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">A</div>
			</div>
		</header>

		<main class="flex-1 overflow-x-hidden overflow-y-auto">
			<div class="mx-auto max-w-6xl px-6 pt-10 pb-12 sm:pt-12 lg:px-10 lg:pt-14 lg:pb-16">
				{@render children()}
			</div>
		</main>

	</div>
</div>
{/if}
