<template>
    <div>
        <Navbar />
    </div>
    <div class="shadow-2xl px-6 py-3">
        <div class="flex gap-3">
            <img src="src/photos/user.png" alt="" class="rounded-lg">
            <div>
                <h2 class="font-bold text-3xl">Abu Usman | My Leaves</h2>
                <p class=" text-[20px] text-gray-400">{{ userDescription }}</p>
            </div>
        </div>
    </div>

    <!-- Start card here -->

    <div class="card-body">
        <div class="bg-gray-100 pt-10 pb-72 px-12">
            <div class="bg-white rounded-lg shadow-2xl py-6 px-6">
                <div class="grid grid-cols-12">
                    <div class="col-span-3 text-center">
                        <h2 class="text-2xl font-bold ">0</h2>
                        <p class="font-light text-sm ">Last Year 0</p>
                    </div>
                    <div class="col-span-3 text-center">
                        <h2 class="text-2xl font-bold ">0</h2>
                        <p class="font-light text-sm text-gray-400">EARNED</p>
                    </div>
                    <div class="col-span-3 text-center">
                        <h2 class="text-2xl font-bold ">0</h2>
                        <p class="font-light text-sm">AVAILED</p>
                    </div>
                    <div class="col-span-3 text-center">
                        <h2 class="text-2xl font-bold ">0</h2>
                        <p class="font-light text-sm">BALANCE</p>
                    </div>
                </div>

                <!-- Table code start here -->
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full">
                                    <thead class="bg-white border-2">
                                        <tr>
                                            <th scope="col"
                                                class="text-md font-bold text-gray-900 px-6 py-3 text-left border">
                                                No.
                                            </th>
                                            <th scope="col"
                                                class="text-md font-bold text-gray-900 px-6 py-3 text-left border">
                                                Date
                                            </th>
                                            <th scope="col"
                                                class="text-md font-bold text-gray-900 px-6 py-3 text-left border">
                                                Leave Type
                                            </th>
                                            <th scope="col"
                                                class="text-md font-bold text-gray-900 px-6 py-3 text-left border">
                                                Approved On
                                            </th>
                                        </tr>
                                    </thead>

                                </table>
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
<script >
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
    components: {
        Navbar, 
        Footer
    },
    data() {
        return {
            userDescription: '2023-07-17 00:00:00 | Duration : 0 Year 0 Month 30 Day'
        }
    }
}
</script>
<style scoped></style>