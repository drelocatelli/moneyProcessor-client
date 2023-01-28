<script lang="ts">
    import type { PageData } from './$types';
    import Navbar from './components/navbar.svelte';

    export let data: PageData;

    console.log(data)
</script>

<section>
    <Navbar />
</section>