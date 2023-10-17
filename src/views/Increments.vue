<template>
    <div>
        <Navbar />
    </div>
    <div>
        <UserProfilePart :user-description="userDescription" />
    </div>
    <div class="bg-gray-200">
        <div class="card-body px-10 pt-10 pb-16">
            <div class="bg-white rounded-md shadow-2xl px-4 py-6">
                <div class="flex gap-60 px-20">
                    <div class="text-center">
                        <h2 class="text-center text-2xl font-bold">1.00</h2>
                        <p class="text-gray-500 font-semibold text-sm">INITIAL PAY</p>
                    </div>
                    <div>
                        <h2 class="text-center text-2xl font-bold">0.00</h2>
                        <p class="text-gray-500 font-semibold text-sm">TOTAL INCREMENTS</p>
                    </div>
                    <div>
                        <h2 class="text-center text-2xl font-bold">1.00</h2>
                        <p class="text-gray-500 font-semibold text-sm">NET PAY</p>
                    </div>
                </div>
                <!-- Start Table code is here -->
                <div class="flex flex-col pt-4">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full border">
                                    <thead class="bg-white">
                                        <tr class="">
                                            <th scope="col" colspan="1"
                                                class="border  font-semibold text-gray-900 px-6 py-3 text-left">
                                                No.
                                            </th>
                                            <th scope="col" class="border  font-semibold text-gray-900 px-6 py-3 text-left">
                                                Increment Date
                                            </th>
                                            <th scope="col" class="border  font-semibold text-gray-900 px-6 py-3 text-left">
                                                Increment Amount
                                            </th>
                                            <th scope="col" class="border  font-semibold text-gray-900 px-6 py-3 text-left">
                                                Increment %
                                            </th>
                                            <th scope="col" class="border  font-semibold text-gray-900 px-6 py-3 text-left">
                                                New Pay
                                            </th>
                                            <th scope="col" class="border  font-semibold text-gray-900 px-6 py-3 text-left">
                                                Approved At
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                <!-- Start Percentage Code of increement here -->
                <div>
                    <div class=" rounded-md px-4 py-4 relative">
                        <div class="flex justify-center gap-3">
                            <div class="px-6 my-1 bg-green-600"></div>
                            <p>Increment</p>
                        </div>

                        <div class="flex mt-2">
                            <p class="text-[13px] ">1.0</p>
                            <div class="border min-w-full h-0 mt-2"></div>
                        </div>
                        <div class="flex mt-1 ">
                            <p class="text-[13px] ">0.8</p>
                            <div class="border min-w-full h-0 mt-2"></div>
                        </div>
                        <div class="flex mt-1 ">
                            <p class="text-[13px] ">0.6</p>
                            <div class="border min-w-full h-0 mt-2"></div>
                        </div>
                        <div class="flex mt-1 ">
                            <p class="text-[13px] ">0.4</p>
                            <div class="border min-w-full h-0 mt-2"></div>
                        </div>

                                <div class="flex mt-1 ">
                            <p class="text-[13px] ">0.2</p>
                            <div class="border min-w-full h-0 mt-2"></div>
                        </div>
                        <div class="flex mt-1 ">
                            <p class="text-[13px] g">0</p>
                            <div class="border-[0.1px] border-gray-400  min-w-full h-0 mt-2"></div>
                        </div>
                        <div class="flex mt-1 ">
                            <p class="text-[13px] ">-0.2</p>
                            <div class="border min-w-full h-0 mt-2"></div>
                        </div>
                        <div class="flex mt-1 ">
                            <p class="text-[13px] ">-0.4</p>
                            <div class="border min-w-full h-0 mt-2"></div>
                        </div>

                        <div class="flex mt-1 ">
                            <p class="text-[13px] ">-0.6</p>
                            <div class="border min-w-full h-0 mt-2"></div>
                        </div>
                        <div class="flex mt-1 ">
                            <p class="text-[13px] ">-0.8</p>
                            <div class="border min-w-full h-0 mt-2"></div>
                        </div>
                        <div class="flex mt-1 ">
                            <p class="text-[13px] ">-0.1</p>
                            <div class="border min-w-full h-0 mt-2"></div>
                        </div>
                        <div class="absolute bottom-6 left-12">
                          <hr class="w-[1px] h-60 bg-gray-300">
                        </div>
                    </div>
                </div>
            </div>
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
import Footer from '../components/Footer.vue'

export default {
    components: {
        Navbar,
        UserProfilePart,
        Footer
    },
    data() {
        return {
            userDescription: '17-Jul-2023 | Duration : 0 Year 0 Month 24 Day',
        }
    }
}
</script>