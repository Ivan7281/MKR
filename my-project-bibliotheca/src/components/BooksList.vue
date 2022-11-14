<template>
    <div class="book-list">
        <book-card class="book-card"
        v-for="book in books"
        :key="book.id"
        :book="book"
        />
    </div>
</template>

<script>
import BookCard from './BookCard.vue';

export default {
    name: 'BooksList',

    props: {
        BookListData: {
            type: Array,
            default: () => []
        }
    },

    components: { BookCard },
}
</script>

<style lang="scss" scoped>
.book-card {
    margin-bottom: 40px;
}
</style>