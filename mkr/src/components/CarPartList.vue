<template>
    <div>
        <div>
            <CarPartCard
            v-for="carPart in CarPartData"
            :key="carPart.id"
            :title="carPart.title"
            :model="carPart.model"
            :age="carPart.age"
            />
        </div>
    </div>
</template>

<script>
import CarPartCard from './CarPartCard.vue';

export default {
    name: 'CarPartList',

components: CarPartCard,

props: {
    CarPartData: { 
        type: Array,
        default: () => [],
    },
}
}
</script>

<style scoped>
.list-container {
  display: flex;
}
</style>