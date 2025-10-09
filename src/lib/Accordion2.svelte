
<script lang="ts">
	export let trackingInfo: any;
</script>

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
