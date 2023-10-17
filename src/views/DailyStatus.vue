<template >
    <div :class="{ 'bg-opacity-100 bg-black': isPopupOpen }">
        <!-- call Mavbar Component -->
        <div>
            <Navbar />
        </div>
        <!-- When the fields is epmty then Show div -->
        
        <transition name="fade" mode="out-in">
      <div v-if="showEmptyFieldsMessage" class="bg-red-200 py-2 px-8">
        <ul class="list-disc">
          <li class="text-sm">Fields worklog.0.expected hours are required</li>
          <li class="text-sm">Fields worklog.0.ticket title are required</li>
          <li class="text-sm">Fields worklog.0.logged hour are required</li>
        </ul>
      </div>
    </transition>
        <!-- Daily Status Data Strat Here -->
        <div class="bg-white shadow-2xl px-4 py-4">
            <h2 class="font-bold text-2xl ">Daily Status</h2>
        </div>
        <div class="bg-gray-100 px-20 pt-10 pb-80">
            <div class="bg-white rounded-lg shdaow-2xl px-4 py-4">
                <transition name="fade" appear>
                    <div v-if="showDataSuccessfully"
                        class="bg-green-400 text-white py-2 px-2 my-2 setAnimation shadow-2xl rounded-md">
                        <h2 class="text-2xl font-bold">Add Status Data successfully</h2>
                    </div>
                </transition>
                <div class="grid grid-cols-12 gap-10">
                    <div class="col-span-4">
                        <label for="selectOptions" class="block font-light text-sm">Working Date*</label>
                        <input id="selectOptions"
                            class="bg-gray-300 mt-2 p-2 border hover:border outline-none rounded w-full" readonly
                            v-model="this.currentDate">
                    </div>
                    <div class="col-span-8 flex items-end justify-end">
                        <button @click="addMoreItems" class="bg-gray-500 text-white px-4 py-2 rounded">Add More</button>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 pt-6" v-for="(index, key) in storeStatusData" :key="index">
                    <div class="col-span-12">
                        <hr v-if="key != 0">
                    </div>
                    <div class="col-span-4">
                        <!-- Create hr for break the New Add New items Store -->

                        <label for="" class="text-sm block">Project*</label>

                        <select v-model="index.project" name="" id=""
                            class="min-w-full border border-gray-300 px-2 py-2 mt-2 rounded outline-none">
                            <option>Administration Department</option>
                            <option>Human Resource Department</option>
                            <option>Marketing Department</option>
                            <option>Sales Department</option>
                            <option>Accounts</option>
                            <option>Campus Cloud</option>
                            <option>MSPA</option>
                            <option>R20</option>
                            <option>Well Book</option>
                            <option>Raiseberry</option>
                            <option>Signly</option>
                            <option>Projection</option>
                            <option>We-Rule</option>
                            <option>Taco Twist</option>
                            <option>Cash Now</option>
                            <option>Free Time (No Work Assigned)</option>
                            <option>Learning &amp; Development</option>
                            <option>eSystem HR</option>
                            <option>Project Managment</option>
                            <option>Interviews/Meetings</option>
                            <option>Bonding Activity</option>
                            <option>Print &amp; Ship</option>
                            <option>Slooth</option>
                            <option>Varsiti Web APP</option>
                            <option>SHOPIFY PLUGIN SMS</option>
                            <option>Connect Now</option>
                            <option>Scoring System</option>
                            <option>Parent Pulse</option>
                            <option>SOFT PYRAMID WEB SITE</option>
                            <option>KW</option>
                            <option>Remax</option>
                            <option>MIS</option>
                            <option>Tempesta</option>
                            <option>Webkonsulenterne</option>
                            <option>Jobstream</option>
                            <option>Mastec EV</option>
                            <option>Charity Site WP</option>
                            <option>Deals For Weddings</option>
                            <option>Joda Publishing</option>
                            <option>Infinity Functional Performance</option>
                            <option>Krystal Anesthesia</option>
                            <option>Pacific Transcription</option>
                            <option>MGS</option>
                            <option>KWS</option>
                            <option>Safetymax</option>
                        </select>

                    </div>
                    <div class="col-span-4">
                        <label for="" class="block text-sm">Ticket Title*</label>
                        <input type="text" v-model="index.ticketTitle"
                            class="mt-2 outline-none py-[6px] px-2 min-w-full border rounded border-gray-300">
                    </div>
                    <div class="col-span-4">
                        <label for="" class="block text-sm">Ticket URL*</label>
                        <input type="text" v-model="index.ticketURL"
                            class="mt-2 outline-none py-[6px] px-2 min-w-full border rounded border-gray-300">
                    </div>
                    <div class="col-span-4">
                        <label for="" class="block text-sm">Expected Time*</label>
                        <input type="number" v-model="index.expectedTime"
                            class="mt-2 outline-none py-[6px] px-2 min-w-full border rounded border-gray-300">
                    </div>
                    <div class="col-span-4">
                        <label for="" class="block text-sm">Logged Time*</label>
                        <input type="number" v-model="index.loggedTime"
                            class="mt-2 outline-none py-[6px] px-2 min-w-full border rounded border-gray-300">
                    </div>
                    <div class="col-span-4 ">
                        <label for="" class="block text-sm">Description</label>
                        <div class="flex gap-6">
                            <textarea rows="2" v-model="index.description"
                                class="mt-2 outline-none py-[6px] px-2 w-72  border rounded border-gray-300"></textarea>
                            <div class="flex items-center">
                                <!-- Delete Items -->
                                <button class="bg-red-500 px-2 py-1 rounded-md " v-if="key != 0"
                                    @click="deleteItems(index)">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-6 h-6 text-white">
                                        <path fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end mt-4">
                    <button class="text-md text-white bg-blue-500 py-2 px-5  rounded font-semibold "
                        @click="isPopupOpen">Submit</button>
                </div>
                <!-- Popup code when the click on submit then Show -->
                <div v-if="showPopup"
                    class="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
                    <div class="bg-white px-[80px] py-6 rounded shadow-2xl zoom-out-animation">
                        <h1 class="text-[32px] set-font-bold text-center ">Are you sure?</h1>
                        <!-- Popup content -->
                        <div class="py-3">
                            <p class="tracking-wide text-lg">You will not be able to update or delete!</p>
                        </div>
                        <!-- Close button -->
                        <div class="flex justify-center gap-2 pt-5 ">
                            <button
                                class="font-bold py-[11px] px-5 text-md text-white bg-red-400 rounded-md outline outline-offset-2 outline-blue-600 outline-1"
                                type="button" @click="addData">Yes, I am Sure!</button>
                            <button @click="closePopup"
                                class="font-bold py-[11px] px-5     text-md text-white bg-gray-500 rounded-md outline-blue"
                                type="button">No Cancel It!</button>
                        </div>
                    </div>
                </div>
            </div>

            <!--  Data Store in this table row-->
            <div>
                <div class="card-body  py-10">
                    <div class="bg-white rounded-lg shadow-2xl px-4 py-4">
                        <h2 class="text-2xl font-bold ">Today Report</h2>
                        <div class="flex flex-col">
                            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">
                                        <table class="min-w-full border">
                                            <thead class="bg-white border-b">
                                                <tr>
                                                    <th scope="col"
                                                        class="text-sm border  text-gray-900 px-6 py-3 font-semibold text-left">
                                                        Date
                                                    </th>
                                                    <th scope="col"
                                                        class="text-sm border  text-gray-900 px-6 py-3 font-semibold text-left">
                                                        Project Name
                                                    </th>
                                                    <th scope="col"
                                                        class="text-sm border  text-gray-900 px-6 py-3 font-semibold text-left">
                                                        Ticket Title
                                                    </th>
                                                    <th scope="col"
                                                        class="text-sm border  text-gray-900 px-6 py-3 font-semibold text-left">
                                                        Description
                                                    </th>
                                                    <th scope="col"
                                                        class="text-sm border  text-gray-900 px-6 py-3 font-semibold text-left">
                                                        Expected Hours
                                                    </th>
                                                    <th scope="col"
                                                        class="text-sm border  text-gray-900 px-6 py-3 font-semibold text-left">
                                                        Logged Hours
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <!-- Add data when the click on " yes , i am sure " -->
                                                <tr v-if="showData" v-for="(item, index) in storeStatusData1" :key="index"
                                                    class="border">
                                                    <td class="border py-2 px-4">{{ currentDate }}</td>
                                                    <td class="border py-2 px-4">{{ item.project }}</td>
                                                    <td class="border py-2 px-4">{{ item.ticketTitle }}</td>
                                                    <td class="border py-2 px-4">{{ item.ticketURL }}</td>
                                                    <td class="border py-2 px-4">{{ item.expectedTime }}</td>
                                                    <td class="border py-5 px-4">{{ item.loggedTime }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: { Navbar, Footer },
  data() {
    return {
      showPopup: false,
      currentDate: '',
      numInputSets: 1,
      showData: false,
      showDataSuccessfully: false,
      showEmptyFieldsMessage: false,
      storeStatusData: [
        {
          currentDate: '',
          project: '',
          ticketTitle: '',
          ticketURL: '',
          expectedTime: '',
          loggedTime: '',
          description: '',
        },
      ],
      storeStatusData1: [],
    };
  },
  methods: {
    addMoreItems() {
      this.storeStatusData.push({
        currentDate: '',
        project: '',
        ticketTitle: '',
        ticketURL: '',
        expectedTime: '',
        loggedTime: '',
        description: '',
      });
    },
    deleteItems (index) {
      if (this.storeStatusData.length > 0) {
        this.storeStatusData.pop(index);
      }
    },
    isPopupOpen() {
      this.showPopup = true;
    },
    clearFields() {
      this.storeStatusData = [];
      this.storeStatusData.push({
        currentDate: '',
        project: '',
        ticketTitle: '',
        ticketURL: '',
        expectedTime: '',
        loggedTime: '',
        description: '',
      });
    },
    closePopup() {
      this.showPopup = false;
      this.clearFields();
    },
    addData() {
      if (this.areAllFieldsEmpty) {
        this.showEmptyFieldsMessage = true;
        setTimeout(() => {
            this.showEmptyFieldsMessage = false
        }, 4000)
        this.closePopup()
        return;
      }

      this.showDataSuccessfully = true;
      setTimeout(() => {
        this.showDataSuccessfully = false;
      }, 2000);

      this.showData = true;
      var data = this.storeStatusData;
      this.storeStatusData1 = data;
      if (this.showData === true) {
        this.closePopup();
      }
      this.clearFields();
    },
  },
  computed: {
    areAllFieldsEmpty() {
      return this.storeStatusData.every(item =>  {
        return (
          item.project === '' &&
          item.ticketTitle === '' &&
          item.ticketURL === '' &&
          item.expectedTime === '' &&
          item.loggedTime === '' &&
          item.description === ''
        );
      });
    },
  },
  mounted: function () {
    var today = new Date();
    var year = today.getFullYear();
    var month = String(today.getMonth() + 1).padStart(2, '0');
    var day = String(today.getDate()).padStart(2, '0');
    this.currentDate = year + '-' + month + '-' + day;
  },
};
</script>

<style>
.set-font-bold {
    font-weight: bold;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(78, 78, 78);
}

@keyframes zoom-out {
    0% {
        opacity: 0;
        transform: scale(0.5);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

/* Apply the fade transition to the success message */
.setAnimation.fade-enter-active,
.setAnimation.fade-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.setAnimation.fade-enter,
.setAnimation.fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
    /* Adjust this value for desired animation */
}

/* Define the zoom-out animation */
@keyframes zoom-out {
    0% {
        opacity: 0;
        transform: scale(0.5);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

/* Apply the zoom-out animation to the popup */
.zoom-out-animation {
    animation: zoom-out 0.2s ease-out;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 1;
}
</style>