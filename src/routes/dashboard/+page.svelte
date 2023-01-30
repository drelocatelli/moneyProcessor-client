<script lang="ts">
    import type { IResumeResponse } from '../../Services/Types';
    import resumeStore from '../../Store/ResumeStore';
    import type { PageData } from './$types';
    import Navbar from './components/navbar.svelte';

    export let data: PageData;

    let resume: (IResumeResponse | null) = null;
    resumeStore.subscribe((data) => {resume = data});
</script>

<section>
    {#if (data.user)}
        <Navbar data={data} />
        <div class="container" style="height:50vh; display:flex; flex-direction:column; justify-content: center;">
            {#if resume}
                <h1>Resumo de {resume?.data?.payload.start_date ?? new Date().getFullYear()}</h1>
                <br>
                {console.log(resume)}
                {resume?.success}
            {:else}
                <h2>Selecione uma data.</h2>
            {/if}
        </div>
    {/if}
</section>