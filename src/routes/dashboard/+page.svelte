<script lang="ts">
    import ResumeRepository from '../../Repository/ResumeRepository';
    import type { IResumeResponse } from '../../Services/Types';
    import resumeStore from '../../Store/ResumeStore';
    import type { PageData } from './$types';
    import Navbar from './components/navbar.svelte';
    import { page } from "$app/stores";
    import SearchParams from '../../Class/SearchParams';
    import Icon from 'svelte-icons-pack/Icon.svelte';
    //@ts-ignore
    import FaSolidChartLine from 'svelte-icons-pack/fa/FaSolidChartLine';

    export let data: PageData;

    let resume: (IResumeResponse | null) = null;
    resumeStore.subscribe((data) => {resume = data});

    const date = new Date();

    (async function() {
        const tomorrow = new Date(date);
        const initDate = new Date(date);
        initDate.setDate(1);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const formData = new FormData();
        formData.append('start_date', SearchParams.get($page, 'start_date') ?? initDate.toISOString().substring(0, 10));
        formData.append('end_date', SearchParams.get($page, 'end_date') ?? tomorrow.toISOString().substring(0, 10));
        if(data.token) {
            resumeStore.set(await ResumeRepository.get(formData, data.token));
        }
    })();


    function formatDate(payload: string): string {
        const [year, month, day] = payload.split("-");
        const currentDate = `${day}/${month}/${year}`;
        return currentDate;
    }

    function getDaysDiff() {
        const payload = resume!.data!.payload!;
        return parseInt(payload.start_date.split('-')[2]) - parseInt(payload.end_date.split('-')[2]);
    }
    
</script>

<section>
    {#if (data.user)}
        <Navbar data={data} />
        <div class="container" style="height:100vh; display:flex; flex-direction:column; justify-content: center;">
            {#if resume}
                {#if (resume.success && resume.data)}
                    <h1>Resumo de {formatDate(resume.data.payload.start_date)} até {formatDate(resume.data.payload.end_date)}, ({getDaysDiff()} dia/s)</h1>
                    <br>
                    <table class="table table-hover table-striped table-bordered resume-table">
                        <tr>
                            <th>#</th>
                            <th>Salário</th>
                            <th>Receita</th>
                            <th>Despesa</th>
                            <th>Saldo</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td>$ {resume.data.salary}</td>
                            <td class="min-table">
                                <div class="resume">
                                    <li>
                                        <b>Quantidade</b>
                                        {resume.data.revenues.quantity}
                                    </li>
                                    <li>
                                        <b>Média</b>
                                        $ {resume.data.revenues.average}
                                    </li>
                                    <li>
                                        <b>Total</b>
                                        $ {resume.data.revenues.total}
                                    </li>
                                </div>
                            </td>
                            <td class="min-table">
                                <div class="resume">
                                    <li>
                                        <b>Quantidade</b>
                                        {resume.data.expenses.quantity}
                                    </li>
                                    <li>
                                        <b>Média</b>
                                        $ {resume.data.expenses.average}
                                    </li>
                                    <li>
                                        <b>Total</b>
                                        $ {resume.data.expenses.total}
                                    </li>
                                </div>
                            </td>
                            <td>
                                $ {resume.data.balance}
                            </td>
                            <td>
                                {#if (resume.data.status == 'positivo')}
                                    <span class="badge bg-success">
                                        <Icon src={FaSolidChartLine} color="#fff"/>
                                        &nbsp;
                                        <i class="fa-regular fa-chart-line-up"></i>
                                        {resume.data.status}
                                    </span>
                                {:else}
                                    <span class="badge bg-danger">
                                        <span style="rotate: 180deg; display: inline-block;">
                                            <Icon src={FaSolidChartLine} color="#fff" />
                                        </span>
                                        &nbsp;
                                        <i class="fa-regular fa-chart-line-up"></i>
                                        {resume.data.status}
                                    </span>
                                {/if}
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
    .resume-table td, .resume-table th{
        border: 1px solid #dee2e6a6!important;
        padding: 5px 1rem;
    }

    .resume-table tr:hover > td {
        background-color: #f9f9f9;
    }

    .resume-table li {
        padding:0;
        padding-right: 2rem;
        list-style: none;
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .resume-table .resume li:nth-child(2) {
        padding-left: 2rem;
        border-right: 1px solid #dee2e6a6!important;
        border-left: 1px solid #dee2e6a6!important;
    }

    .resume-table .resume {
        padding: 0;
        display: flex;
        justify-content: center;
        gap: 22px;
    }

    td.min-table {
        /* max-width: 240px; */
    }
</style>