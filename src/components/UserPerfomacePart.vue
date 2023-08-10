<template>
    <div>
        <UserProfilePart :userDescription="userDescription"/>
    </div>
    <!-- Create a table for my work vlog  -->
    <div class="bg-gray-300 px-10">
        <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 lg:col-span-6 pt-12">
                <div class="bg-white shadow-2xl rounded-md ">
                    <h4 class="py-4 px-4">My Work Log</h4>
                    <hr>
                    <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="overflow-hidden p-4">
                                    <table class="min-w-full border-2 ">
                                        <thead class="bg-white border-b">
                                            <tr>
                                                <th scope="col"  colspan="2"
                                                    class="cursor-pointer w-2/6 border-l border-2 text-sm font-medium text-gray-900 px-6  text-left py-3">
                                                    <span class="text-blue-600 text-[16px] ">July</span> <span>|</span> <span class="font-bold text-[17px] text-blue-600">August</span>
                                                </th>
                                                <th scope="col" colspan="2"
                                                    class="text-center text-sm font-medium text-gray-900 px-6 py-3 text-[16px]">
                                                    Hours
                                                </th>
                                             
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class=" border-2 ">
                                                <td class="px-6 py-3 whitespace-nowrap text-sm  text-[16px] text-gray-900 border-r-2">Date
                                                </td>
                                                <td class="px-6 py-3 whitespace-nowrap text-sm  text-[16px] text-gray-900 border-r-2">Project
                                                </td>
                                                <td class="px-6 py-3 whitespace-nowrap text-sm  text-[16px] text-gray-900 border-r-2">Worked	
                                                </td>
                                                <td class="px-6 py-3 whitespace-nowrap text-sm  text-[16px] text-gray-900 border-r-2">Billable	
                                                </td>
                                                <td class="px-6 py-3 whitespace-nowrap text-sm  text-[16px] text-gray-900 border-r-2">Non-billable
                                                </td>
                                            </tr>
                                            <tr class="bg-gray-100 border-2 ">
                                                <td colspan="2" class="px-6 py-3 whitespace-nowrap  font-bold  text-[16px] text-gray-900 border-r-2">Total
                                                </td>
                                                <td class="px-6 py-3 whitespace-nowrap  font-bold  text-[16px] text-gray-900 border-r-2">0
                                                </td>
                                                <td class="px-6 py-3 whitespace-nowrap  font-bold  text-[16px] text-gray-900 border-r-2">0	
                                                </td>
                                                <td class="px-6 py-3 whitespace-nowrap  font-bold  text-[16px] text-gray-900 border-r-2">0	
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  <div class="col-span-6 pt-6">
                <div>
                    <h2 class="font-bold text-sm">YOUR LEAVES</h2>
                </div>
                <div class="card-body pt-2">
                    <div class="bg-white shadow-2xl py-4 px-10 rounded-md">
                        <div class="flex">
                            <div class="px-6 py-2 border-r">
                            <h2 class="text-center text-2xl font-bold">0</h2>
                            <h3 class="text-gray-400 font-semibold">QUOTA</h3>
                        </div>
                        <div class="px-6 py-2 border-r">
                            <h2 class="text-center text-2xl font-bold">0.00</h2>
                            <h3 class="text-gray-400 font-semibold">LAST YEAR</h3>
                        </div>
                        <div class="px-6 py-2 border-r">
                            <h2 class="text-center text-2xl font-bold">0</h2>
                            <h3 class="text-gray-400 font-semibold">EARNED</h3>
                        </div>
                        <div class="px-6 py-2 border-r">
                            <h2 class="text-center text-2xl font-bold">0</h2>
                            <h3 class="text-gray-400 font-semibold">AVILED</h3>
                        </div>
                        <div class="px-6 py-2">
                            <h2 class="text-center text-2xl font-bold">0</h2>
                            <h3 class="text-gray-400 font-semibold">BALANCE</h3>
                        </div>
                        </div>
                    <div class="pt-4 flex justify-center">
                        <button @click="applyLeaves" class="bg-blue-600 text-white font-bold py-2 px-2 rounded flex ">Apply leave</button>
                    </div>
                    </div>
                </div>
                <div class="pt-6">
                <p class="font-semibold ">Last month perfomance</p> 
                </div>
                <div class="card-body pt-4">
                    <div class="bg-white shadow-2xl py-4 px-10 rounded-md">
                        <div class="flex justify-evenly">
                            <div class="px-6 py-2">
                            <h2 class="text-center text-2xl font-bold">160 Hours</h2>
                            <h3 class="text-gray-400 font-semibold">Expected</h3>
                        </div>
                        <div class="border"></div>
                        <div class="px-6 py-2 ">
                            <h2 class="text-center text-2xl font-bold">160 Hours</h2>
                            <h3 class="text-gray-400 font-semibold">Worked</h3>
                        </div>
                        </div>
                    <div class="pt-4 flex justify-center">
                        Performance 100%
                    </div>
                    </div>
                </div>
                <!-- Team bithday calender -->

                <!-- Loop through the table data and display the child component -->
        <div class="pt-8">
            <div class="bg-white rounded pt-4 pb-10 shadow-2xl"> 
                    <h3 class="font-semibold text-md px-6">Team Birthdays Calendar</h3>
                    <hr class="mt-4">
                    <div class="px-6">
                    <hr class=" mt-6">     
                </div>
                <Table
                    v-for="(item, index) in tableData"
                    :key="index"
                    :date="item.date"
                    :name="item.name"
                    :isBold="index === 0"
                />
           </div>
       </div>
       <div class="py-8">
            <div class="bg-white rounded pt-4 pb-10 shadow-2xl"> 
                    <h3 class="font-semibold text-lg px-6">Holidays Calendar</h3>
                    <hr class="mt-4">
                    <div class="px-6">
                    <hr class=" mt-6">     
                </div>
                <Table2
                    v-for="(item, index) in tableDataTwo"
                    :key="index"
                    :date="item.date"
                    :day="item.day"
                    :name="item.name"
                    :isBold="index === 0"
                    :isAquamarine="index === 10 "
                />
           </div>
       </div>
    </div>
  </div>
