<script lang="ts">
    import { goto } from "$app/navigation";
    import type { DefaultData } from "../Services/Types";
    import Layout from "./layout.svelte";
	export let form: DefaultData;
</script>

<section>
	<Layout>
		<h3>Fazer login</h3>
		<hr class="mb-4">
		<form method="post">
			<div class="mb-3">
				<label for="email">E-mail</label>
				<input type="email" name="email" id="email" class="form-control" required>
			</div>
			<div class="mb-3">
				<label for="password">Senha</label>
				<input type="password" name="password" id="password" class="form-control" required>
			</div>
			<div class="row justify-content-center text-center">
				<div class="col-4 me-3">
					<div class="row">
						<button type="button" on:click={() => goto('/register')} class="btn btn-secondary">Cadastrar</button>
					</div>
				</div>
				<div class="col-4">
					<div class="row">
						<button type="submit" class="btn btn-primary">Fazer login</button>
					</div>
				</div>
			</div>
		</form>
		<div class="mt-3">
			{#if form}
				{#if !(form.success)}
					<div class="alert alert-danger">
						{form.message}
					</div>
				{/if}
			{/if}
		</div>
	</Layout>
</section>
