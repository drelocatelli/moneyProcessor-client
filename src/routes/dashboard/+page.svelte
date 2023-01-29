<script lang="ts">
    import { get } from 'svelte/store';
    import type { IResumeResponse } from '../../Services/Types';
    import resumeStore from '../../Store/ResumeStore';
    import type { PageData } from './$types';
    import Navbar from './components/navbar.svelte';

    export let data: PageData;

    let resume: (IResumeResponse | null) = null;

    resumeStore.subscribe((data) => {resume = data});

    console.log(resume)
</script>

<section>
    {#if (data.user)}
        <Navbar data={data} />
        {resume?.data?.balance}
    {/if}
</section>