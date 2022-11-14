<template>
    <div class="books-page container">
        <h2>Вибери книгу</h2>
        <books-list :books="list"/>
    </div>
</template>

<script>
import BooksList from '@/components/BooksList.vue';
import store from '@/store'

export default {

    components:BooksList,
    computed: {
        list() {
            return store.getters.getBookList;
        }
    },
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 40px;
  color:#ffffff;
  margin-bottom: 30px;
}
</style>