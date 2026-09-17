<script lang="ts">
	let formData = $state({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	});

	let submitted = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		submitted = true;
	}
</script>

<svelte:head>
	<title>Contact SwiftPort Logistics | Get in Touch</title>
	<meta name="description" content="Get in touch with SwiftPort Logistics. Contact us for shipping inquiries, quotes, customer support, and partnership opportunities." />
	<meta name="keywords" content="contact SwiftPort, contact logistics company, shipping inquiry, shipping quote, customer support, logistics contact, SwiftPort phone, SwiftPort email" />
	<link rel="canonical" href="https://www.swiftportlogistics.online/contact" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Contact SwiftPort Logistics | Get in Touch" />
	<meta property="og:description" content="Get in touch with SwiftPort Logistics. Contact us for shipping inquiries, quotes, customer support, and partnership opportunities." />
	<meta property="og:url" content="https://www.swiftportlogistics.online/contact" />
	<meta property="og:image" content="https://www.swiftportlogistics.online/Gemini_Generated_Image_l3496wl3496wl349.png" />
	<meta property="og:site_name" content="SwiftPort Logistics" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Contact SwiftPort Logistics | Get in Touch" />
	<meta name="twitter:description" content="Get in touch with SwiftPort Logistics. Contact us for shipping inquiries, quotes, customer support, and partnership opportunities." />
	<meta name="twitter:image" content="https://www.swiftportlogistics.online/Gemini_Generated_Image_l3496wl3496wl349.png" />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			"itemListElement": [
				{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.swiftportlogistics.online/" },
				{ "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.swiftportlogistics.online/contact" }
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
			<p class="eyebrow">Contact Us</p>
			<h1 class="section-heading mt-3 text-white">Get in Touch</h1>
			<p class="mt-4 text-lg text-white/60">Have a question or need a quote? We're here to help.</p>
		</div>
	</div>
</section>

<section class="bg-white">
	<div class="section-padding">
		<div class="container-wide">
			<div class="grid grid-cols-1 gap-12 lg:grid-cols-5">
				<div class="lg:col-span-2">
					<h2 class="text-2xl font-bold text-navy">Contact Information</h2>
					<p class="mt-3 text-muted">Reach out to us through any of the following channels.</p>

					<div class="mt-8 space-y-6">
						<div class="flex items-start gap-4">
							<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5">
								<svg class="h-5 w-5 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
								</svg>
							</div>
							<div>
								<p class="text-sm font-semibold text-navy">WhatsApp</p>
								<a href="https://wa.me/16578022801" target="_blank" rel="noopener noreferrer" class="mt-1 block text-sm text-muted transition-colors hover:text-navy">+1 657 802 2801</a>
							</div>
						</div>

						<div class="flex items-start gap-4">
							<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5">
								<svg class="h-5 w-5 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
									<rect width="20" height="16" x="2" y="4" rx="2"/>
									<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
								</svg>
							</div>
							<div>
								<p class="text-sm font-semibold text-navy">Email</p>
								<a href="mailto:Swiftportlogistsusa@gmail.com" class="mt-1 block text-sm text-muted transition-colors hover:text-navy">Swiftportlogistsusa@gmail.com</a>
							</div>
						</div>

						<div class="flex items-start gap-4">
							<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5">
								<svg class="h-5 w-5 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
									<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
									<circle cx="12" cy="10" r="3"/>
								</svg>
							</div>
							<div>
								<p class="text-sm font-semibold text-navy">Headquarters</p>
								<p class="mt-1 text-sm text-muted">United States</p>
							</div>
						</div>
					</div>
				</div>

				<div class="lg:col-span-3">
					{#if submitted}
						<div class="rounded-2xl border border-success/20 bg-success/5 p-8 text-center">
							<div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
								<svg class="h-8 w-8 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
									<path d="m9 11 3 3L22 4"/>
								</svg>
							</div>
							<h2 class="mt-4 text-2xl font-bold text-navy">Message Sent</h2>
							<p class="mt-2 text-muted">Thank you for contacting us. We'll get back to you shortly.</p>
							<button onclick={() => submitted = false} class="btn-outline mt-6">Send Another Message</button>
						</div>
					{:else}
						<form onsubmit={handleSubmit} class="space-y-5">
							<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
								<div>
									<label for="name" class="mb-2 block text-sm font-medium text-navy">Name</label>
									<input id="name" type="text" bind:value={formData.name} class="input-field" placeholder="Your name" required />
								</div>
								<div>
									<label for="email" class="mb-2 block text-sm font-medium text-navy">Email</label>
									<input id="email" type="email" bind:value={formData.email} class="input-field" placeholder="your@email.com" required />
								</div>
							</div>
							<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
								<div>
									<label for="phone" class="mb-2 block text-sm font-medium text-navy">Phone</label>
									<input id="phone" type="tel" bind:value={formData.phone} class="input-field" placeholder="+1 (555) 000-0000" />
								</div>
								<div>
									<label for="subject" class="mb-2 block text-sm font-medium text-navy">Subject</label>
									<input id="subject" type="text" bind:value={formData.subject} class="input-field" placeholder="How can we help?" required />
								</div>
							</div>
							<div>
								<label for="message" class="mb-2 block text-sm font-medium text-navy">Message</label>
								<textarea id="message" bind:value={formData.message} class="input-field min-h-[140px] resize-y" placeholder="Tell us about your shipping needs..." required></textarea>
							</div>
							<div class="flex justify-end pt-2">
								<button type="submit" class="btn-primary px-8 py-3">
									Send Message
									<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
										<path d="m22 2-7 20-4-9-9-4Z"/>
										<path d="M22 2 11 13"/>
									</svg>
								</button>
							</div>
						</form>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>
