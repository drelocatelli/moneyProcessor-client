<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
  import ResumeRepository from "../../../Repository/ResumeRepository";
    import resumeStore from "../../../Store/ResumeStore";

  const props = $$props;
  const {token, user} = props.data;

  async function handleSubmit(e: SubmitEvent) {
    const formData = new FormData(e.target  as HTMLFormElement);
    resumeStore.set(await ResumeRepository.get(formData, token));
    $page.url.searchParams.set('start_date', formData.get('start_date') as string);
    $page.url.searchParams.set('end_date', formData.get('end_date') as string);
    goto(`?${$page.url.searchParams.toString()}`);
  }
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/dashboard">Money Processor</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/dashboard">Resumo</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
            </ul>
        </li>
        </ul>
        <form on:submit|preventDefault={handleSubmit} action="post" class="d-flex date-form menu__flexible" role="search">
            <label for="start_date">Data inicial:</label>
            <input type="date" name="start_date" id="start_date" class="form-control" required>

            <label for="end_date">Data final:</label>
            <input type="date" name="end_date" id="end_date" class="form-control" required>

            <button type="submit" class="btn btn-secondary ms-2">Consultar</button>
        </form>
        <ul class="navbar-nav ms-5 mb-lg-0 menu__flexible">
            <li class="nav-item">
              {user.data.name}
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Sair</a>
            </li>
        </ul>
      </div>
    </div>
  </nav>

  <style>
    label {
        white-space:pre;
        margin:0 10px;
        margin-right: 5px;
    }

    .menu__flexible {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
  </style>