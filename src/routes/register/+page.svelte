<script lang="ts">
    import { goto } from "$app/navigation";
    import Layout from "../layout.svelte";
</script>

<section>
    <Layout>
        <h3>Registro</h3>
        <hr class="mb-4">
        <form method="post">
            <div class="mb-3">
                <label for="name">Nome</label>
                <input type="text" id="name" class="form-control" name="name" required>
            </div>
            <div class="mb-3">
                <label for="email">E-mail</label>
                <input type="email" name="email" id="email" class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="password">Senha</label>
                <input type="password" name="password" id="password" class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="password_confirmation">Repita a senha</label>
                <input type="password" name="password_confirmation" id="password_confirmation" class="form-control" required>
            </div>
            <div class="row justify-content-center text-center">
                <div class="col-4 me-3">
                    <div class="row">
                        <button type="button" on:click={() => goto('/')} class="btn btn-secondary">Fazer login</button>
                    </div>
                </div>
                <div class="col-4">
                    <div class="row">
                        <button type="submit" class="btn btn-primary">Cadastrar</button>
                    </div>
                </div>
            </div>
        </form>
    </Layout>
</section>