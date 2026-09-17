<script>
	const capabilities = [
		{
			icon: 'globe',
			title: 'Global Reach',
			description: 'International shipping solutions across continents.'
		},
		{
			icon: 'tracking',
			title: 'Real-Time Tracking',
			description: 'Shipment visibility from origin to destination.'
		},
		{
			icon: 'shield',
			title: 'Secure Handling',
			description: 'Professional cargo management and protection.'
		},
		{
			icon: 'clock',
			title: '24/7 Support',
			description: 'Assistance whenever you need it.'
		}
	];
</script>

<section class="border-b border-border bg-white">
	<div class="container-wide py-12 md:py-16">
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each capabilities as cap}
				<div class="flex items-start gap-4">
					<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/5">
						{#if cap.icon === 'globe'}
							<svg class="h-6 w-6 text-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10"/>
								<path d="M2 12h20"/>
								<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
							</svg>
						{:else if cap.icon === 'tracking'}
							<svg class="h-6 w-6 text-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
								<path d="m9 12 2 2 4-4"/>
							</svg>
						{:else if cap.icon === 'shield'}
							<svg class="h-6 w-6 text-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
								<path d="m9 12 2 2 4-4"/>
							</svg>
						{:else}
							<svg class="h-6 w-6 text-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
								<path d="M12 6v6l4 2"/>
							</svg>
						{/if}
					</div>
					<div>
						<h3 class="font-semibold text-navy">{cap.title}</h3>
						<p class="mt-1 text-sm leading-relaxed text-muted">{cap.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
