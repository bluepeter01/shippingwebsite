let showModal = $state(false);

export function openShipModal() {
	showModal = true;
}

export function closeShipModal() {
	showModal = false;
}

export function getShipModalState() {
	return {
		get open() {
			return showModal;
		},
		set open(v) {
			showModal = v;
		}
	};
}