</div>
<div class="shadow-2xl ">
    <Footer/>
</div>
</template>
<script >

import Table from '../components/Table.vue';
import Table2 from '../components/Table2.vue';
import Footer from '../components/Footer.vue';
import UserProfilePart from './UserProfilePart.vue';

    export default {
        components:{
    Table,
    Table2,
    Footer,
    UserProfilePart
},
        data(){
            return{
                userDescription:'17-Jul-2023 | Duration : 0 Year 0 Month 22 Day',
                // first table data
                tableData:[
                    {
                        date:'Date',
                        name:'Name'     
                    },
                    {
                        date:'Aug 28',
                        name:'	Abdul Nasir shah'
                    },
                    {
                        date:'Aug 13',
                        name:'Samra Abbas'
                    },
                    {
                        date:'Aug 23',
                        name:'Zubair Aisf'
                    },
                    {
                        date:'Sep 05',
                        name:'Saleha Shahid'
                    },
                ],
                tableDataTwo:[
                    {
                        date:'Date',
                        day:'Day',
                        name:'Name'
                    },
                    {
                        date:'Mar 23',		
                        day:'Thursday',
                        name:'Pakistan Day'
                    },
                    {
                        date:'Apr 21',		
                        day:'Friday',  		
                        name:'Eid-ul-fiter'
                    },
                    {
                        date:'Apr 24',				
                        day:'Monday',
                        name:'Eid-ul-fiter'
                    },
                    {
                        date:'Apr 25',		
                        day:'Tuesday',
                        name:'Eid-ul-fiter'
                    },
                    {
                        date:'May 01',			
                        day:'Monday',
                        name:'Labour Day'
                    },
                    {
                        date:'Jun 28',			
                        day:'Wednesday',
                        name:'Eid-ul-Azha	'
                    },
                    {
                        date:'Jun 29',		
                        day:'Thursday',
                        name:'Eid-ul-Azha'
                    },
                    {
                        date:'Jun 30		',		
                        day:'Friday',
                        name:'Eid-ul-Azha'
                    },
                    {
                        date:'Jul 28',		
                        day:'Ashura',
                        name:'Friday'
                    },
                    // Change Bg of This Index
                    {
                        date:'Aug 14',		
                        day:'Monday',
                        name:'Independence Day'
                    },
                    {
                        date:'Sep 28',		
                        day:'Thursday',
                        name:'Milad un-Nabi'
                    },
                    {
                        date:'Nov 09',		
                        day:'Thursday',
                        name:'IQBAL DAY'
                    },
                    {
                        date:'Dec 25',		
                        day:'Monday',
                        name:'Quiad-e-Azam Day'
                    },
                ]
            }
        },
        methods:{
            applyLeaves(){
                this.$router.push('/applyLeave')
            }
        }
    }
</script>
<style scoped>
.set-bg {
    background-color: #cfcbcb;
    color: white;
}
</style>