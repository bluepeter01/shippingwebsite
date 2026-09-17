<script lang="ts">
	import { onMount } from 'svelte';

	let shipments = $state<any[]>([]);
	let loading = $state(true);
	let searchQuery = $state('');
	let statusFilter = $state('all');

	onMount(async () => {
		try {
			const res = await fetch('/api/admin/shipments');
			const data = await res.json();
			shipments = data.shipments;
		} catch (e) {
			console.error(e);
		} finally {
			loading = false;
		}
	});

	let filtered = $derived(
		shipments.filter(s => {
			const q = searchQuery.toLowerCase();
			const matchSearch = !q ||
				s.tracking_number?.toLowerCase().includes(q) ||
				s.sender_name?.toLowerCase().includes(q) ||
				s.receiver_name?.toLowerCase().includes(q);
			const matchStatus = statusFilter === 'all' || s.status?.toLowerCase() === statusFilter;
			return matchSearch && matchStatus;
		})
	);

	function statusColor(s: string) {
		switch (s?.toLowerCase()) {
			case 'delivered': return 'text-success';
			case 'in transit': return 'text-blue';
			case 'pending': return 'text-amber';
			case 'picked up': return 'text-navy';
			default: return 'text-muted';
		}
	}
</script>

<svelte:head>
	<title>Shipments | SwiftPort Admin</title>
</svelte:head>

{#if loading}
	<div class="flex h-64 items-center justify-center">
		<div class="h-8 w-8 animate-spin rounded-full border-4 border-border border-t-navy"></div>
	</div>
{:else}
	<div class="space-y-5">

		<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<p class="text-sm text-muted">{shipments.length} total shipments</p>
			<div class="flex gap-3">
				<input
					type="text"
					bind:value={searchQuery}
					class="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-navy placeholder-muted/60 focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none sm:w-56"
					placeholder="Search..."
				/>
				<select bind:value={statusFilter} class="rounded-lg border border-border bg-white px-3 py-2 text-sm text-navy focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none">
					<option value="all">All Status</option>
					<option value="pending">Pending</option>
					<option value="picked up">Picked Up</option>
					<option value="in transit">In Transit</option>
					<option value="delivered">Delivered</option>
				</select>
			</div>
		</div>

		<div class="space-y-3">
			{#each filtered as s}
				<a href="/admin/shipments/{s.tracking_number}" class="group block rounded-xl border border-border bg-white transition-colors hover:border-navy/15">
					<div class="px-5 py-4">
						<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
							<div class="flex items-center gap-3">
								<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface">
									<svg class="h-5 w-5 text-navy/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
								</div>
								<div>
									<p class="text-sm font-bold text-navy group-hover:text-blue">{s.tracking_number}</p>
									<p class="text-xs text-muted">{s.sender_name || '—'} → {s.receiver_name || '—'}</p>
								</div>
							</div>
							<div class="flex items-center gap-4 pl-13 sm:pl-0">
								<span class="text-xs font-semibold {statusColor(s.status)}">{s.status}</span>
								{#if s.payment_status}
									<span class="text-xs font-semibold {s.payment_status === 'Paid' ? 'text-success' : 'text-amber'}">{s.payment_status}</span>
								{/if}
								{#if s.amount_due}
									<span class="text-sm font-bold text-navy">${s.amount_due}</span>
								{/if}
								<svg class="h-4 w-4 text-muted/30 transition-transform group-hover:translate-x-0.5 group-hover:text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
							</div>
						</div>
						<div class="mt-3 flex flex-wrap gap-x-5 gap-y-1 pl-13 text-xs text-muted sm:pl-13">
							<span>{s.origin || '—'}</span>
							<span>→</span>
							<span>{s.destination || '—'}</span>
							{#if s.weight}<span>{s.weight} lbs</span>{/if}
							<span>{s.created ? new Date(s.created).toLocaleDateString() : '—'}</span>
						</div>
					</div>
				</a>
			{:else}
				<div class="rounded-xl border border-border bg-white py-16 text-center text-sm text-muted">No shipments found.</div>
			{/each}
		</div>
	</div>
{/if}
