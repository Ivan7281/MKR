<template>
  <div class="book-page">
    <div class="container" v-if="book">
      <h1>{{ book.title }}</h1>
      <img
        :src="book.img"
        :alt="book.title"
      >
      <div class="section">
        <p class="section-title">Сюжет:</p>
        <p class="section-description">{{ book.description }}</p>
      </div>
      <div class="section">
        <p class="section-title">Автор:</p>
        <p class="section-description">{{ book.author }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import books from '@/mocks/books';

export default {
  created() {
    const book = books.find(book => book.id == this.$route.params.id)
    if (book) {
      this.book = book
    }
  }
}
</script>

<style lang="scss" scoped>
.book-page {
  padding-bottom: 100px;
  .back {
    color: #ffffff;
    margin-left: 30px;
    margin-top: 30px;
  }
  h1 {
    color: #ffffff;
    margin-bottom: 30px;
    padding-bottom: 15px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      background: linear-gradient(90deg, #EB5804 0%, rgba(0,0,0,0) 90%);
    }
  }
  img {
    object-fit: cover;
    border-radius: 10px;
    width: 1160px;
    height: 600px;
    margin-bottom: 30px;
  }
  .section {
    &__title {
      color: #EB5804;
      font-weight: 700;
      font-size: 25px;
      margin-bottom: 10px;
    }
    &__description {
      color: #ffffff;
      font-size: 18px;
      line-height: 30px;
    }
  }
}
</style>