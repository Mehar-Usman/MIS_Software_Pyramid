<template>
  <div>
    <Navbar />
  </div>
  <!-- Write code for entertainment Expenses -->
  <div class="bg-white py-2 px-4">
    <div class="flex justify-between">
      <div>
        <h2 class="font-bold text-3xl">Entertainment Expenses</h2>
      </div>
      <div class="flex">
        <div class="flex">
          <div>
            <span>Budget: {{ budget }} |</span>
            <span>Total: {{ total }} | </span>
            <span>Balance: {{ balance }} </span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Start the code of Of get data for total budget -->
  <div class="card-body">
    <div class="bg-gray-100 py-8 px-8">
      <div class="bg-white shadow-2xl rounded-lg py-4 px-4">
        <div class="grid grid-cols-12 border-y-2 py-3">
          <div class="col-span-2">
            <h3 class="font-semibold">Date</h3>
          </div>
          <div class="col-span-3 px-10">
            <h3 class="font-semibold">Description</h3>
          </div>
          <div class="col-span-7 justify-end flex px-20">
            <h3 class="font-semibold">Amount</h3>
          </div>
        </div>
        <!-- start table code -->
        <div class="flex flex-col">
          <div class="overflow-x-auto ">
            <div class="py-2 inline-block min-w-full">
              <div class="overflow-hidden">
                <!-- Grouped Expenses Loop -->
                <table
                  class="min-w-full"
                  v-for="(expenses, month) in groupedExpenses"
                  :key="month"
                >
                  <thead class="bg-white hover:bg-gray-300">
                    <tr>
                      <th
                        scope="col"
                        class="text-md font-bold changeFont text-gray-900 py-3 text-left"
                      >
                        {{ month }}
                      </th>
                      <th
                        scope="col"
                        class="text-md font-bold changeFont text-gray-900 py-3 text-right px-14"
                        :colspan="3"
                      >
                        Total Pay Bill: {{ getTotalPayBill(expenses) }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="border-y hover:bg-gray-300"
                      v-for="expense in expenses"
                      :key="expense.date"
                    >
                      <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                        {{ expense.date }}
                      </td>
                      <td
                        class="text-sm text-gray-900 font-light py-2 whitespace-nowrap"
                      >
                        {{ expense.description }}
                      </td>
                      <td
                        class="text-sm text-gray-900 font-light py-2 whitespace-nowrap"
                      >
                        {{ expense.payBill }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!-- End Grouped Expenses Loop -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
  components: {
    Navbar
  },
  data() {
    return {
      budget: 400000,
      expenses: [
      {
          currentMonth: 'August',
          MonthTotal: '',
          date: '18-08-2023',
          description: "Purchased a flowers bukes for Fakhar Zaman khan by Cash",
          payBill: 1000
        },		
        {
          currentMonth: 'August',
          MonthTotal: '',
          date: '15-08-2023',
          description: "Purchased 2 cakes for Zubair and Nasir's birthday by HBL",
          payBill: 3381
        },
        {
            currentMonth: 'August',
          MonthTotal: '',
          date: '15-08-2023',
          description: "Purchased a cake for office at independence day by HBL",
          payBill: 1250.00
        },
        {
            currentMonth: 'August',
          MonthTotal: '',
          date: '14-08-2023',
          description: "Cash paid for late night meal for Usama, Mujeeb, Maalik, Mohsin and Ikram by Cash",
          payBill: 3150.00
        },
        {
            currentMonth: 'August',
          MonthTotal: '',
          date: '14-08-2023',
          description: "Purchased decoration items for office décor at independence day by Cash",
          payBill: 9120
        },
        {
            currentMonth: 'August',
          MonthTotal: '',
          date: '14-08-2023',
          description: "Cash paid for for official dinner by Cash",
          payBill: 77500
        },
        {
            currentMonth: 'August',
          MonthTotal: '',
          date: '09-08-2023',
          description: "Purchased work anniversary items for Usama Arslan by HBL",
          payBill: 1581
        },
        {
            currentMonth: 'August',
          MonthTotal: '',
          date: '09-08-2023',
          description: "Purchased biscuits for office entertainment by HBL",
          payBill: 792
        },

        {
            currentMonth: 'August',
          MonthTotal: '',
          date: '02-08-2023',
          description: "Purchased biscuits for office entertainment by HBL",
          payBill: 1469
        },
        {
            currentMonth: 'July',
          MonthTotal: '',
          date: '27-07-2023',
          description: "Cash paid for late night dinner for Sir Farooq, Maalik, Mujeeb, Kashif, Mohsin and Ikram by Cash",
          payBill: 2600
        },
        {
            currentMonth: 'July',
          MonthTotal: '',
          date: '19-07-2023',
          description: "Purchased lunch for three marketing inter Muazma Akhter, Hamail Amir, and Uzma Shahzadi on their Onboarding by Cash",
          payBill: 1020
        },
		
        {
            currentMonth: 'July',
          MonthTotal: '',
          date: '27-07-2023',
          description: "Purchased Biscuits for office entertainment for office by HBL	",
          payBill: 3467
        }
      ]
    };
  },
  computed: {
    // Group expenses by month
    groupedExpenses() {
      const grouped = {};
      this.expenses.forEach(expense => {
        if (!grouped[expense.currentMonth]) {
          grouped[expense.currentMonth] = [];
        }
        grouped[expense.currentMonth].push(expense);
      });
      return grouped;
    },
    // Calculate total pay bill for all expenses
    total() {
      return this.expenses.reduce((total, expense) => total + parseInt(expense.payBill), 0);
    },
    // Calculate balance
    balance() {
      return this.budget - this.total;
    }
  },
  methods: {
    // Calculate total pay bill for a given set of expenses
    getTotalPayBill(expenses) {
      return expenses.reduce((total, expense) => total + parseInt(expense.payBill), 0);
    }
  }
};
</script>

<style scoped>
.changeFont {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
