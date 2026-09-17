<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount, tick } from 'svelte';
	import DateTimePicker from '$lib/components/DateTimePicker.svelte';

	let shipment = $state<any>(null);
	let loading = $state(true);
	let notFound = $state(false);
	let editing = $state(false);
	let saving = $state(false);
	let saved = $state(false);
	let deleting = $state(false);
	let history = $state<any[]>([]);
	let newEvent = $state({ event: '', location: '', timestamp: '' });
	let addingEvent = $state(false);

	let form = $state({
		status: '',
		current_location: '',
		origin: '',
		destination: '',
		sender_name: '',
		receiver_name: '',
		receiver_email: '',
		receiver_phone: '',
		package_contents: '',
		weight: '',
		amount_due: '',
		payment_status: '',
		payment_reason: ''
	});

	const trackingNumber = $derived($page.params.trackingCode);

	onMount(async () => {
		try {
			const res = await fetch(`/api/track/${trackingNumber}`);
			if (res.ok) {
				shipment = await res.json();
				resetForm();
			} else {
				notFound = true;
			}
		} catch { notFound = true; }
		finally { loading = false; }
	});

	function resetForm() {
		if (!shipment) return;
		history = (shipment.history || []).map((h: any) => ({ ...h }));
		newEvent = { event: '', location: '', timestamp: '' };
		addingEvent = false;
		form = {
			status: shipment.status || '',
			current_location: shipment.current_location || '',
			origin: shipment.origin || '',
			destination: shipment.destination || '',
			sender_name: shipment.sender_name || '',
			receiver_name: shipment.receiver_name || '',
			receiver_email: shipment.receiver_email || '',
			receiver_phone: shipment.receiver_phone || '',
			package_contents: shipment.package_contents || '',
			weight: String(shipment.weight || ''),
			amount_due: String(shipment.amount_due || ''),
			payment_status: shipment.payment_status || '',
			payment_reason: shipment.payment_reason || ''
		};
	}

	async function save() {
		saving = true;
		saved = false;
		try {
			const body = {
				...form,
				weight: form.weight ? Number(form.weight) : null,
				amount_due: form.amount_due ? Number(form.amount_due) : null,
				history: editing ? history : shipment.history
			};
			const res = await fetch(`/api/admin/shipments/${trackingNumber}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
			if (res.ok) {
				const data = await res.json();
				shipment = { ...shipment, ...data.shipment };
				editing = false;
				saved = true;
				setTimeout(() => saved = false, 3000);
			}
		} catch (e) { console.error(e); }
		finally { saving = false; }
	}

	function autoResize(e: Event) {
		const el = e.target as HTMLTextAreaElement;
		el.style.height = 'auto';
		el.style.height = el.scrollHeight + 'px';
	}

	function updateHistoryEvent(index: number, field: string, value: string) {
		history[index] = { ...history[index], [field]: value };
	}

	function removeHistoryEvent(index: number) {
		history = history.filter((_: any, i: number) => i !== index);
	}

	function addHistoryEvent() {
		if (!newEvent.event.trim()) return;
		history = [{ event: newEvent.event, location: newEvent.location, timestamp: newEvent.timestamp || new Date().toISOString() }, ...history];
		newEvent = { event: '', location: '', timestamp: '' };
		addingEvent = false;
	}

	async function deleteShipment() {
		if (!confirm('Delete this shipment permanently?')) return;
		deleting = true;
		try {
			const res = await fetch(`/api/admin/shipments/${trackingNumber}`, { method: 'DELETE' });
			if (res.ok) goto('/admin/shipments');
		} catch (e) { console.error(e); }
		finally { deleting = false; }
	}

	const statusOptions = ['Pending', 'Picked Up', 'In Transit', 'At Destination', 'Out for Delivery', 'Delivered'];
	function statusIndex(s: string) { return Math.max(0, statusOptions.findIndex(x => x.toLowerCase() === s?.toLowerCase())); }
</script>

<svelte:head><title>{trackingNumber} | SwiftPort Admin</title></svelte:head>

<a href="/admin/shipments" class="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-navy mb-8">
	<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
	Back to Shipments
</a>

{#if loading}
	<div class="flex h-64 items-center justify-center">
		<div class="h-8 w-8 animate-spin rounded-full border-4 border-border border-t-navy"></div>
	</div>
{:else if notFound}
	<div class="py-20 text-center">
		<p class="text-lg font-bold text-navy">Shipment not found</p>
		<p class="mt-2 text-sm text-muted">{trackingNumber} does not exist.</p>
	</div>
{:else if shipment}

	<div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
		<div>
			<p class="text-xs font-semibold text-muted uppercase tracking-wider">Tracking Number</p>
			<p class="mt-1 text-2xl font-bold text-navy" style="font-family: var(--font-display);">{shipment.tracking_number}</p>
		</div>
		<div class="flex items-center gap-3">
			{#if saved}
				<span class="text-sm font-semibold text-success">Saved</span>
			{/if}
			{#if editing}
				<button onclick={() => { editing = false; resetForm(); }} class="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted hover:text-navy">Cancel</button>
				<button onclick={save} disabled={saving} class="rounded-lg bg-navy px-5 py-2 text-sm font-semibold text-white hover:bg-navy-dark disabled:opacity-50">
					{saving ? 'Saving...' : 'Save Changes'}
				</button>
			{:else}
				<button onclick={async () => { editing = true; await tick(); document.querySelectorAll('textarea').forEach(t => { t.style.height = 'auto'; t.style.height = t.scrollHeight + 'px'; }); }} class="rounded-lg border border-border px-4 py-2 text-sm font-medium text-navy hover:bg-surface">
					Edit Shipment
				</button>
				<button onclick={deleteShipment} disabled={deleting} class="rounded-lg border border-error/30 px-4 py-2 text-sm font-medium text-error hover:bg-error/5 disabled:opacity-50">
					Delete
				</button>
			{/if}
		</div>
	</div>

	<div class="space-y-6">

		{#if editing}
			<div class="rounded-xl border border-amber/30 bg-amber/5 p-4">
				<p class="text-sm font-medium text-amber">Editing mode — changes will be saved to the database.</p>
			</div>
		{/if}

		<div class="rounded-xl border border-border bg-white p-6">
			<div class="flex flex-col items-center gap-6 md:flex-row md:justify-between">
				<div class="text-center md:text-left">
					<p class="text-xs font-semibold text-muted uppercase tracking-wider">From</p>
					{#if editing}
						<input bind:value={form.origin} class="mt-1.5 w-full rounded-lg border border-border bg-white px-3 py-2 text-lg font-semibold text-navy focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none md:w-64" />
					{:else}
						<p class="mt-1.5 text-lg font-semibold text-navy">{shipment.origin || '—'}</p>
					{/if}
				</div>
				<div class="flex items-center gap-3 text-muted">
					<div class="h-px w-10 bg-border md:w-16"></div>
					<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
					<div class="h-px w-10 bg-border md:w-16"></div>
				</div>
				<div class="text-center md:text-right">
					<p class="text-xs font-semibold text-muted uppercase tracking-wider">To</p>
					{#if editing}
						<input bind:value={form.destination} class="mt-1.5 w-full rounded-lg border border-border bg-white px-3 py-2 text-lg font-semibold text-navy focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none md:w-64" />
					{:else}
						<p class="mt-1.5 text-lg font-semibold text-navy">{shipment.destination || '—'}</p>
					{/if}
				</div>
			</div>
		</div>

		<div class="rounded-xl border border-border bg-white p-6">
			<h3 class="text-sm font-semibold text-muted uppercase tracking-wider mb-5">Progress</h3>

			<div class="md:hidden space-y-0">
				{#each statusOptions as step, i}
					{@const active = i <= statusIndex(editing ? form.status : shipment.status)}
					{@const current = i === statusIndex(editing ? form.status : shipment.status)}
					<div class="flex gap-4">
						<div class="flex flex-col items-center">
							<div class="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 {current ? 'border-navy bg-navy text-white shadow-md' : active ? 'border-navy bg-navy/10 text-navy' : 'border-border bg-white text-muted/40'}">
								{#if active}
									<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>
								{:else}
									<span class="text-xs font-bold">{i + 1}</span>
								{/if}
							</div>
							{#if i < statusOptions.length - 1}
								<div class="mt-1 h-6 w-0.5 {active ? 'bg-navy' : 'bg-border'}"></div>
							{/if}
						</div>
						<div class="pt-1.5 pb-2">
							<p class="text-sm font-semibold {current ? 'text-navy' : active ? 'text-navy/70' : 'text-muted/50'}">{step}</p>
						</div>
					</div>
				{/each}
			</div>

			<div class="relative mt-2 hidden md:block">
				<div class="absolute top-5 left-0 h-1 w-full rounded-full bg-surface">
					<div class="h-full rounded-full bg-navy transition-all duration-700" style="width: {(statusIndex(editing ? form.status : shipment.status) / 5) * 100}%"></div>
				</div>
				<div class="relative flex justify-between">
					{#each statusOptions as step, i}
						{@const active = i <= statusIndex(editing ? form.status : shipment.status)}
						{@const current = i === statusIndex(editing ? form.status : shipment.status)}
						<div class="flex flex-col items-center" style="width: 16.66%">
							<div class="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all {current ? 'border-navy bg-navy text-white scale-110 shadow-lg' : active ? 'border-navy bg-navy/10 text-navy' : 'border-border bg-white text-muted/40'}">
								{#if active}
									<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>
								{:else}
									<span class="text-xs font-bold">{i + 1}</span>
								{/if}
							</div>
							<p class="mt-2 text-center text-[11px] font-medium leading-tight text-muted max-w-[60px]">{step}</p>
						</div>
					{/each}
				</div>
			</div>

			{#if editing}
				<div class="mt-6 border-t border-border pt-5">
					<label class="text-xs font-semibold text-muted uppercase tracking-wider">Update Status</label>
					<select bind:value={form.status} class="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm font-medium text-navy focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none">
						{#each statusOptions as opt}
							<option value={opt}>{opt}</option>
						{/each}
					</select>
				</div>
			{/if}
		</div>

		<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
			<div class="rounded-xl border border-border bg-white p-6">
				<h3 class="text-sm font-semibold text-muted mb-4">Sender</h3>
				{#if editing}
					<input bind:value={form.sender_name} class="w-full rounded-lg border border-border bg-white px-3 py-2 text-base font-semibold text-navy focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none" placeholder="Sender name" />
				{:else}
					<p class="text-base font-semibold text-navy">{shipment.sender_name || '—'}</p>
				{/if}
			</div>
			<div class="rounded-xl border border-border bg-white p-6">
				<h3 class="text-sm font-semibold text-muted mb-4">Receiver</h3>
				<div class="space-y-3">
					{#if editing}
						<input bind:value={form.receiver_name} class="w-full rounded-lg border border-border bg-white px-3 py-2 text-base font-semibold text-navy focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none" placeholder="Receiver name" />
						<input bind:value={form.receiver_email} class="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-navy focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none" placeholder="Email" />
						<input bind:value={form.receiver_phone} class="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-navy focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none" placeholder="Phone" />
					{:else}
						<p class="text-base font-semibold text-navy">{shipment.receiver_name || '—'}</p>
						<p class="text-sm text-muted">{shipment.receiver_email || ''}</p>
						<p class="text-sm text-muted">{shipment.receiver_phone || ''}</p>
					{/if}
				</div>
			</div>
		</div>

		<div class="rounded-xl border border-border bg-white p-6">
			<h3 class="text-sm font-semibold text-muted mb-4">Package</h3>
			<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
				<div>
					<p class="text-xs text-muted">Contents</p>
					{#if editing}
						<textarea
							value={form.package_contents}
							oninput={(e) => { form.package_contents = (e.target as HTMLTextAreaElement).value; autoResize(e); }}
							rows="1"
							class="mt-1 w-full resize-none overflow-hidden rounded-lg border border-border bg-white px-3 py-2 text-sm font-medium text-navy focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none"
							placeholder="Enter package contents"
						></textarea>
					{:else}
						<p class="mt-1 text-sm font-medium text-navy whitespace-pre-line">{shipment.package_contents || '—'}</p>
					{/if}
				</div>
				<div>
					<p class="text-xs text-muted">Weight (lbs)</p>
					{#if editing}
						<input type="number" bind:value={form.weight} class="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm font-medium text-navy focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none" />
					{:else}
						<p class="mt-1 text-sm font-medium text-navy">{shipment.weight || '—'}{shipment.weight ? ' lbs' : ''}</p>
					{/if}
				</div>
				<div>
					<p class="text-xs text-muted">Amount Due</p>
					{#if editing}
						<input type="number" bind:value={form.amount_due} class="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-lg font-bold text-navy focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none" />
					{:else}
						<p class="mt-1 text-lg font-bold text-navy">{shipment.amount_due ? '$' + shipment.amount_due : '—'}</p>
					{/if}
				</div>
				<div>
					<p class="text-xs text-muted">Current Location</p>
					{#if editing}
						<input bind:value={form.current_location} class="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm font-medium text-navy focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none" />
					{:else}
						<p class="mt-1 text-sm font-medium text-navy">{shipment.current_location || '—'}</p>
					{/if}
				</div>
			</div>
			{#if editing}
				<div class="mt-5 grid grid-cols-1 gap-5 border-t border-border pt-5 sm:grid-cols-2">
					<div>
						<label class="text-xs text-muted">Payment Status</label>
						<select bind:value={form.payment_status} class="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm font-medium text-navy focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none">
							<option value="">—</option>
							<option value="Unpaid">Unpaid</option>
							<option value="Paid">Paid</option>
						</select>
					</div>
					<div>
						<label class="text-xs text-muted">Payment Reason</label>
						<input bind:value={form.payment_reason} class="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm font-medium text-navy focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none" />
					</div>
				</div>
			{/if}
		</div>

		<div class="rounded-xl border border-border bg-white p-6">
			<div class="flex items-center justify-between mb-5">
				<h3 class="text-sm font-semibold text-muted uppercase tracking-wider">History</h3>
				{#if editing}
					<button onclick={() => addingEvent = !addingEvent} class="rounded-lg bg-surface px-3 py-1.5 text-xs font-semibold text-navy hover:bg-border">
						{addingEvent ? 'Cancel' : '+ Add Event'}
					</button>
				{/if}
			</div>

			{#if editing && addingEvent}
				<div class="mb-5 rounded-lg border border-border bg-surface p-4">
					<p class="text-xs font-semibold text-muted mb-3">New History Event</p>
					<div class="grid grid-cols-1 gap-3">
						<input bind:value={newEvent.event} class="rounded-lg border border-border bg-white px-3 py-2 text-sm text-navy placeholder-muted/60 focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none" placeholder="Event description (required)" />
						<input bind:value={newEvent.location} class="rounded-lg border border-border bg-white px-3 py-2 text-sm text-navy placeholder-muted/60 focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none" placeholder="Location (optional)" />
						<DateTimePicker bind:value={newEvent.timestamp} label="Timestamp" />
					</div>
					<button onclick={addHistoryEvent} disabled={!newEvent.event.trim()} class="mt-3 rounded-lg bg-navy px-4 py-2 text-xs font-semibold text-white hover:bg-navy-dark disabled:opacity-40">Add Event</button>
				</div>
			{/if}

			<div class="space-y-0">
				{#each history as item, i}
					<div class="flex gap-4">
						<div class="flex flex-col items-center">
							<div class="h-2.5 w-2.5 rounded-full {i === 0 ? 'bg-navy' : 'bg-border'}"></div>
							{#if i < history.length - 1}<div class="mt-1 h-full w-px bg-border"></div>{/if}
						</div>
						<div class="flex-1 pb-5">
							{#if editing}
								<div class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
									<input
										value={item.event}
										oninput={(e) => updateHistoryEvent(i, 'event', (e.target as HTMLInputElement).value)}
										class="rounded-lg border border-border bg-white px-3 py-1.5 text-sm font-medium text-navy focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none"
										placeholder="Event"
									/>
									<input
										value={item.location || ''}
										oninput={(e) => updateHistoryEvent(i, 'location', (e.target as HTMLInputElement).value)}
										class="rounded-lg border border-border bg-white px-3 py-1.5 text-sm text-navy placeholder-muted/60 focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none"
										placeholder="Location"
									/>
									<DateTimePicker bind:value={item.timestamp} label="" />
									<button onclick={() => removeHistoryEvent(i)} class="shrink-0 rounded-lg p-1.5 text-error/60 hover:bg-error/10 hover:text-error self-start mt-5">
										<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
									</button>
								</div>
							{:else}
								<p class="text-sm font-medium text-navy">{item.event}</p>
								{#if item.location}<p class="mt-0.5 text-xs text-muted">{item.location}</p>{/if}
								<p class="mt-0.5 text-xs text-muted/60">{new Date(item.timestamp).toLocaleString()}</p>
							{/if}
						</div>
					</div>
				{:else}
					<p class="text-sm text-muted text-center py-6">No history events yet.</p>
				{/each}
			</div>
		</div>

	</div>
{/if}
