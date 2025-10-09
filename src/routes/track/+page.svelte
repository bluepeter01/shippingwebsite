<script lang="ts">
	import { onMount } from 'svelte';
	let trackCode: string = ''; // The tracking code input by the user
	let trackingInfo: any = null; // Stores the tracking information once fetched
	let errorMsg: string | boolean = false; // Shows error message when tracking code is invalid

	// Function to fetch tracking data from the backend
	async function handleTrack(event: Event) {
		event.preventDefault(); // Prevents page refresh on form submission

		errorMsg = false; // Reset error message
		trackingInfo = null; // Reset tracking information

		// Check if the tracking code is empty
		if (!trackCode) {
			errorMsg = 'Tracking code is required'; // Show error if no code is entered
			return;
		}

		try {
			console.log('Sending request to API with tracking code:', trackCode);

			// Call the API endpoint to fetch tracking info
			const response = await fetch(`/api/track/${trackCode}`);

			if (response.ok) {
				// If the request was successful, parse and set the tracking data
				const data = await response.json();
				trackingInfo = data;
				console.log('Tracking data received:', data);
			} else {
				// Handle any errors from the API
				const errorData = await response.json();
				console.error('API Error:', errorData);
				errorMsg = errorData.error || 'Tracking code not found';
			}
		} catch (err) {
			console.error('Error fetching tracking data:', err);
			errorMsg = 'Failed to fetch tracking data'; // Show error if the fetch request fails
		}
	}
</script>

<!-- UI for Tracking Input and Display -->
<div class="mt-25 flex flex-col justify-center p-4 md:items-center">
	<h3 class="text-center text-4xl font-bold text-blue-500">Track & Trace</h3>

	<!-- Form for entering tracking number -->
	<form onsubmit={handleTrack} class="mt-2 items-center px-4 md:flex md:space-x-3">
		<fieldset class="fieldset">
			<legend class="fieldset-legend">Enter your Tracking number</legend>
			<input
				type="text"
				bind:value={trackCode}
				class="input focus h-12 w-full p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none md:w-[400px]"
				placeholder="Type here"
				required
			/>
		</fieldset>

		<button
			type="submit"
			class="btn mt-2 bg-blue-500 p-6 text-white transition-transform duration-300 hover:scale-105 md:mt-7"
		>
			Track
		</button>
	</form>

	<!-- Error message when tracking code is invalid -->
	{#if errorMsg}
		<div role="alert" class="alert alert-error mt-6">
			<span>{errorMsg}</span>
		</div>
	{/if}

	<!-- Display tracking information once fetched -->
	{#if trackingInfo}
		<div class="mt-18">
			<div class="mt-4 rounded bg-white p-4 shadow">
				<h2 class="mb-2 text-xl font-bold text-blue-600">Shipment Details</h2>
				<p><strong>Status:</strong> {trackingInfo.status}</p>
				<p><strong>Current Location:</strong> {trackingInfo.current_location}</p>
				<p>
					<strong>Estimated Delivery:</strong>
					{new Date(trackingInfo.estimated_delivery).toLocaleDateString()}
				</p>

				<div class="mt-4">
					<h3 class="text-lg font-semibold">Tracking History</h3>
					<ul class="mt-2 space-y-2">
						{#each trackingInfo.history as item (item.timestamp)}
							<li class="border-l-4 border-blue-500 pl-3">
								<span class="text-gray-600">{new Date(item.timestamp).toLocaleString()}</span> — {item.event}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	{/if}
</div>
