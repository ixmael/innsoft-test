<script setup lang="ts">
import { APIResponseError } from '@inssoft/core/domain/users';

const email = ref('');
const username = ref('');
const sex = ref('');

const isSuccesfulCreated = ref<boolean>(false);
const isErrorOnCreation = ref<APIResponseError | null>(null);

const clear = () => {
    email.value = '';
    username.value = '';
    sex.value = '';
};

const handleSubmit = () => {
    isSuccesfulCreated.value = false;
    isErrorOnCreation.value = null;

    useAPICreateUser({
        email: email.value,
        username: username.value,
        sex: sex.value,
    })
        .then(_ => {
            isSuccesfulCreated.value = true;
        })
        .catch(err => {
            isErrorOnCreation.value = {
                code: err.code,
                message: err.message,
            } as APIResponseError;
        });
};
</script>

<template>
    <NuxtLayout name="default">
        <template #header>
            <h1>{{ $t('domain.users.addNewUser') }}</h1>
        </template>

        <div>
            <form @submit.prevent="handleSubmit">
                <div class="mb-3 row">
                    <label for="username" class="col-sm-2 col-form-label">{{ $t('glossary.email') }}</label>
                    <div class="col-sm-10">
                        <input id="email" class="form-control" type="text" :value="email"
                            @input="event => email = event.target.value">
                    </div>
                </div>

                <div class="mb-3 row">
                    <label for="username" class="col-sm-2 col-form-label">{{ $t('glossary.username') }}</label>
                    <div class="col-sm-10">
                        <input id="username" class="form-control" type="text" :value="username"
                            @input="event => username = event.target.value">
                    </div>
                </div>

                <div class="form-check">
                    <label for="username" class="col-sm-2 col-form-label">{{ $t('glossary.sex') }}</label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="female" value="female" v-model="sex" />
                        <label for="female">{{ $t('glossary.female') }}</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" id="male" value="male" v-model="sex" />
                        <label for="male">{{ $t('glossary.male') }}</label>
                    </div>
                </div>

                <button type="button" class="btn btn-light" @click="clear">
                    {{ $t('glossary.clear') }}
                </button>

                <button type="submit" class="btn btn-primary">
                    {{ $t('glossary.register') }}
                </button>

                <div v-if="isSuccesfulCreated">
                    {{ $t('domain.users.succesfulCreated') }}
                </div>

                <div v-if="isErrorOnCreation">
                    {{ $t(`domain.users.errorsOnCreation.${isErrorOnCreation.code}`) }}
                </div>
            </form>
        </div>
    </NuxtLayout>
</template>
