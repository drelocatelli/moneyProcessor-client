<script lang="ts">
    import { page } from "$app/stores";
    import SearchParams from "../../../Class/SearchParams";

    const id = SearchParams.get($page, 'despesa');

    console.log(id)
    

</script>

<div class="modal fade" id="modal__despesa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
            {#if (id)}
                Editar despesa
            {:else}
                Adicionar nova despesa
            {/if}
        </h1>

        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <form method="post" action="?/createDespesa">
        <div class="modal-body">
            <div class="mb-3">
                <label for="title">Título</label>
                <input type="text" class="form-control" id="title" name="title">
            </div>
            <div class="mb-3">
                <label for="total">Valor (R$)</label>
                <input type="number" value="0" class="form-control" id="total" name="total" required>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="submit" class="btn btn-primary">Salvar alterações</button>
        </div>
    </form>
    </div>
    </div>
</div>