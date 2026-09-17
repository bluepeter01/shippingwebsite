<script>
	import { track } from '$lib/variable.svelte.js';
	import { goto } from '$app/navigation';
	import { openShipModal } from '$lib/shipModal.svelte.js';

	let trackCode = $state('');

	function handleSubmit(e) {
		e.preventDefault();
		if (!trackCode.trim()) return;
		localStorage.setItem('trackCode', trackCode);
		track.trackCode = trackCode;
		goto('/track');
	}
</script>

<section class="relative overflow-hidden bg-navy">
	<div class="absolute inset-0">
		<img
			src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&h=1080&fit=crop&q=80"
			alt=""
			class="h-full w-full object-cover opacity-20"
		/>
		<div class="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/80"></div>
	</div>

	<div class="relative container-wide py-20 md:py-28 lg:py-36">
		<div class="mx-auto max-w-4xl text-center">
			<p class="eyebrow">Global Logistics &bull; Worldwide Delivery</p>

			<h1 class="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl" style="font-family: var(--font-display);">
				Move What Matters.<br/>
				<span class="text-amber">Across the World.</span>
			</h1>

			<p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
				SwiftPort provides secure, reliable freight and parcel shipping solutions for individuals and businesses worldwide.
			</p>

			<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<button class="btn-primary px-8 py-4 text-base" onclick={openShipModal}>
					Get a Quote
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M5 12h14"/>
						<path d="m12 5 7 7-7 7"/>
					</svg>
				</button>
				<a href="/track" class="btn-secondary px-8 py-4 text-base">
					Track Shipment
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<circle cx="11" cy="11" r="8"/>
						<path d="m21 21-4.35-4.35"/>
					</svg>
				</a>
			</div>
		</div>

		<div class="mx-auto mt-16 max-w-2xl md:mt-20">
			<div class="rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm md:p-3">
				<p class="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50 text-center">Track Your Shipment</p>
				<form onsubmit={handleSubmit} class="flex flex-col gap-2 sm:flex-row">
					<input
						type="text"
						bind:value={trackCode}
						class="flex-1 rounded-lg border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder-white/30 transition-all duration-200 focus:border-amber/50 focus:ring-2 focus:ring-amber/20 focus:outline-none tracking-number"
						placeholder="Enter tracking number (e.g. SWP-XXXXXXXXXXXX)"
						required
					/>
					<button type="submit" class="btn-primary whitespace-nowrap px-6 py-3.5">
						Track
						<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M5 12h14"/>
							<path d="m12 5 7 7-7 7"/>
						</svg>
					</button>
				</form>
				<p class="mt-2 text-center text-xs text-white/30">Track your shipment status, location and delivery progress in real time.</p>
			</div>
		</div>
	</div>

	<div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
</section>
