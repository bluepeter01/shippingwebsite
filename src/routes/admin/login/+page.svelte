<script lang="ts">
	let { form } = $props();
</script>

<svelte:head>
	<title>Admin Login | SwiftPort Logistics</title>
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4">
	<div class="w-full max-w-sm">
		<div class="text-center mb-8">
			<img src="/Gemini_Generated_Image_l3496wl3496wl349.png" alt="SwiftPort" class="mx-auto h-16 w-16 rounded-2xl object-cover" />
			<h1 class="mt-5 text-2xl font-bold text-navy" style="font-family: var(--font-display);">SwiftPort Admin</h1>
			<p class="mt-2 text-sm text-muted">Sign in to access the admin panel</p>
		</div>

		<div class="rounded-2xl border border-border bg-white p-8 shadow-sm">
			<form method="POST" class="space-y-5">
				<div>
					<label for="email" class="mb-2 block text-sm font-semibold text-navy">Email</label>
					<input
						id="email"
						name="email"
						type="email"
						class="input-field"
						placeholder="admin@swiftportlogistics.online"
						required
						autocomplete="email"
						value={form?.email ?? ''}
					/>
				</div>
				<div>
					<label for="password" class="mb-2 block text-sm font-semibold text-navy">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						class="input-field"
						placeholder="Enter your password"
						required
						autocomplete="current-password"
					/>
				</div>

				{#if form?.error}
					<div class="flex items-center gap-2 rounded-lg bg-error/10 px-4 py-3 text-sm font-medium text-error">
						<svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
						{form.error}
					</div>
				{/if}

				<button type="submit" class="btn-primary w-full py-3 text-sm">Sign In</button>
			</form>
		</div>

		<p class="mt-6 text-center text-xs text-muted">
			<a href="/" class="font-medium text-navy hover:text-blue">← Back to SwiftPort</a>
		</p>
	</div>
</div>
