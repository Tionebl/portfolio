<template>
  <div class="row ">
  <div class="flex bg-slate-50 border mt-24">
      <div class="  col-xs-12 col-md-6 p-2  bg-slate-50 border-r">
          <p class=" font-semibold text-orange-400 "> Période:  </p>
          <DateRangePicker
              :default-show="defaultShow" v-model="dateRange" :format="'dd-MMM-yyyy'"
          />
      </div>
    <div class="mx-2 mt-7">
      <p class="font-semibold text-orange-400"> Client: </p>
      <auto-complete  :style="{ width: '230px' }" v-model="client" :data-items="testAutoComplete" :placeholder="'Aniprev'" ></auto-complete>
    </div>
    <div class="mx-2 mt-7">
      <p class="font-semibold text-orange-400"> Status </p>
      <drop-down-list  :style="{ width: '230px' }" v-model="status" :data-items="testStatus" ></drop-down-list>
    </div>
  </div>
  </div>
<div class="mt-20 flex">
  <div>
    <div class="h-10">
      <drop-down-list :data-items="categories" :data-item-key="'CategoryID'" :text-field="'CategoryName'"
        :default-item="defaultItems" @change="handleDropDownChange" @rowclick="rowClick"></drop-down-list>&nbsp; 
    </div>
    <!-- <div class="">
      <grid :data-items="dataResult" :pageable="pageable" :sortable="sortable" :sort="sort" :take="take" :skip="skip"
      :columns="columns" @datastatechange="dataStateChange" @rowclick="rowClick" :style="{ height: '400px' }"></grid>
    </div>
    <div class="mt-10 mb-2">
      <grid :data-items="datasAirQuality" :pageable="pageable" :sortable="sortable" :sort="sortDatas" :take="takeDatas" :skip="skipDatas"
      :columns="dataColumns" @datastatechange="dataStateChangeAirquality" @rowclick="rowClickAir" :style="{ height: '400px' }">
      </grid>
    </div> -->
    <div class="mt-10 mb-2">
    <grid :data-items="res" :pageable="pageable" :sortable="sortable" :take="takeDatas" :skip="skipDatas" :columns="usaColumns" @datastatechange="dataStateChangeTestLimit"></grid>
    </div>
  </div>
</div>

</template>

<script setup>

import { ref, onMounted } from "vue";
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { AutoComplete } from '@progress/kendo-vue-dropdowns';
import {
 DateRangePicker
    } from '@progress/kendo-vue-dateinputs';

import  categories  from '../appdata/categories.json';
import  products from '../appdata/products.json';
import datasTest from '../appdata/testDataSet.json'

import { process } from '@progress/kendo-data-query';
import { Grid } from '@progress/kendo-vue-grid';

import  useApi   from '../api';
const api = useApi();

const dateRange = ref()
const client = ref("")
const status = ref("")

const testAutoComplete = ["Aniprev", "imtDouai", "Annett", "Resosys", "Macq", "Airflux"]
const testStatus = ["Aucun problème", "Stock", "Support Noolitic", "Transport", "Transport vers client"]

const defaultShow = ref(false)

const defaultItems = { CategoryID: null, CategoryName: "Product categories" };
const dropdownlistCategory = ref(null);
const pageable = ref(true);
const sortable = ref(true);
const skip = ref(0);
const skipDatas = ref(0);
const take = ref(10);
const takeDatas = ref(10);


const res = ref()
const takeAir = ref(10);
const skipAir = ref(0)
const sort = ref([
  { field: "ProductName", dir: "asc" }
]);
const sortDatas = ref([
  { field: "timeStamp", dir: "asc" }
]);

const filter = ref({ logic: "and", filters: [] });

