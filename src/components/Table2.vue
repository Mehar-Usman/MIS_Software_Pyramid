<template>
    <!-- Dynamic Table code    -->
    <div class="card-body">
        <div class="grid grid-cols-12 py-2 px-6 " :style="{ 'background-color': isAquamarine ? 'aquamarine' :'' ,'margin' : isAquamarine ? '0px 22px 0px 22px' : '' }">
        <p class="col-span-4 " 
            :class="{ 'font-bold ': isBold, 'font-semibold , tracking-wider': !isBold }"  >
            {{ date }}
        </p>
            <p class="col-span-4"
             :class="{ 'font-bold': isBold, 'font-semibold , tracking-wider': !isBold }">
             {{ day }}
        </p>
            <p class="col-span-4 "
             :class="{ 'font-bold': isBold, 'font-semibold , tracking-wider': !isBold }">
             {{ name }}
        </p>
        </div>
        <div class="px-6">
            <hr>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        date: String,
        day: String,
        name: String,
        isBold: Boolean,
        isAquamarine:Boolean
    },
    data() {
        return {

        }
    }
}
</script>
<style scoped></style>