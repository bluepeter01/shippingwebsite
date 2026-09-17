<script>
	const articles = [
		{
			date: 'September 15, 2026',
			category: 'Company',
			title: 'SwiftPort Logistics Expands Global Shipping Network',
			excerpt: 'New partnerships and routes enhance our ability to serve customers across more destinations worldwide.'
		},
		{
			date: 'August 28, 2026',
			category: 'Technology',
			title: 'Real-Time Tracking System Upgrades',
			excerpt: 'Our tracking platform receives significant improvements for better shipment visibility and faster updates.'
		},
		{
			date: 'July 10, 2026',
			category: 'Industry',
			title: 'Global Freight Trends: What to Expect in 2026',
			excerpt: 'Key insights into the evolving logistics landscape and what it means for shipping businesses.'
		},
		{
			date: 'June 5, 2026',
			category: 'Company',
			title: 'SwiftPort Launches Enhanced Customs Clearance Support',
			excerpt: 'New customs brokerage services help customers navigate international shipping documentation more efficiently.'
		}
	];
</script>

<svelte:head>
	<title>Press & Media | SwiftPort Logistics</title>
	<meta name="description" content="Latest news, press releases, and media coverage from SwiftPort Logistics." />
</svelte:head>

<section class="bg-navy">
	<div class="section-padding">
		<div class="container-narrow text-center">
			<p class="eyebrow">Press & Media</p>
			<h1 class="section-heading mt-3 text-white">Latest News</h1>
			<p class="mt-4 text-lg text-white/60">Updates from SwiftPort Logistics and the global shipping industry.</p>
		</div>
	</div>
</section>

<section class="bg-white">
	<div class="section-padding">
		<div class="container-wide">
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				{#each articles as article}
					<article class="group card-surface">
						<div class="flex items-center gap-3">
							<span class="rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy">{article.category}</span>
							<span class="text-xs text-muted">{article.date}</span>
						</div>
						<h3 class="mt-4 text-xl font-semibold text-navy">{article.title}</h3>
						<p class="mt-2 flex-1 text-sm leading-relaxed text-muted">{article.excerpt}</p>
						<button class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors group-hover:text-navy">
							Read Article
							<svg class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M5 12h14"/>
								<path d="m12 5 7 7-7 7"/>
							</svg>
						</button>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
