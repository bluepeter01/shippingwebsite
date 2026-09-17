<script lang="ts">
	import { onMount } from 'svelte';

	let stats = $state({ total: 0, pending: 0, inTransit: 0, delivered: 0, unpaid: 0 });
	let shipments = $state<any[]>([]);
	let loading = $state(true);
	let searchQuery = $state('');
	let statusFilter = $state('all');

	onMount(async () => {
		try {
			const res = await fetch('/api/admin/shipments');
			const data = await res.json();
			stats = data.stats;
			shipments = data.shipments;
		} catch (e) {
			console.error('Failed to load shipments:', e);
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

	const kpis = $derived([
		{ label: 'Total', value: stats.total, accent: '#0B1F33' },
		{ label: 'Pending', value: stats.pending, accent: '#FFB800' },
		{ label: 'In Transit', value: stats.inTransit, accent: '#1261A0' },
		{ label: 'Delivered', value: stats.delivered, accent: '#16A34A' },
		{ label: 'Unpaid', value: stats.unpaid, accent: '#DC2626' }
	]);

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
	<title>Dashboard | SwiftPort Admin</title>
</svelte:head>

{#if loading}
	<div class="flex h-64 items-center justify-center">
		<div class="h-8 w-8 animate-spin rounded-full border-4 border-border border-t-navy"></div>
	</div>
{:else}
	<div class="space-y-6">

		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
			{#each kpis as kpi}
				<div class="rounded-xl border border-border bg-white p-5">
					<p class="text-xs font-semibold text-muted">{kpi.label}</p>
					<p class="mt-2 text-3xl font-bold text-navy" style="font-family: var(--font-display);">{kpi.value}</p>
					<div class="mt-3 h-1 w-full rounded-full bg-surface">
						<div class="h-full rounded-full" style="background: {kpi.accent}; width: {stats.total > 0 ? (kpi.value / stats.total) * 100 : 0}%"></div>
					</div>
				</div>
			{/each}
		</div>

		<div class="rounded-xl border border-border bg-white">
			<div class="flex flex-col gap-4 border-b border-border px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
				<h2 class="text-base font-bold text-navy">Recent Shipments</h2>
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

			<div class="overflow-x-auto rounded-b-xl">
				<table class="w-full text-left text-sm">
					<thead>
						<tr class="border-b border-border bg-[#FAFBFC]">
							<th class="px-6 py-3 text-[11px] font-semibold uppercase tracking-wider text-muted/60">Tracking</th>
							<th class="px-6 py-3 text-[11px] font-semibold uppercase tracking-wider text-muted/60">Status</th>
							<th class="hidden px-6 py-3 text-[11px] font-semibold uppercase tracking-wider text-muted/60 md:table-cell">From</th>
							<th class="hidden px-6 py-3 text-[11px] font-semibold uppercase tracking-wider text-muted/60 md:table-cell">To</th>
							<th class="px-6 py-3 text-[11px] font-semibold uppercase tracking-wider text-muted/60">Payment</th>
							<th class="hidden px-6 py-3 text-[11px] font-semibold uppercase tracking-wider text-muted/60 sm:table-cell">Date</th>
						</tr>
					</thead>
					<tbody>
						{#each filtered as s}
							<tr class="border-b border-border/40 transition-colors hover:bg-[#F8FAFC]">
								<td class="whitespace-nowrap px-6 py-3">
									<a href="/admin/shipments/{s.tracking_number}" class="font-semibold text-navy hover:text-blue">{s.tracking_number}</a>
								</td>
								<td class="whitespace-nowrap px-6 py-3">
									<span class="font-semibold {statusColor(s.status)}">{s.status}</span>
								</td>
								<td class="hidden whitespace-nowrap px-6 py-3 text-muted md:table-cell">{s.origin || '—'}</td>
								<td class="hidden whitespace-nowrap px-6 py-3 text-muted md:table-cell">{s.destination || '—'}</td>
								<td class="whitespace-nowrap px-6 py-3">
									{#if s.payment_status}
										<span class="font-semibold {s.payment_status === 'Paid' ? 'text-success' : 'text-amber'}">{s.payment_status}</span>
									{:else}
										<span class="text-muted/40">—</span>
									{/if}
								</td>
								<td class="hidden whitespace-nowrap px-6 py-3 text-muted sm:table-cell">
									{s.created ? new Date(s.created).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '—'}
								</td>
							</tr>
						{:else}
							<tr>
								<td colspan="6" class="px-6 py-16 text-center text-sm text-muted">No shipments found.</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<div class="border-t border-border px-6 py-3 text-xs text-muted">
				{filtered.length} of {shipments.length} shipments
			</div>
		</div>

	</div>
{/if}
