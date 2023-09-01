<template>
    <NuxtLayout name="default">
        <template #header>
            <h1>{{ $t('domain.users.title') }}</h1>
        </template>

        <div>
            <p></p>
            <ul>
                <li>
                    <NuxtLink to="/users/register">
                        {{ $t('domain.users.register') }}
                    </NuxtLink>:
                    {{ $t('domain.users.registerNewDetail') }}.
                </li>
            </ul>
        </div>
    </NuxtLayout>
</template>
