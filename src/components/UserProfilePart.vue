<template>
   <div class="shadow-2xl px-6 py-3">
        <div class="flex gap-3">
            <img src="src/photos/user.png" alt="" class="rounded-lg">
            <div>
                <h2 class="font-bold text-3xl">Abu Usman</h2>
                <p class=" text-[20px] text-gray-400">{{ userDescription }}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            userDescription: String
        },
        data(){
            return{
                
            }
        }
    }
</script>