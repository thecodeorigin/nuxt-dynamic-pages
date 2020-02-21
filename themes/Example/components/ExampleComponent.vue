<template>
    <b-container fluid>
        <p class="text-secondary my-1">{{$t('home.introduction')}}</p>
        <b-button variant="warning" @click="$i18n.locale = 'vi'" v-if="$i18n.locale == 'en'">Change to Vietnamese</b-button>
        <b-button variant="warning" @click="$i18n.locale = 'en'" v-if="$i18n.locale == 'vi'">Đổi qua Tiếng Anh</b-button>
    </b-container>
</template>