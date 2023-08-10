<template>
<!-- Dynamic Table code    -->
<div class="card-body">
        <div class="grid grid-cols-12 py-2 px-6">
            <p class="col-span-5 "  :class="{ 'font-bold ': isBold, 'font-semibold , tracking-wider' : !isBold }">{{ date }}</p>
            <p class="col-span-7 "  :class="{ 'font-bold': isBold, 'font-semibold , tracking-wider': !isBold }">{{ name }}</p>
        </div>
        <div class="px-6">
            <hr >
        </div>
</div>

</template>
<script>
    export default{
        props: {
        date: String,
        name: String,
        isBold:Boolean,
    },
        data(){
            return{
            
            }
        }
    }
</script>
<style scoped>

</style>