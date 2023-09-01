<template>
    <NuxtLayout name="default">
        <template #header>
            <h1>{{ $t('domain.test.title') }}</h1>
        </template>

        <section>
            <p>{{ $t('domain.test.description.introduction') }}</p>
            <p>
                {{ $t('domain.test.description.content') }}
                <NuxtLink to="/users">
                    {{ $t('domain.test.description.users') }}
                </NuxtLink>.
            </p>
            <p>
                {{ $t('domain.test.description.conclusion') }}
                <a href="https://github.com/ixmael/innsoft-test">{{ $t('domain.test.description.repository') }}</a>.
            </p>
        </section>
    </NuxtLayout>
</template>

