<script lang="ts">
	import { fly } from 'svelte/transition';
	import Accordion from '$lib/Accordion.svelte';
	import { track } from '$lib/variable.svelte';
	import { onMount } from 'svelte';

	let trackCode: any = $state('');
	let errorMsg = $state(false);

	onMount(() => {
		// Check if trackCode is already in localStorage
		const stored = localStorage.getItem('trackCode');

		if (stored) {
			trackCode = stored;
		} else {
			trackCode = track.trackCode;
			localStorage.setItem('trackCode', trackCode);
		}

		setTimeout(() => {
			if (trackCode == 2000) {
				errorMsg = true;
			}
		}, 1000);

		setTimeout(() => {
			errorMsg = false;
		}, 4000);
	});

	function handleTrack() {
		if (trackCode == 2000) {
			errorMsg = true;
		}

		setTimeout(() => {
			errorMsg = false;
		}, 4000);
	}
</script>

<div class="mt-25 flex flex-col justify-center p-4 md:items-center">
	<h3 class="text-center text-4xl font-bold text-blue-500">Track & Trace</h3>

	<form action="" class="mt-2 items-center px-4 md:flex md:space-x-3">
		<fieldset class="fieldset">
			<legend class="fieldset-legend">Enter your Tracking number</legend>
			<input
				type="text"
				value={trackCode}
				class="input focus h-12 w-full p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none md:w-[400px]"
				placeholder="Type here"
				required
			/>
			<!-- <p class="label">Optional</p> -->
		</fieldset>

		<button
			type="submit"
			onclick={handleTrack}
			class="btn mt-2 bg-blue-500 p-6 text-white transition-transform duration-300 hover:scale-105 md:mt-7"
		>
			Track
		</button>
	</form>

	{#if errorMsg == true}
		<div role="alert" class="alert alert-error mt-6" transition:fly={{ x: -200, duration: 500 }}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 shrink-0 stroke-current"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<span>Error! Tracking code not found.</span>
		</div>
	{/if}

	<div class="mt-18">
		<Accordion />
	</div>
</div>