const columns = [
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Price' },
  { field: 'UnitsInStock', title: 'Units in Stock' },
];
const dataColumns = [
  { field: 'timeStamp', title: 'timeStamp' },
  { field: 'dataValues.co2', title: 'co2' },
  { field: 'dataValues.temperature', title: 'temperature' },
  { field: 'dataValues.humidity', title: 'humidity' },
  { field: 'dataValues.humidity', title: 'humidity' },
  { field: 'dataValues.cov.resistance', title: 'cov_resistance' },
  { field: 'dataValues.cov.voltage', title: 'cov_voltage' },
  { field: 'dataValues.o3.voltage', title: 'o3_voltage' },
  { field: 'dataValues.o3.voltage', title: 'o3_voltage' },
  { field: 'dataValues.no2.voltage', title: 'no2_voltage' },
  { field: 'dataValues.no2.voltage', title: 'no2_voltage' },
];


const usaColumns = [
  {field: 'Nation', title:'Nation'},
  {field: 'Population', title:'Population'},
  {field: 'Year', title: 'Year'}
]
const dataResult = ref({ data: [], total: 0 });

const datasAirQuality = ref({ data: [], total: 0})
const gridClickedRow = ref({});

// const ndGridClickedRow = ref({})

const handleDropDownChange = (e) => {
  dropdownlistCategory.value = e.target.value.CategoryID;
  if (e.target.value.CategoryID !== null) {
    filter.value = {
      logic: 'and',
      filters: [{ field: 'CategoryID', operator: 'eq', value: e.target.value.CategoryID }]
    };
    skip.value = 0;
  } else {
    filter.value = {};
    skip.value = 0;
  }

  const event = {
    data: {
      skip: skip.value,
      take: take.value,
      sort: sort.value,
      filter: filter.value
    }
  };

  dataStateChange(event);
};

const createAppState = (dataState) => {
  take.value = dataState.take;
  skip.value = dataState.skip;
  sort.value = dataState.sort;
};
// const createAppStateAir = (dataState) => {
//   takeAir.value = dataState.take;
//   skipAir.value = dataState.skip;
//   sortDatas.value = dataState.sort;
// };

const dataStateChange = (event) => {
  createAppState(event.data);
  if (event.data.filter !== undefined && event.data.filter.logic) {
    dataResult.value = process(products, {
      skip: event.data.skip,
      take: event.data.take,
      sort: event.data.sort,
      filter: event.data.filter
    });
  } else {
    dataResult.value = process(products, {
      skip: event.data.skip,
      take: event.data.take,
      sort: event.data.sort,
    });
  }
};

// const dataStateChangeAirquality = (event) => {
//   createAppStateAir(event.data);
//   if (event.data.filter !== undefined && event.data.filter.logic) {
//     datasAirQuality.value = process(datasTest, {
//       skip: event.data.skip,
//       take: event.data.take,
//       sort: event.data.sort,
//       filter: event.data.filter
//     });
//   } else {
//     datasAirQuality.value = process(datasTest, {
//       skip: event.data.skip,
//       take: event.data.take,
//       sort: event.data.sort,
//     });
//   }
// };

const rowClick = (event) => {
  gridClickedRow.value = event.dataItem;
};
// const rowClickAir = (event) => {
//   ndGridClickedRow = event.dataItem;
// };

const gridData = ref({
  data: [],
  total: 0,
});

const dataStateChangeTestLimit = async (event) => {
  const page = event.data.skip / event.data.take + 1;
  const pageSize = event.data.take;

  try {
    const response = await axios.get('http://localhost:3000/api/data', {
      params: {
        page,
        pageSize,
      },
    });

    gridData.value = process(response.data.data, {
      skip: event.data.skip,
      take: event.data.take,
      sort: event.data.sort,
      filter: event.data.filter,
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  }
};

const loadDataTestWithDelay = () => {
return new Promise((resolve) => {
setTimeout(() => {
  resolve(datasTest);
}, 2000);
});
};


onMounted(async () => {

  const delayedDataTest = await loadDataTestWithDelay();
  datasTest.value = delayedDataTest;

  const dataState = {
    skip: skip.value,
    take: take.value,
    sort: sort.value,
  };
  dataResult.value = process(products, dataState);
  datasAirQuality.value = process(delayedDataTest, dataState);

 res.value =  await api.fetchDataUSA()
});

</script>