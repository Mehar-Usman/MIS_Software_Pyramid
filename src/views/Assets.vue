<template>
  <div>
    <Navbar/>
  </div>
  <div class="bg-white py-3 px-3 shadow-2xl">
        <h2 class="text-3xl font-bold ">Assets in your use</h2>
  </div>
   <!-- Start card here -->

   <div class="card-body">
        <div class="bg-gray-100 pt-6 pb-[350px] px-12">
            <div class="bg-white rounded-lg shadow-2xl py-6 px-6">
                

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
                                                S.No
                                            </th>
                                            <th scope="col"
                                                class="text-md font-bold text-gray-900 px-6 py-3 text-left border">
                                                Name
                                            </th>
                                            <th scope="col"
                                                class="text-md font-bold text-gray-900 px-6 py-3 text-left border">
                                                Brand
                                            </th>
                                            <th scope="col"
                                                class="text-md font-bold text-gray-900 px-6 py-3 text-left border">
                                                Model
                                            </th>
                                            <th scope="col"
                                                class="text-md font-bold text-gray-900 px-6 py-3 text-left border">
                                                Configration
                                            </th>
                                            <th scope="col"
                                                class="text-md font-bold text-gray-900 px-6 py-3 text-left border">
                                                Purchase Cost 
                                            </th>
                                            <th scope="col"
                                                class="text-md font-bold text-gray-900 px-6 py-3 text-left border">
                                                Assigned
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
<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
    export default {
        components:{
            Navbar,Footer
        },
        data(){
            return{

            }
        }
    }
</script>