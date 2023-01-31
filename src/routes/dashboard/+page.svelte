<script lang="ts">
    import type { PageData } from './$types';
    import Navbar from './components/navbar.svelte';
    import Resume from './components/resume.svelte';
    
    export let data: PageData;
</script>

<section>
    {#if (data.user)}
        <Navbar data={data} />
        <Resume data={data} />
    {/if}
</section>

