<script lang="ts">
</script>

<div class="app" id="layout-1">
	<div class="container">
		<div class="col-md-4 m-auto div-center">
			<h1 class="text-center" style="margin-bottom: 5rem;">Money Processor</h1>
			<slot />
		</div>
	</div>
</div>

<style>
	.div-center {
		height:100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>