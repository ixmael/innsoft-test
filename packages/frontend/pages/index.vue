<script setup>
definePageMeta({
    layout: 'default',
});
</script>



<template>
    <NuxtLayout name="default">
        <template #header>
            <h1>{{ $t('domain.test.title') }}</h1>
        </template>

        <section>
            <p v-for="text in $t('domain.test.description', { returnObjects: true })">
                {{ text }}
            </p>
        </section>
    </NuxtLayout>
</template>

