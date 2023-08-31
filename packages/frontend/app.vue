<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">
          Inssoft fullstack test
        </NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink to="/users">
                Usuarios
              </NuxtLink>
            </li>
          </ul>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
              data-bs-toggle="dropdown" aria-expanded="false">
              Language
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#" @click="$i18n.setLocale('es')">Español</a></li>
              <li><a class="dropdown-item" href="#" @click="$i18n.setLocale('en')">English</a></li>
            </ul>
          </div>
        </div>
      </div>

    </nav>
    <NuxtLayout class="layouts">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
