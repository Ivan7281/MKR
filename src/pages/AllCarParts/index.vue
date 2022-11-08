<template>
    <div>
        <p><H1>Вибери запчастини</H1></p>
      <CarPartList :car-part-data="listData"/>
    </div>
</template>
  
<script>
import CarPartList from '@/components/CarPartList.vue';
  
export default {
    name: 'AllCarParts',
  
    components: CarPartList ,
  
    data() {
      return {
        listData: [
      {
        id: 1,
        title: "car",
        model: "12-b",
        age: 1999,
      },
      {
        id: 2,
        title: "car",
        model: "12-b",
        age: 1999,
      },
      {
        id: 3,
        title: "car",
        model: "12-b",
        age: 1999,
      },
    ]
    }
    }
}
</script>
  