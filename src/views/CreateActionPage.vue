<!-- This Page is Create Action on click of Action Link -->
<template>
    <div>
        <Navbar/>
    </div>
    <div>
        <div class="bg-gray-100 pt-10">
        <div class="grid grid-cols-12 px-20">
            <div class="col-span-4 flex justify-center items-center leading-tight">
                <div>
                <p class="font-semibold">Office 1120, Al Hafeez Executive, Block C3, <br> Gulberg III,\n Lahore, Pakistan</p>
                <div class="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-4 rounded bg-black text-white ">
                        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                    </svg>

                    <p class="font-semibold">042 35758118</p>
                </div>
                <div class="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    <p class="font-semibold">www.softpyramid.com</p>
                </div>
                </div>
             
            </div>
            <div class="col-span-4 flex justify-center items-center">
                <div>
                    <img src="src/photos/softpyramid.png" alt="" class="h-16 ">
                </div>
            </div>
            <div class="col-span-4 flex justify-center">
                <div>
                    <img src="src/photos/chart.png" alt="">
                </div>
            </div>
        </div>
        <div class="pt-4">
            <h2 class="text-center font-semibold text-[27px] font-sans">Pay Slip for the month of July 2023</h2>
        </div>
        <div>
            <div class="px-32 pt-6 pb-10">
                <DynamicTable 
                    :headers="tableHeaders" 
                    :rows="tableRows"
                    :isBolds="index === 2"
                />

            </div>
            <div>
                <p class="text-center text-sm text-black font-medium tracking-wider py-6">Scan the above QR code to verify this document. <br>
                    This is a computer-generated document. No signature is required.
                </p>
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
import DynamicTable from '../components/DynamicTable.vue'
import Footer from '../components/Footer.vue'

    export default {
        components:{
            Navbar,
            DynamicTable,
            Footer
        },
        data() {
            return {
                tableHeaders:  ['Pay Date', '01 Aug 2023', 'Pay Period','Jul, 2023'],
                tableRows: [
                            [ "Name",	"Abu Usman",	"Total working ,days" , 20],
                            ["Designation",	"Software Engineer",	"Days Worked"	,20],
                            ["Date of Joining",	"17 Jul 2023",	"Leaves Balance",	0],
                            [''],
                            ["Earnings",	"Amount",	"Deductions",	"Amount"],
                            ["Basic Pay","	1.00"	,"Tax Deduction",	0.00],
                            ["Bonus",	"0.00"	,"EOBI Deduction",	0.00],
                            ["","",	"PF Deduction",	0.00],
                            ["","",	"	Other Deduction",	0.00],
                            ["Total Earnings",1	,"Total Deductions",	0],
                            ["Gross Salary"	,1	,"Net Pay",	1],
                           [" Mode of Payment",	"NONE",	"Currency	" ,"PKR"],
                           ['PKR One']
                        ]
                    }
                }
         }
</script>