<script lang="ts">
    import ResumeRepository from '../../Repository/ResumeRepository';
    import type { IResumeResponse } from '../../Services/Types';
    import resumeStore from '../../Store/ResumeStore';
    import type { PageData } from './$types';
    import Navbar from './components/navbar.svelte';
    import moment from 'moment';
    import { page } from "$app/stores";
    import SearchParams from '../../Class/SearchParams';

    export let data: PageData;

    let resume: (IResumeResponse | null) = null;
    resumeStore.subscribe((data) => {resume = data});

    const date = new Date();

    (async function() {
        const tomorrow = new Date(date);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const formData = new FormData();
        formData.append('start_date', SearchParams.get($page, 'start_date') ?? date.toISOString().substring(0, 10));
        formData.append('end_date', SearchParams.get($page, 'end_date') ?? tomorrow.toISOString().substring(0, 10));
        if(data.token) {
            resumeStore.set(await ResumeRepository.get(formData, data.token));
        }
    })();


    function formatDate(payload: string): string[] {
        const [year, month, day] = payload.split("-");
        const currentDate = `${day}/${month}/${year}`;
        const timeCount = moment(currentDate).diff(moment(date), 'days').toString();
        return [moment(currentDate).format('L'), timeCount];
    }
    
</script>

<section>
    {#if (data.user)}
        <Navbar data={data} />
        <div class="container" style="height:100vh; display:flex; flex-direction:column; justify-content: center;">
            {#if resume}
                {#if (resume.success && resume.data)}
                    <h1>Resumo de {formatDate(resume.data.payload.start_date)[0]} até {formatDate(resume.data.payload.end_date)[0]}, ({formatDate(resume.data.payload.end_date)[1]} dia/s)</h1>
                    <br>
                    <table class="table table-striped table-bordered resume-table">
                        <tr>
                            <th>Salário</th>
                            <th>Receita</th>
                            <th>Despesa</th>
                            <th>Saldo</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>{resume.data.salary}</td>
                            <td>
                                <div class="resume">

                                    <li>
                                        <b>Quantidade</b>
                                        {resume.data.revenues.quantity}
                                    </li>
                                    <li>
                                        <b>Média</b>
                                        {resume.data.revenues.average}
                                    </li>
                                    <li>
                                        <b>Total</b>
                                        {resume.data.revenues.total}
                                    </li>
                                </div>
                            </td>
                            <td>
                                <div class="resume">
                                    <li>
                                        <b>Quantidade</b>
                                        {resume.data.expenses.quantity}
                                    </li>
                                    <li>
                                        <b>Média</b>
                                        {resume.data.expenses.average}
                                    </li>
                                    <li>
                                        <b>Total</b>
                                        {resume.data.expenses.total}
                                    </li>
                                </div>
                            </td>
                            <td>
                                {resume.data.balance}
                            </td>
                            <td>
                                {resume.data.status}
                            </td>
                        </tr>
                    </table>
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

<style>
    .resume-table li {
        padding:0;
        list-style: none;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
    }

    .resume-table .resume {
        display: flex;
        justify-content: space-between;
    }
</style>