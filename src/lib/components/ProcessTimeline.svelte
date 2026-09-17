<script>
	import { siteData } from '$lib/data/site.js';
</script>

<section class="bg-surface">
	<div class="section-padding">
		<div class="container-wide">
			<div class="mx-auto max-w-2xl text-center">
				<p class="eyebrow">How It Works</p>
				<h2 class="section-heading mt-3">From Pickup to Delivery</h2>
				<p class="section-subheading mx-auto">Four simple steps to ship your cargo anywhere in the world.</p>
			</div>

			<div class="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each siteData.trackingSteps as step, i}
					<div class="relative">
						{#if i < siteData.trackingSteps.length - 1}
							<div class="absolute top-8 left-12 hidden h-px w-full bg-border lg:block"></div>
						{/if}
						<div class="flex flex-col items-center text-center">
							<div class="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-navy bg-white text-xl font-bold text-navy">
								{i + 1}
							</div>
							<h3 class="mt-5 text-base font-semibold text-navy">{step.label}</h3>
							<p class="mt-2 max-w-xs text-sm leading-relaxed text-muted">{step.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
