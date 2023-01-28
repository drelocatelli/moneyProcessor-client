<script lang="ts">
    import type { PageData } from "../../$types";

    export let data: PageData;

    console.log(data)
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
            <a class="nav-link active" aria-current="page" href="/dashboard">Home</a>
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
        <form class="d-flex date-form" role="search">
            <label for="start_date">Data inicial:</label>
            <input type="date" name="name" id="start_date" class="form-control">

            <label for="end_date">Data final:</label>
            <input type="date" name="name" id="end_date" class="form-control">

            <button type="submit" class="btn btn-secondary ms-2">Consultar</button>
        </form>
        <ul class="navbar-nav ms-5 mb-lg-0">
            <li class="nav-item">
                <!-- {data.user?.data.name}, -->
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

    form.date-form {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
  </style>