<template>
    <div>
        <Navbar/>   
    </div>
    <div>
        <UserProfilePart :user-description="userDescription" />
    </div>
    <div class="bg-gray-100 pt-12 px-8 pb-72">
        <div>
            <div class="bg-white shadow-2xl rounded-lg px-3 pt-3 pb-5">
             <table class="min-w-full border-collapse border  ...">
                <thead>
                        <tr>
                        <th class="border text-[15px] font-semibold px-2 py-2  ...">Month</th>
                        <th class="border text-[15px] font-semibold px-2 py-2  ...">Days</th>
                        <th class="border text-[15px] font-semibold px-2 py-2  ...">Hours</th>
                        <th class="border text-[15px] font-semibold px-2 py-2  ...">Gross Pay</th>
                        <th class="border text-[15px] font-semibold px-2 py-2  ...">Hourly Rate</th>
                        <th class="border text-[15px] font-semibold px-2 py-2  ...">Additions</th>
                        <th class="border text-[15px] font-semibold px-2 py-2  ...">Deductions</th>
                        <th class="border text-[15px] font-semibold px-2 py-2  ..."><span class="text-blue-400">PF</span>Deduction</th>
                        <th class="border text-[15px] font-semibold px-2 py-2  ...">Tax</th>
                        <th class="border text-[15px] font-semibold px-2 py-2  ...">EOBI</th>
                        <th class="border text-[15px] font-semibold px-2 py-2  ...">Net Paid</th>
                        <th class="border text-[15px] font-semibold px-2 py-2  ...">Action</th>
                        </tr>
                </thead>
                <tbody>
                    <tr class="bg-gray-100">
                        <td class="border py-2 px-2 ...">Jul, 23</td>
                        <td class="border py-2 px-2 ...">20/20</td>	
                        <td class="border py-2 px-2 ...">160.00 / 160</td>
                        <td class="border py-2 px-2 ...">1.00</td>
                        <td class="border py-2 px-2 ...">0.00</td>
                        <td class="border py-2 px-2 ...">0.00</td>
                        <td class="border py-2 px-2 ...">0.00</td>
                        <td class="border py-2 px-2 ...">0.00</td>
                        <td class="border py-2 px-2 ...">0.00</td>
                        <td class="border py-2 px-2 ...">Tue,</td>
                        <td class="border py-2 px-2 ...">Tue, 01 Aug</td>
                        <td @click="createAction" class="border py-2 px-2 ..." >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-blue-500">
                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                            </svg>
                        </td>
                    </tr>   
                    <tr class="hover:bg-gray-100">
                        <td class="border py-2 px-2 text-end ..." colspan="8">You have earned so far: </td>
                        <td class="border py-2 px-2 ...">Rs 1.00</td>
                        <td class="border py-2 px-2 ..."></td>
                        <td class="border py-2 px-2 ..."></td>
                    </tr>
                </tbody>
            </table>

            </div>
        </div>
    </div>
    <div>
        <Footer/>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import UserProfilePart from '../components/UserProfilePart.vue';
import Footer from '../components/Footer.vue';

    export default {
            components:{
                    Navbar,
                    UserProfilePart,
                    Footer
                    },
                    data(){
                    return{
                        userDescription:'2023-07-17 00:00:00 | Duration : 0 Year 0 Month 23 Day',        
                    }
                }
            }
</script>