<script>
	import { siteData } from '$lib/data/site.js';
</script>

<footer class="bg-navy-dark">
	<div class="container-wide py-16 lg:py-20">
		<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
			<div class="lg:col-span-2">
				<a href="/" class="flex items-center gap-3">
					<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-amber">
						<svg class="h-5 w-5 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M12 2L2 7l10 5 10-5-10-5z"/>
							<path d="M2 17l10 5 10-5"/>
							<path d="M2 12l10 5 10-5"/>
						</svg>
					</div>
					<div>
						<span class="text-lg font-bold text-white">SwiftPort</span>
						<span class="text-lg font-light text-white/60"> Logistics</span>
					</div>
				</a>
			<p class="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
				{siteData.company.tagline}
			</p>
			<div class="mt-6 space-y-2">
				<a href="mailto:{siteData.company.email}" class="block text-sm text-white/40 transition-colors hover:text-amber">
					{siteData.company.email}
				</a>
				<a href="https://wa.me/16578022801" target="_blank" rel="noopener noreferrer" class="block text-sm text-white/40 transition-colors hover:text-amber">
					WhatsApp: {siteData.company.whatsapp}
				</a>
			</div>
			</div>

			<div>
				<h4 class="text-sm font-semibold uppercase tracking-wider text-white/70">Services</h4>
				<ul class="mt-4 space-y-3">
					{#each siteData.footer.services as link}
						<li>
							<a href={link.href} class="text-sm text-white/40 transition-colors hover:text-amber">
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h4 class="text-sm font-semibold uppercase tracking-wider text-white/70">Company</h4>
				<ul class="mt-4 space-y-3">
					{#each siteData.footer.company as link}
						<li>
							<a href={link.href} class="text-sm text-white/40 transition-colors hover:text-amber">
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h4 class="text-sm font-semibold uppercase tracking-wider text-white/70">Resources</h4>
				<ul class="mt-4 space-y-3">
					{#each siteData.footer.resources as link}
						<li>
							<a href={link.href} class="text-sm text-white/40 transition-colors hover:text-amber">
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>

	<div class="border-t border-white/10">
		<div class="container-wide flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
			<p class="text-xs text-white/30">
				&copy; {new Date().getFullYear()} SwiftPort Logistics. All rights reserved.
			</p>
			<div class="flex gap-6">
				<a href="#" class="text-xs text-white/30 transition-colors hover:text-white/60">Terms</a>
				<a href="#" class="text-xs text-white/30 transition-colors hover:text-white/60">Privacy</a>
				<a href="#" class="text-xs text-white/30 transition-colors hover:text-white/60">Cookies</a>
			</div>
		</div>
	</div>
</footer>
