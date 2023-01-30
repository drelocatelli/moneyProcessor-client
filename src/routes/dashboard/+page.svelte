<script lang="ts">
    import ResumeRepository from '../../Repository/ResumeRepository';
    import type { IResumeResponse } from '../../Services/Types';
    import resumeStore from '../../Store/ResumeStore';
    import type { PageData } from './$types';
    import Navbar from './components/navbar.svelte';

    export let data: PageData;

    let resume: (IResumeResponse | null) = null;
    resumeStore.subscribe((data) => {resume = data});

    const date = new Date();
    
    (async function() {
        const tomorrow = new Date(date);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const formData = new FormData();
        formData.append('start_date', date.toISOString().substring(0, 10));
        formData.append('end_date', tomorrow.toISOString().substring(0, 10));
        if(data.token) {
            resumeStore.set(await ResumeRepository.get(formData, data.token));
        }
    })();


    function formatDate(payload?: string) {
        if(payload) {
            const [year, month, day] = payload.split("-");
            return `${day}/${month}/${year}`;
        }

        return date.getFullYear();
    }
    
</script>

<section>
    {#if (data.user)}
        <Navbar data={data} />
        <div class="container" style="height:50vh; display:flex; flex-direction:column; justify-content: center;">
            {#if resume}
                {#if resume.success}
                    <h1>Resumo de {`${formatDate(resume?.data?.payload.start_date)} até ${formatDate(resume?.data?.payload.end_date)}`}</h1>
                    <br>
                    {console.log(resume)}
                    {resume?.success}
                {:else}
                    <h2>Não foi possível trazer resumo, tente novamente.</h2>
                    <p>
                        {resume.errors.message}
                    </p>
                {/if}
            {:else}
                <h2>Aguarde...</h2>
            {/if}
        </div>
    {/if}
</section>