<script lang="ts">
	let { value = $bindable(''), label = '' } = $props();
	let open = $state(false);

	const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	const now = value ? new Date(value) : new Date();

	let selMonth = $state(now.getMonth());
	let selDay = $state(now.getDate());
	let selYear = $state(now.getFullYear());
	let selHour = $state(now.getHours());
	let selMin = $state(now.getMinutes());

	$effect(() => {
		if (value) {
			const d = new Date(value);
			selMonth = d.getMonth();
			selDay = d.getDate();
			selYear = d.getFullYear();
			selHour = d.getHours();
			selMin = d.getMinutes();
		}
	});

	function daysInMonth(m: number, y: number) { return new Date(y, m + 1, 0).getDate(); }
	let maxDay = $derived(daysInMonth(selMonth, selYear));

	function apply() {
		if (selDay > maxDay) selDay = maxDay;
		const d = new Date(selYear, selMonth, selDay, selHour, selMin);
		value = d.toISOString();
		open = false;
	}

	function setToday() {
		const d = new Date();
		selMonth = d.getMonth();
		selDay = d.getDate();
		selYear = d.getFullYear();
		selHour = d.getHours();
		selMin = d.getMinutes();
	}

	function clear() { value = ''; open = false; }

	function displayText() {
		if (!value) return 'Not set';
		const d = new Date(value);
		return d.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
	}
</script>

<div class="relative">
	<label class="text-xs text-muted">{label}</label>
	<button
		type="button"
		onclick={() => open = !open}
		class="mt-1 flex w-full items-center justify-between rounded-lg border border-border bg-white px-3 py-2 text-sm text-left text-navy transition-colors hover:border-navy/30 focus:border-navy/30 focus:ring-1 focus:ring-navy/10 focus:outline-none"
	>
		<span class="{value ? '' : 'text-muted/60'}">{displayText()}</span>
		<svg class="h-4 w-4 shrink-0 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
	</button>

	{#if open}
		<div class="absolute top-full left-0 z-50 mt-1 w-72 rounded-xl border border-border bg-white p-4 shadow-xl">
			<div class="grid grid-cols-3 gap-2">
				<div>
					<p class="text-[10px] font-semibold uppercase text-muted/60 mb-1">Month</p>
					<select bind:value={selMonth} class="w-full rounded-lg border border-border bg-surface px-2 py-1.5 text-sm text-navy focus:outline-none">
						{#each months as m, i}<option value={i}>{m}</option>{/each}
					</select>
				</div>
				<div>
					<p class="text-[10px] font-semibold uppercase text-muted/60 mb-1">Day</p>
					<select bind:value={selDay} class="w-full rounded-lg border border-border bg-surface px-2 py-1.5 text-sm text-navy focus:outline-none">
						{#each Array(maxDay) as _, i}<option value={i + 1}>{i + 1}</option>{/each}
					</select>
				</div>
				<div>
					<p class="text-[10px] font-semibold uppercase text-muted/60 mb-1">Year</p>
					<select bind:value={selYear} class="w-full rounded-lg border border-border bg-surface px-2 py-1.5 text-sm text-navy focus:outline-none">
						{#each Array(11) as _, i}<option value={2020 + i}>{2020 + i}</option>{/each}
					</select>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-2 mt-3">
				<div>
					<p class="text-[10px] font-semibold uppercase text-muted/60 mb-1">Hour</p>
					<select bind:value={selHour} class="w-full rounded-lg border border-border bg-surface px-2 py-1.5 text-sm text-navy focus:outline-none">
						{#each Array(24) as _, i}<option value={i}>{String(i).padStart(2, '0')}</option>{/each}
					</select>
				</div>
				<div>
					<p class="text-[10px] font-semibold uppercase text-muted/60 mb-1">Minute</p>
					<select bind:value={selMin} class="w-full rounded-lg border border-border bg-surface px-2 py-1.5 text-sm text-navy focus:outline-none">
						{#each [0,5,10,15,20,25,30,35,40,45,50,55] as m}<option value={m}>{String(m).padStart(2, '0')}</option>{/each}
					</select>
				</div>
			</div>

			<div class="flex items-center justify-between mt-4 pt-3 border-t border-border">
				<div class="flex gap-2">
					<button type="button" onclick={setToday} class="rounded-lg px-3 py-1.5 text-xs font-medium text-muted hover:bg-surface hover:text-navy">Today</button>
					<button type="button" onclick={clear} class="rounded-lg px-3 py-1.5 text-xs font-medium text-muted hover:bg-surface hover:text-navy">Clear</button>
				</div>
				<button type="button" onclick={apply} class="rounded-lg bg-navy px-4 py-1.5 text-xs font-semibold text-white hover:bg-navy-dark">Done</button>
			</div>
		</div>
	{/if}
</div>

{#if open}
	<button class="fixed inset-0 z-40" onclick={() => open = false} aria-label="Close picker"></button>
{/if}
