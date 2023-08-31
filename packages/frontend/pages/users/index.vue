<script setup>
definePageMeta({
    layout: 'default',
});
</script>

<template>
    <!--
    <NuxtLayout :name="layout">
        <template #header>
            <h1>Usuarios</h1>
        </template>
    </NuxtLayout>
    -->

    <div>
        <h2>{{ $t('domain.users.title') }}</h2>
        <ul>
            <li>
                <NuxtLink to="/users/register">{{ $t('domain.users.register') }}</NuxtLink> detalle para el registro
            </li>
        </ul>
    </div>
</template>
