<script lang="ts">
	import { onMount } from 'svelte';
	import { track } from '$lib/variable.svelte.js';

	let trackCode: string = $state('');
	let trackingInfo: any = $state(null);
	let errorMsg: string | boolean = $state(false);
	let loading: boolean = $state(false);
	let visible: boolean = $state(false);

	onMount(() => {
		const stored = localStorage.getItem('trackCode');
		if (stored) {
			trackCode = stored;
		} else if (track.trackCode) {
			trackCode = track.trackCode;
			localStorage.setItem('trackCode', trackCode);
		}
		if (trackCode) runTrack();
	});

	async function runTrack() {
		errorMsg = false;
		trackingInfo = null;
		loading = true;
		visible = false;
		if (!trackCode) { errorMsg = 'Tracking code is required'; loading = false; return; }
		try {
			const response = await fetch(`/api/track/${trackCode}`);
			if (response.ok) {
				trackingInfo = await response.json();
				setTimeout(() => { visible = true; }, 80);
			} else {
				const err = await response.json();
				errorMsg = err.error || 'Tracking code not found';
			}
		} catch { errorMsg = 'Failed to fetch tracking data'; }
		finally { loading = false; }
	}

	function handleTrack(e: Event) { e.preventDefault(); runTrack(); }

	const steps = ['Pending', 'Picked Up', 'In Transit', 'At Destination', 'Out for Delivery', 'Delivered'];
	function statusIndex(s: string) { return Math.max(0, steps.findIndex(x => x.toLowerCase() === s?.toLowerCase())); }

	const faqItems = [
		{ q: 'What is a tracking number?', a: 'A tracking number uniquely identifies your shipment. The shipper or online shop provides it.' },
		{ q: 'When will my tracking info appear?', a: 'Usually 24-48 hours after the Track and Trace ID is received, once the shipment reaches our facility.' },
		{ q: 'Why is my tracking number not working?', a: 'Ensure the correct format, minimum 5 characters, and no special characters like tabs or semicolons.' },
		{ q: 'Can I track without a number?', a: 'Contact your shipper. Other shipping reference numbers may also work in our system.' }
	];
	let openFaq = $state(-1);
</script>

<svelte:head>
	<title>Track Shipment | SwiftPort Logistics</title>
	<meta name="description" content="Track your SwiftPort Logistics shipment in real time." />
</svelte:head>

