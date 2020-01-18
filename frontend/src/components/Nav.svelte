<script>
	export let segment;
</script>

<style>
	
</style>

<nav class="navbar">
	<ul class="navbar-menu">
		<li class="navbar-item"><a class:selected='{segment === undefined}' href='.'>home</a></li>
		<li class="navbar-item"><a class:selected='{segment === "about"}' href='about'>about</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li class="navbar-item"><a rel=prefetch class:selected='{segment === "blog"}' href='blog'>blog</a></li>
	</ul>
</nav>
