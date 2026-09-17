<script>
	import { getShipModalState, closeShipModal } from '$lib/shipModal.svelte.js';

	let modal = getShipModalState();

	function close() {
		closeShipModal();
	}
</script>

{#if modal.open}
	<div class="fixed inset-0 z-[100] flex items-center justify-center p-4">
		<button class="fixed inset-0 bg-black/50 backdrop-blur-sm" onclick={close} aria-label="Close"></button>
		<div class="relative z-10 w-full max-w-md rounded-2xl border border-border bg-white p-8 shadow-2xl">
			<button class="absolute top-4 right-4 text-muted transition-colors hover:text-navy" onclick={close} aria-label="Close">
				<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
					<path d="M18 6L6 18"/>
					<path d="M6 6l12 12"/>
				</svg>
			</button>
			<h3 class="text-xl font-bold text-navy">Service Availability</h3>
			<p class="mt-3 text-sm leading-relaxed text-muted">
				Our shipping services are currently being updated. In the meantime, you can track your existing shipments.
			</p>
			<div class="mt-6 flex gap-3">
				<a href="/track" class="btn-primary flex-1 text-center text-sm" onclick={close}>Track Shipment</a>
				<button class="btn-outline flex-1 text-sm" onclick={close}>Close</button>
			</div>
		</div>
	</div>
{/if}
