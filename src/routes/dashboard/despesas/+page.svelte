<script lang="ts">
    import Navbar from "../components/navbar.svelte";
    import Resume from "./components/resume.svelte";
    import type { PageData } from "./$types";
    export let data: PageData;
</script>

<section>
    {#if (data.user)}
        <Navbar data={data} />
        <Resume data={data} />
    {/if}
</section>