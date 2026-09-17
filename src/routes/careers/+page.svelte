<script>
	const jobs = [
		{
			title: 'Logistics Coordinator',
			location: 'United States',
			type: 'Full-time',
			description: 'Coordinate shipments and manage logistics operations across multiple channels.'
		},
		{
			title: 'Customs Compliance Specialist',
			location: 'United States',
			type: 'Full-time',
			description: 'Ensure compliance with international trade regulations and customs requirements.'
		},
		{
			title: 'Customer Support Representative',
			location: 'United States (Remote)',
			type: 'Full-time',
			description: 'Provide shipping support and assistance to customers across all service channels.'
		},
		{
			title: 'Operations Analyst',
			location: 'United States',
			type: 'Full-time',
			description: 'Analyze logistics data to optimize routing, costs, and delivery performance.'
		}
	];
</script>

<svelte:head>
	<title>Careers | SwiftPort Logistics</title>
	<meta name="description" content="Join SwiftPort Logistics. Explore career opportunities in global shipping, logistics, and supply chain management." />
</svelte:head>

<section class="bg-navy">
	<div class="section-padding">
		<div class="container-narrow text-center">
			<p class="eyebrow">Careers</p>
			<h1 class="section-heading mt-3 text-white">Join SwiftPort</h1>
			<p class="mt-4 text-lg text-white/60">Build the future of global logistics with us.</p>
		</div>
	</div>
</section>

<section class="bg-white">
	<div class="section-padding">
		<div class="container-narrow">
			<div class="space-y-5">
				{#each jobs as job}
					<div class="rounded-xl border border-border p-6 transition-all duration-200 hover:border-navy/10 hover:shadow-sm md:p-8">
						<div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
							<div class="flex-1">
								<h3 class="text-xl font-semibold text-navy">{job.title}</h3>
								<div class="mt-2 flex flex-wrap gap-3">
									<span class="inline-flex items-center gap-1 text-sm text-muted">
										<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
											<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
											<circle cx="12" cy="10" r="3"/>
										</svg>
										{job.location}
									</span>
									<span class="inline-flex items-center gap-1 text-sm text-muted">
										<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
											<circle cx="12" cy="12" r="10"/>
											<path d="M12 6v6l4 2"/>
										</svg>
										{job.type}
									</span>
								</div>
								<p class="mt-3 text-sm leading-relaxed text-muted">{job.description}</p>
							</div>
							<button class="btn-outline shrink-0 text-sm">
								Apply Now
							</button>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="bg-surface">
	<div class="section-padding">
		<div class="container-narrow text-center">
			<h2 class="text-2xl font-bold text-navy">Don't See Your Role?</h2>
			<p class="mt-3 text-muted">We're always looking for talented people. Send us your resume.</p>
			<a href="/contact" class="btn-primary mt-6">Contact Us</a>
		</div>
	</div>
</section>
