<script>
	const reasons = [
		{
			icon: 'check',
			title: 'Reliable Delivery',
			description: 'Consistent, on-time delivery backed by a global logistics network.'
		},
		{
			icon: 'lock',
			title: 'Secure Cargo Handling',
			description: 'Professional handling protocols to protect your shipments.'
		},
		{
			icon: 'radar',
			title: 'Real-Time Tracking',
			description: 'Full visibility into your shipment status from pickup to delivery.'
		},
		{
			icon: 'network',
			title: 'Global Logistics Network',
			description: 'International reach with local expertise across key markets.'
		},
		{
			icon: 'document',
			title: 'Customs Support',
			description: 'Expert guidance through documentation and clearance processes.'
		},
		{
			icon: 'users',
			title: 'Responsive Customer Service',
			description: 'Dedicated support when you need it, across multiple channels.'
		}
	];
</script>

<section class="bg-white">
	<div class="section-padding">
		<div class="container-wide">
			<div class="mx-auto max-w-2xl text-center">
				<p class="eyebrow">Why SwiftPort</p>
				<h2 class="section-heading mt-3">Why Businesses Choose SwiftPort</h2>
			</div>

			<div class="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each reasons as reason}
					<div class="flex items-start gap-4 rounded-xl border border-border p-6 transition-all duration-200 hover:border-navy/10 hover:shadow-sm">
						<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber/10 text-amber">
							{#if reason.icon === 'check'}
								<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
									<path d="m9 11 3 3L22 4"/>
								</svg>
							{:else if reason.icon === 'lock'}
								<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
									<path d="M7 11V7a5 5 0 0 1 10 0v4"/>
								</svg>
							{:else if reason.icon === 'radar'}
								<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/>
									<path d="M4 6h.01"/>
									<path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/>
									<path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/>
									<path d="M12 18h.01"/>
									<circle cx="12" cy="12" r="2"/>
								</svg>
							{:else if reason.icon === 'network'}
								<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="5" r="3"/>
									<circle cx="5" cy="19" r="3"/>
									<circle cx="19" cy="19" r="3"/>
									<path d="M12 8v4"/>
									<path d="m7.5 15.5 3-3"/>
									<path d="m13.5 15.5 3-3"/>
								</svg>
							{:else if reason.icon === 'document'}
								<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/>
									<path d="M14 2v6h6"/>
									<path d="M16 13H8"/>
									<path d="M16 17H8"/>
									<path d="M10 9H8"/>
								</svg>
							{:else}
								<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
									<circle cx="9" cy="7" r="4"/>
									<path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
								</svg>
							{/if}
						</div>
						<div>
							<h3 class="font-semibold text-navy">{reason.title}</h3>
							<p class="mt-1 text-sm leading-relaxed text-muted">{reason.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
