<script lang="ts">
    import Expenses from "../../../../Services/Expenses";
    import type { IItemsResponse } from "../../../../Services/Types";
    import despesaStore from "../../../../Store/DespesaStore";

    const props = $$props;
    const {data} = props;

    let items: (IItemsResponse | null) = null;
    despesaStore.subscribe((d) => {items = d});


    (async function() {
        despesaStore.set(await Expenses.index(data.token));
        
        console.log(items)

    })();

</script>

<section>
    <div class="container" style="height:100vh; display:flex; flex-direction:column; justify-content: center;">
        <h1>Despesas</h1>
        <br>

    </div>
</section>