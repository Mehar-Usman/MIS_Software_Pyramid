<template>
    <div>
    <Navbar/>    
    </div>
    <div>
        <UserProfilePart :user-description="userDescription"/>
    </div>
    <div class="flex justify-center bg-gray-100">
        <div class="rounded-lg bg-white shadow-2xl inline-block  min-w-[600px] mt-20 mb-52 p-6">
            <div class="mb-4">
                <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                <input type="date" id="username" class="mt-2 p-2 border rounded-md w-full">
            </div>
            <div class="">
                <label for="select" class="block text-sm font-medium text-gray-700 mb-2">Select an option:</label>
                <select id="select" class="mt-1 w-full p-2 border rounded-md">
                    <option class="capitalize " value="option1" >Work Form Home</option>
                    <option value="option2">Hour Break</option>
                    <option value="option3">Short Break</option>
                    <option value="option4">Half Break</option>
                    <option value="option5">Full Day</option>
                </select>
            </div>
            <div class="flex justify-center pt-10">
                <button class="text-white text-[22px] font-bold bg-blue-600 rounded-full py-2 px-20 font-sans">Save</button>
            </div>
        </div>
    </div>
    <div>
        <Footer/>
    </div>
</template>
<script >
import UserProfilePart from '../components/UserProfilePart.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
    components:{
    Navbar,
    UserProfilePart,
    Footer
},
    data(){
        return{
            userDescription : 'Date of Joining : 2023-07-17 00:00:00 | Months :',
        }
    }
}
</script>