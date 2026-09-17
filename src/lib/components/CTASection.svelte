<script>
	import { openShipModal } from '$lib/shipModal.svelte.js';
</script>

<section class="relative overflow-hidden bg-navy">
	<div class="absolute inset-0 opacity-30">
		<div class="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-amber/10 blur-3xl"></div>
		<div class="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-blue/10 blur-3xl"></div>
	</div>

	<div class="relative section-padding">
		<div class="container-narrow text-center">
			<h2 class="text-3xl font-bold text-white md:text-4xl lg:text-5xl" style="font-family: var(--font-display);">
				Ready to Move Your Shipment?
			</h2>
			<p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
				Whether you're shipping a parcel, commercial cargo or freight, SwiftPort helps you move it with confidence.
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
				</a>
			</div>
		</div>
	</div>
</section>
