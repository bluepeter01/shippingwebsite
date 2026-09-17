<script>
	import { siteData } from '$lib/data/site.js';
	import { openShipModal } from '$lib/shipModal.svelte.js';

	const serviceImages = {
		air: {
			src: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&h=600&fit=crop',
			alt: 'Cargo aircraft ready for air freight operations'
		},
		sea: {
			src: 'https://images.unsplash.com/photo-1524522173746-f628baad3644?w=800&h=600&fit=crop',
			alt: 'Container ship at port for sea freight'
		},
		road: {
			src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop',
			alt: 'Delivery truck for road freight and door-to-door delivery'
		},
		warehouse: {
			src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop',
			alt: 'Warehouse interior with organized storage systems'
		},
		customs: {
			src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop',
			alt: 'Shipping containers at customs clearance facility'
		},
		support: {
			src: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800&h=600&fit=crop',
			alt: 'Customer support team assisting logistics clients'
		}
	};

	const serviceBenefits = {
		air: ['Express & standard options', 'Global carrier partnerships', 'Ideal for urgent cargo', 'Temperature-controlled available'],
		sea: ['FCL & LCL options', 'Cost-effective for bulk', 'Global port coverage', 'Flexible scheduling'],
		road: ['Real-time GPS tracking', 'Door-to-door delivery', 'FTL & partial loads', 'Cross-border capability'],
		warehouse: ['24/7 security monitoring', 'Climate-controlled facilities', 'Inventory management', 'Pick and pack services'],
		customs: ['Licensed customs brokers', 'Classification & documentation', 'Duty optimization', 'Compliance management'],
		support: ['Multi-channel support', 'Dedicated account managers', 'Priority response times', 'Global coverage']
	};
</script>

<svelte:head>
	<title>Our Logistics Services | Air Freight, Sea Freight, Customs Clearance | SwiftPort</title>
	<meta name="description" content="Comprehensive logistics services from SwiftPort: air freight, sea freight, road freight, warehousing, customs clearance, and customer support for global shipping needs." />
	<meta name="keywords" content="logistics services, air freight, sea freight, road freight, warehousing, customs clearance, global shipping, freight forwarding, supply chain management, SwiftPort Logistics" />
	<link rel="canonical" href="https://www.swiftportlogistics.online/services" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Our Logistics Services | Air Freight, Sea Freight, Customs Clearance | SwiftPort" />
	<meta property="og:description" content="Comprehensive logistics services from SwiftPort: air freight, sea freight, road freight, warehousing, customs clearance, and customer support for global shipping needs." />
	<meta property="og:url" content="https://www.swiftportlogistics.online/services" />
	<meta property="og:image" content="https://www.swiftportlogistics.online/Gemini_Generated_Image_l3496wl3496wl349.png" />
	<meta property="og:site_name" content="SwiftPort Logistics" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Our Logistics Services | Air Freight, Sea Freight, Customs Clearance | SwiftPort" />
	<meta name="twitter:description" content="Comprehensive logistics services from SwiftPort: air freight, sea freight, road freight, warehousing, customs clearance, and customer support for global shipping needs." />
	<meta name="twitter:image" content="https://www.swiftportlogistics.online/Gemini_Generated_Image_l3496wl3496wl349.png" />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			"itemListElement": [
				{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.swiftportlogistics.online/" },
				{ "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.swiftportlogistics.online/services" }
			]
		}
	</script>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "SwiftPort Logistics",
			"url": "https://www.swiftportlogistics.online",
			"logo": "https://www.swiftportlogistics.online/Gemini_Generated_Image_l3496wl3496wl349.png",
			"description": "Fast, secure, and reliable global logistics for individuals and businesses worldwide."
		}
	</script>
</svelte:head>

<section class="bg-navy">
	<div class="section-padding">
		<div class="container-narrow text-center">
			<p class="eyebrow">Our Services</p>
			<h1 class="section-heading mt-3 text-white">Shipping Solutions<br/>Built Around Your Cargo.</h1>
			<p class="mt-4 text-lg text-white/60">From air freight to customs clearance, we provide comprehensive logistics solutions.</p>
		</div>
	</div>
</section>

{#each siteData.services as service, i}
	<section id={service.id} class="scroll-mt-24 {i % 2 === 0 ? 'bg-white' : 'bg-surface'}">
		<div class="section-padding">
			<div class="container-wide">
				<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 {i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}">
					<div class="{i % 2 !== 0 ? 'lg:order-2' : ''}">
						<p class="eyebrow">{service.number}</p>
						<h2 class="section-heading mt-2">{service.title}</h2>
						<p class="mt-4 text-lg leading-relaxed text-muted">{service.details}</p>

						{#if serviceBenefits[service.id]}
							<ul class="mt-6 space-y-2">
								{#each serviceBenefits[service.id] as benefit}
									<li class="flex items-center gap-3 text-sm text-navy">
										<svg class="h-4 w-4 shrink-0 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
											<path d="M20 6 9 17l-5-5"/>
										</svg>
										{benefit}
									</li>
								{/each}
							</ul>
						{/if}

						<button class="btn-primary mt-8" onclick={openShipModal}>
							Get a Quote
							<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
								<path d="M5 12h14"/>
								<path d="m12 5 7 7-7 7"/>
							</svg>
						</button>
					</div>
					<div class="overflow-hidden rounded-2xl {i % 2 !== 0 ? 'lg:order-1' : ''}">
						<img
							src={serviceImages[service.id].src}
							alt={serviceImages[service.id].alt}
							class="h-64 w-full object-cover sm:h-80 lg:h-96"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
{/each}

<section class="bg-navy">
	<div class="section-padding">
		<div class="container-narrow text-center">
			<h2 class="text-3xl font-bold text-white md:text-4xl" style="font-family: var(--font-display);">Ready to Ship?</h2>
			<p class="mt-4 text-lg text-white/60">Get a custom quote for your logistics needs.</p>
			<div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<button class="btn-primary px-8 py-4 text-base" onclick={openShipModal}>Get a Quote</button>
				<a href="/contact" class="btn-secondary px-8 py-4 text-base">Contact Us</a>
			</div>
		</div>
	</div>
</section>
