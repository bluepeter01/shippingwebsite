<script>
	import '../app.css';
	import Footer from './Footer.svelte';
	import NavBar from './NavBar.svelte';

	let { children } = $props();
</script>

<div class="">
<NavBar/>

	{@render children()}
	<Footer/>
</div>
