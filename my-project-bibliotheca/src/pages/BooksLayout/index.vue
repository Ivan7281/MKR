<template>
    <div class="books-layout">
        <main-header/>
        <router-view></router-view>
    </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';

export default {
    components: { MainHeader }
}
</script>
    