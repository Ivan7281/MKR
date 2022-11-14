<template>
    <div>
        <div >
            {{ title }}
        </div>
        <div>
            {{ model }}
        </div>
        <div>
            {{ age }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarPartCard',

    props: {
        title: {
            type: String,
            default: 'No title'
        },
        model:{
            type: String,
            default: '0000000'
        },
        age: {
            type: Number,
            default: 2022
        },

    }
}
</script>

<style scoped>
</style>