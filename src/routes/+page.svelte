<script lang="ts">
	import Div1 from '$lib/Div1.svelte';
	import Div2 from '$lib/Div2.svelte';
	import { track } from '$lib/variable.svelte';
	import { onMount } from 'svelte';
	import Error from '../lib/Error.svelte';
	import { goto } from '$app/navigation';

	let trackCode = '';

	onMount(() => {
		// Check if trackCode is already in localStorage
		const stored = localStorage.getItem('trackCode');

		if (stored) {
			trackCode = stored;
		} else {
			trackCode = track.trackCode;
			localStorage.setItem('trackCode', trackCode);
		}
	});

	function handleSubmit(event: any) {
		event.preventDefault();
		localStorage.setItem('trackCode', trackCode);
		track.trackCode = trackCode; // if you want to sync it back
		setTimeout(() => {
			goto('/track');
		}, 500);
	}
</script>

<main>
	<div
		class="hero z-10 min-h-screen"
		style="background-image: url(/Gemini_Generated_Image_l3496wl3496wl349.png);"
	>
		<div class="hero-overlay"></div>
		<div class="hero-content text-neutral-content text-center">
			<div class="max-w-md">
				<fieldset class="fieldset">
					<title class="fieldset-legend p-1 text-3xl text-white md:text-4xl"
						>Track Your Shipment</title
					>

					<form action="submit" class="items-center justify-center gap-2 rounded-lg p-2 md:flex">
						<input
							type="text"
							bind:value={trackCode}
							class="h-17 w-full rounded-lg bg-white p-3 text-lg text-black focus:ring-2 focus:ring-indigo-500 focus:outline-none sm:w-fit"
							placeholder="Enter your tracking number"
							required
						/>

						<button
							type="submit"
							onclick={handleSubmit}
							class="mt-2 flex w-full cursor-pointer items-center justify-center rounded-b-lg bg-blue-500 p-5 text-lg text-white transition-transform duration-300 hover:scale-105 md:mt-0 md:rounded-lg"
							>Track</button
						>
					</form>
				</fieldset>
			</div>
		</div>
	</div>

	<div class="">
		<Div1 />
	</div>

	<div class="">
		<Div2 />
	</div>
</main>

<!-- <div
	class="fixed top-4 left-1/2 flex w-[300px] -translate-x-1/2 transform items-center justify-center text-center"
>
	<Error />
</div> -->
