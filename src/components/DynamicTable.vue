<template>
    <div class="table-container">
      <table class="min-w-full border-collapse table-auto border border-gray-300">
        <thead>
          <tr>
            <td v-for="(header, index) in headers" :key="index" class="border border-gray-300 px-4 py-3 font-semibold text-[15px]">{{ header }}</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex"  class="border border-gray-300 px-4 py-3  text-[15px]" :class="  isBolds ?  'font-bold' : 'font-light'">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script>
  export default {
    name: 'DynamicTable',
    props: {
      headers: Array,
      rows: Array,
      isBolds : Boolean
    }
  };
  </script>
  
  