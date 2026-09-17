<script>
	import { siteData } from '$lib/data/site.js';
	import { openShipModal } from '$lib/shipModal.svelte.js';

	const serviceImages = {
		air: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=400&h=300&fit=crop',
		sea: 'https://images.unsplash.com/photo-1524522173746-f628baad3644?w=400&h=300&fit=crop',
		road: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop',
		warehouse: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop',
		customs: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&h=300&fit=crop',
		support: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=400&h=300&fit=crop'
	};
</script>

<section class="bg-surface">
	<div class="section-padding">
		<div class="container-wide">
			<div class="mx-auto max-w-2xl text-center">
				<p class="eyebrow">What We Do</p>
				<h2 class="section-heading mt-3">Our Logistics Services</h2>
				<p class="section-subheading mx-auto">Shipping solutions built around your cargo.</p>
			</div>

			<div class="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{#each siteData.services as service}
					<a
						href="/services#{service.id}"
						class="group card-surface flex flex-col overflow-hidden !p-0"
					>
						<div class="relative h-44 overflow-hidden">
							<img
								src={serviceImages[service.id]}
								alt={service.title}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								loading="lazy"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
							<span class="absolute bottom-3 left-4 text-xs font-semibold text-white/80">{service.number}</span>
						</div>
						<div class="flex flex-1 flex-col p-5">
							<h3 class="text-lg font-semibold text-navy">{service.title}</h3>
							<p class="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
							<div class="mt-4 flex items-center gap-2 text-sm font-medium text-blue transition-colors group-hover:text-navy">
								Learn More
								<svg class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M5 12h14"/>
									<path d="m12 5 7 7-7 7"/>
								</svg>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
