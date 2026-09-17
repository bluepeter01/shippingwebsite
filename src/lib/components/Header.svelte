<script>
	import { page } from '$app/stores';
	import { siteData } from '$lib/data/site.js';
	import { openShipModal } from '$lib/shipModal.svelte.js';
	import ShipError from '$lib/components/ShipError.svelte';

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	$effect(() => {
		function handleScroll() {
			scrolled = window.scrollY > 20;
		}
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function closeMobile() {
		mobileOpen = false;
	}

	let currentPath = $derived($page.url.pathname);
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'bg-navy-dark shadow-lg' : 'bg-navy'}"
>
	<div class="container-wide">
		<nav class="flex h-16 items-center justify-between lg:h-20">
			<a href="/" class="flex items-center gap-3" onclick={closeMobile}>
				<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-amber lg:h-10 lg:w-10">
					<svg class="h-5 w-5 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M12 2L2 7l10 5 10-5-10-5z"/>
						<path d="M2 17l10 5 10-5"/>
						<path d="M2 12l10 5 10-5"/>
					</svg>
				</div>
				<div class="hidden sm:block">
					<span class="text-lg font-bold text-white">SwiftPort</span>
					<span class="text-lg font-light text-white/70"> Logistics</span>
				</div>
			</a>

			<ul class="hidden items-center gap-1 lg:flex">
				{#each siteData.nav as item}
					{@const isActive = currentPath === item.href}
					<li>
						{#if item.label === 'Ship'}
							<button
								class="rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
								onclick={openShipModal}
							>
								{item.label}
							</button>
						{:else}
							<a
								href={item.href}
								class="rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 {isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}"
							>
								{item.label}
							</a>
						{/if}
					</li>
				{/each}
			</ul>

			<div class="hidden items-center gap-3 lg:flex">
				<a href="/track" class="text-sm font-medium text-white/80 transition-colors hover:text-white">
					Track Shipment
				</a>
				<button class="btn-primary text-sm" onclick={openShipModal}>
					Get a Quote
				</button>
			</div>

			<button
				class="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label="Toggle navigation"
				aria-expanded={mobileOpen}
			>
				{#if mobileOpen}
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
						<path d="M18 6L6 18"/>
						<path d="M6 6l12 12"/>
					</svg>
				{:else}
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
						<path d="M4 6h16"/>
						<path d="M4 12h16"/>
						<path d="M4 18h16"/>
					</svg>
				{/if}
			</button>
		</nav>
	</div>

	{#if mobileOpen}
		<div class="lg:hidden">
			<button class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onclick={closeMobile} aria-label="Close menu"></button>
			<div class="fixed top-16 left-0 right-0 z-50 border-t border-white/10 bg-navy-dark shadow-2xl">
				<div class="container-wide py-6">
					<div class="mb-4 flex items-center justify-between">
						<span class="text-sm font-semibold uppercase tracking-wider text-white/50">Menu</span>
						<button
							class="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
							onclick={closeMobile}
							aria-label="Close menu"
						>
							<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
								<path d="M18 6L6 18"/>
								<path d="M6 6l12 12"/>
							</svg>
						</button>
					</div>
					<ul class="space-y-1">
						{#each siteData.nav as item}
							{@const isActive = currentPath === item.href}
							<li>
								{#if item.label === 'Ship'}
									<button
										class="block w-full rounded-lg px-4 py-3 text-left text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
										onclick={() => { closeMobile(); openShipModal(); }}
									>
										{item.label}
									</button>
								{:else}
									<a
										href={item.href}
										class="block rounded-lg px-4 py-3 text-base font-medium transition-colors {isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}"
										onclick={closeMobile}
									>
										{item.label}
									</a>
								{/if}
							</li>
						{/each}
					</ul>
					<div class="mt-6 space-y-3 border-t border-white/10 pt-6">
						<a href="/track" class="block text-center text-sm font-medium text-white/80 transition-colors hover:text-white" onclick={closeMobile}>
							Track Shipment
						</a>
						<button class="btn-primary block w-full text-center" onclick={() => { closeMobile(); openShipModal(); }}>
							Get a Quote
						</button>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>

<ShipError />
