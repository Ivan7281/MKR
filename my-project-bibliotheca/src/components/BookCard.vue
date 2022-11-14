<template>
    <div class="book-card">
        <img src="book.img" alt="book.title">
        <p class="author">{{author}}</p>
        <p class="title">{{title}}</p>
        <router-link :to="{ name: 'BookPage', params: { id: book.id} }" class="more-info">
        Коротка інформація
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'BookCard',
    props: {
        book: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
.book-card {
    position: relative;
    img {
    object-fit: cover;
    border-radius: 10px;
    width: 660px;
    height: 400px;
}
.title {
    position: absolute;
    margin-bottom: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #ffffff;
    height: 100px;
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%);
    font-weight: 700;
    padding: 20px;
    font-size: 30px;
    border-radius: 0 0 10px 10px;
}
.author {
    position: absolute;
    right: 0;
    top: 0;
    background-color: #EB5804;
    width: 100px;
    height: 50px;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
    border-radius: 0 10px 0 10px;
    opacity: 0.8;

}
.more-info {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 30px;
    text-decoration: none;
    opacity: 0;
    transition: all 0.2s ease;
    &:hover, &:focus {
      opacity: 1;
    }
}
}
</style>
