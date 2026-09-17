<script>
	import { onMount } from 'svelte';
	import { openShipModal } from '$lib/shipModal.svelte.js';

	onMount(() => {
		openShipModal();
	});
</script>

<svelte:head>
	<title>Get a Quote | SwiftPort Logistics</title>
	<meta name="description" content="Get a shipping quote from SwiftPort Logistics." />
</svelte:head>

<section class="bg-navy">
	<div class="section-padding">
		<div class="container-narrow text-center">
			<p class="eyebrow">Ship Now</p>
			<h1 class="section-heading mt-3 text-white">Get a Shipping Quote</h1>
			<p class="mt-4 text-lg text-white/60">Our shipping services are currently being updated.</p>
		</div>
	</div>
</section>

<section class="bg-white">
	<div class="section-padding">
		<div class="container-narrow text-center">
			<div class="mx-auto max-w-md rounded-2xl border border-border p-8">
				<div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber/10">
					<svg class="h-8 w-8 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
						<path d="M12 8v4"/>
						<path d="M12 16h.01"/>
					</svg>
				</div>
				<h2 class="mt-4 text-xl font-bold text-navy">Service Temporarily Unavailable</h2>
				<p class="mt-2 text-sm text-muted">Online quoting is currently being updated. You can track existing shipments or contact us directly.</p>
				<div class="mt-6 flex flex-col gap-3">
					<a href="/track" class="btn-primary block text-center text-sm">Track a Shipment</a>
					<a href="/contact" class="btn-outline block text-center text-sm">Contact Us</a>
				</div>
			</div>
		</div>
	</div>
</section>