<section class="bg-navy">
	<div class="section-padding">
		<div class="container-narrow text-center">
			<p class="eyebrow">Track & Trace</p>
			<h1 class="mt-4 text-4xl font-extrabold text-white md:text-5xl" style="font-family: var(--font-display);">Know Where Your Shipment Is.</h1>
			<p class="mt-5 text-lg text-white/50">Enter your tracking number to see real-time status and delivery progress.</p>
			<form onsubmit={handleTrack} class="mx-auto mt-10 max-w-xl">
				<div class="flex flex-col gap-3 sm:flex-row">
					<input type="text" bind:value={trackCode} class="flex-1 rounded-lg border border-white/10 bg-white/10 px-5 py-4 text-lg text-white placeholder-white/30 transition-all focus:border-amber/50 focus:ring-2 focus:ring-amber/20 focus:outline-none tracking-number" placeholder="Enter tracking number" required />
					<button type="submit" class="btn-primary px-8 py-4 text-base" disabled={loading}>
						{#if loading}
							<svg class="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" opacity="0.25"/><path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor"/></svg>
							Tracking...
						{:else}Track Shipment{/if}
					</button>
				</div>
			</form>
		</div>
	</div>
</section>

{#if errorMsg}
	<div class="bg-white py-6">
		<div class="container-narrow">
			<div class="flex items-center gap-3 rounded-xl border border-error/30 bg-error/10 px-5 py-4">
				<svg class="h-5 w-5 shrink-0 text-error" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
				<p class="font-medium text-error">{errorMsg}</p>
			</div>
		</div>
	</div>
{/if}

{#if trackingInfo}
	<div class="bg-white">
		<div class="py-12 md:py-16">
			<div class="container-narrow">

				<div class="transition-all duration-700 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}">

					<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<p class="text-sm font-semibold uppercase tracking-widest text-muted">Shipment</p>
							<p class="mt-1 tracking-number text-3xl font-extrabold text-navy md:text-4xl">{trackingInfo.tracking_number}</p>
						</div>
						<div class="flex items-center gap-3">
							{#if trackingInfo.payment_status}
								<span class="rounded-full px-4 py-1.5 text-sm font-bold {trackingInfo.payment_status === 'Paid' ? 'bg-success/10 text-success' : 'bg-amber/10 text-amber'}">{trackingInfo.payment_status}</span>
							{/if}
							<span class="rounded-full bg-navy px-5 py-1.5 text-sm font-bold text-white">{trackingInfo.status}</span>
						</div>
					</div>
				</div>

				<div class="mt-10 transition-all duration-700 delay-150 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}">
					<div class="rounded-2xl border border-border bg-surface p-8 md:p-10">
						<div class="flex flex-col items-center gap-6 md:flex-row md:justify-between">
							<div class="text-center md:text-left">
								<p class="text-sm text-muted">From</p>
								<p class="mt-1.5 text-xl font-semibold text-navy" style="font-family: var(--font-display);">{trackingInfo.origin || '—'}</p>
							</div>
							<div class="flex items-center gap-4 text-muted">
								<div class="h-px w-12 bg-border md:w-20"></div>
								<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
								<div class="h-px w-12 bg-border md:w-20"></div>
							</div>
							<div class="text-center md:text-right">
								<p class="text-sm text-muted">To</p>
								<p class="mt-1.5 text-xl font-semibold text-navy" style="font-family: var(--font-display);">{trackingInfo.destination || '—'}</p>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-8 transition-all duration-700 delay-300 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}">
					<div class="rounded-2xl border border-border bg-white p-6 md:p-10">
						<h2 class="text-xl font-extrabold text-navy" style="font-family: var(--font-display);">Shipment Progress</h2>

						<div class="mt-8 md:hidden">
							<div class="space-y-0">
								{#each steps as step, i}
									{@const active = i <= statusIndex(trackingInfo.status)}
									{@const current = i === statusIndex(trackingInfo.status)}
									<div class="flex gap-4">
										<div class="flex flex-col items-center">
											<div class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500 {current ? 'border-amber bg-amber text-navy shadow-lg shadow-amber/30' : active ? 'border-amber bg-amber/10 text-amber' : 'border-border bg-white text-muted/40'}">
												{#if active}
													<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>
												{:else}
													<span class="text-xs font-bold">{i + 1}</span>
												{/if}
											</div>
											{#if i < steps.length - 1}
												<div class="mt-1 h-8 w-0.5 {active ? 'bg-amber' : 'bg-border'}"></div>
											{/if}
										</div>
										<div class="pb-6 pt-1.5">
											<p class="text-sm font-bold {current ? 'text-navy' : active ? 'text-amber' : 'text-muted/40'}">{step}</p>
										</div>
									</div>
								{/each}
							</div>
						</div>

						<div class="relative mt-8 hidden md:block">
							<div class="absolute top-6 left-0 h-1.5 w-full rounded-full bg-border">
								<div class="h-full rounded-full bg-gradient-to-r from-amber to-amber-dark transition-all duration-1000 ease-out" style="width: {(statusIndex(trackingInfo.status) / 5) * 100}%"></div>
							</div>
							<div class="relative flex justify-between">
								{#each steps as step, i}
									{@const active = i <= statusIndex(trackingInfo.status)}
									{@const current = i === statusIndex(trackingInfo.status)}
									<div class="flex flex-col items-center" style="width: 16.66%">
										<div class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-500 {current ? 'border-amber bg-amber text-navy scale-110 shadow-lg shadow-amber/30' : active ? 'border-amber bg-amber/10 text-amber' : 'border-border bg-white text-muted/50'}" style="transition-delay: {i * 80}ms">
											{#if active}
												<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>
											{:else}
												<span class="text-sm font-bold">{i + 1}</span>
											{/if}
										</div>
										<p class="mt-3 text-center text-xs font-semibold leading-tight {current ? 'text-navy' : active ? 'text-amber' : 'text-muted/50'}">{step}</p>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>

				<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 transition-all duration-700 delay-500 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}">
					<div class="rounded-2xl border border-border bg-white p-8">
						<h3 class="text-base font-semibold text-muted">Sender</h3>
						<div class="mt-4">
							<p class="text-lg font-semibold text-navy" style="font-family: var(--font-display);">{trackingInfo.sender_name || '—'}</p>
						</div>
					</div>

					<div class="rounded-2xl border border-border bg-white p-8">
						<h3 class="text-base font-semibold text-muted">Receiver</h3>
						<div class="mt-4 space-y-3">
							<div>
								<p class="text-lg font-semibold text-navy" style="font-family: var(--font-display);">{trackingInfo.receiver_name || '—'}</p>
							</div>
							<div>
								<p class="text-sm text-muted">{trackingInfo.receiver_email || ''}</p>
							</div>
							<div>
								<p class="text-sm text-muted">{trackingInfo.receiver_phone || ''}</p>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-6 rounded-2xl border border-border bg-white p-8 md:p-10 transition-all duration-700 delay-600 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}">
					<h3 class="text-base font-semibold text-muted mb-6">Package Details</h3>
					<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						<div>
							<p class="text-sm text-muted">Contents</p>
							<p class="mt-1 text-base font-medium text-navy leading-relaxed whitespace-pre-line">{trackingInfo.package_contents || '—'}</p>
						</div>
						{#if trackingInfo.weight}
							<div>
								<p class="text-sm text-muted">Weight</p>
								<p class="mt-1 text-base font-medium text-navy">{trackingInfo.weight} lbs</p>
							</div>
						{/if}
						{#if trackingInfo.amount_due}
							<div>
								<p class="text-sm text-muted">Amount Due</p>
								<p class="mt-1 text-2xl font-bold text-navy" style="font-family: var(--font-display);">${trackingInfo.amount_due}</p>
							</div>
						{/if}
						{#if trackingInfo.payment_reason}
							<div>
								<p class="text-sm text-muted">Payment</p>
								<p class="mt-1 text-base font-medium text-navy">{trackingInfo.payment_reason}</p>
							</div>
						{/if}
					</div>
					{#if trackingInfo.current_location}
						<div class="mt-6 rounded-xl bg-surface p-4">
							<p class="text-sm text-muted">Current Location</p>
							<p class="mt-1 text-base font-semibold text-navy">{trackingInfo.current_location}</p>
						</div>
					{/if}
				</div>

				{#if trackingInfo.history && trackingInfo.history.length > 0}
					<div class="mt-6 rounded-2xl border border-border bg-white p-8 md:p-10 transition-all duration-700 delay-700 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}">
						<h2 class="text-xl font-extrabold text-navy" style="font-family: var(--font-display);">Tracking History</h2>
						<div class="mt-8">
							{#each trackingInfo.history as item, i}
								<div class="flex gap-5 transition-all duration-500 {visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}" style="transition-delay: {i * 120 + 700}ms">
									<div class="flex flex-col items-center">
										<div class="h-4 w-4 rounded-full {i === 0 ? 'bg-amber shadow-md shadow-amber/30' : 'bg-navy/15'}"></div>
										{#if i < trackingInfo.history.length - 1}
											<div class="mt-1 h-full w-px bg-border"></div>
										{/if}
									</div>
									<div class="pb-10">
										<p class="text-base font-bold text-navy">{item.event}</p>
										{#if item.location}
											<p class="mt-1 text-sm font-medium text-muted">{item.location}</p>
										{/if}
										<p class="mt-1 text-sm text-muted/60">{new Date(item.timestamp).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}</p>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}

			</div>
		</div>
	</div>
{/if}

<section id="faq" class="bg-surface">
	<div class="section-padding">
		<div class="container-narrow">
			<div class="text-center">
				<p class="eyebrow">FAQ</p>
				<h2 class="mt-4 text-3xl font-extrabold text-navy md:text-4xl" style="font-family: var(--font-display);">Frequently Asked Questions</h2>
			</div>
			<div class="mt-12 space-y-3">
				{#each faqItems as item, i}
					<div class="rounded-xl border border-border bg-white">
						<button class="flex w-full items-center justify-between p-6 text-left" onclick={() => openFaq = openFaq === i ? -1 : i} aria-expanded={openFaq === i}>
							<span class="pr-4 text-base font-bold text-navy">{item.q}</span>
							<svg class="h-5 w-5 shrink-0 text-muted transition-transform duration-200 {openFaq === i ? 'rotate-180' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
						</button>
						{#if openFaq === i}
							<div class="px-6 pb-6 text-base leading-relaxed text-muted">{item.a}</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
