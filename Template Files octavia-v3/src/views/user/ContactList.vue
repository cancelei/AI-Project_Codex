<script setup>
import { ref, reactive } from "vue";
import InformationCard from "@/components/InformationCard.vue";
import TableLite from "vue3-table-lite";
const page = ref(1);
// Fake Data for 'asc' sortable
const sampleData1 = (offst, limit) => {
  offst = offst + 1;
  let data = [];
  for (let i = offst; i <= limit; i++) {
    data.push({
      id: i,
      name: `
        <div class="d-flex align-center">
          <img width="36 rounded" src="/src/assets/images/faces/4.jpg">
          <span class="ms-4 user-name"> Zachary Gomez ${i} </span>
        </div>
      `,
      position: "Designer" + i,
      company: "Google Inc",
      email: "zachary_gomez" + i + "@gmail.com",
    });
  }
  return data;
};
// Fake Data for 'desc' sortable
const sampleData2 = (offst, limit) => {
  let data = [];
  for (let i = limit; i > offst; i--) {
    data.push({
      id: i,
      name: "TEST" + i,
      email: "test" + i + "@example.com",
    });
  }
  return data;
};
const table = reactive({
  isLoading: false,
  isReSearch: false,
  columns: [
    {
      label: "Name",
      field: "name",
      width: "20%",
      sortable: true,
      display: function (row) {
        return (
          '<a class="text-decoration-none f-600 text-secondary-darken-5" href="javascript:void(0)" data-id="' +
          row.id +
          '" class="is-rows-el name-btn">' +
          row.name +
          "</a>"
        );
      },
    },
    {
      label: "Position",
      field: "position",
      width: "15%",
      sortable: true,
    },
    {
      label: "Company",
      field: "company",
      width: "15%",
      sortable: true,
    },
    {
      label: "Email",
      field: "email",
      width: "15%",
      sortable: true,
    },
    {
      label: "Edit",
      field: "edit",
      width: "10%",
    },
  ],
  rows: [],
  totalRecordCount: 0,
  sortable: {
    order: "id",
    sort: "asc",
  },
  messages: {
    pagingInfo: "Showing {0}-{1} of {2}",
    pageSizeChangeLabel: "Row count:",
    gotoPageLabel: "Go to page:",
    noDataAvailable: "No data",
  },
});
/**
 * Search Event
 */
const doSearch = (offset, limit, order, sort) => {
  table.isLoading = true;
  setTimeout(() => {
    table.isReSearch = offset == undefined ? true : false;
    if (offset >= 10 || limit >= 20) {
      limit = 20;
    }
    if (sort == "asc") {
      table.rows = sampleData1(offset, limit);
    } else {
      table.rows = sampleData2(offset, limit);
    }
    table.totalRecordCount = 20;
    table.sortable.order = order;
    table.sortable.sort = sort;
  }, 600);
};
/**
 * Loading finish event
 */
const tableLoadingFinish = (elements) => {
  table.isLoading = false;
  Array.prototype.forEach.call(elements, function (element) {
    if (element.classList.contains("name-btn")) {
      element.addEventListener("click", function () {
        console.log(this.dataset.id + " name-btn click!!");
      });
    }
    if (element.classList.contains("quick-btn")) {
      element.addEventListener("click", function () {
        console.log(this.dataset.id + " quick-btn click!!");
      });
    }
  });
};
/**
 * Row checked event
 */
const updateCheckedRows = (rowsKey) => {
  console.log(rowsKey);
};
// First get data
doSearch(0, 10, "id", "asc");
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="8" md="6" class="pe-0">
        <base-card class="h-100">
          <div class="d-flex justify-space-between align-center flex-wrap">
            <v-text-field
              class="mw-200"
              label="Search"
              variant="outlined"
              hide-details=""
            ></v-text-field>

            <v-btn-toggle
              class="d-flex justify-end flex-wrap"
              v-model="toggle_exclusive"
            >
              <v-btn flat class="bg-white rounded-0">
                <i class="tio- text-18 text-secondary">format_bullets</i>
              </v-btn>
              <v-btn flat class="bg-white rounded-0">
                <i class="tio- text-18 text-secondary">apps</i>
              </v-btn>
            </v-btn-toggle>
          </div>
          <v-row>
            <v-col cols="12">
              <perfect-scrollbar class="table invoice-list">
                <table-lite
                  :is-slot-mode="true"
                  :has-checkbox="true"
                  :is-loading="table.isLoading"
                  :is-re-search="table.isReSearch"
                  :columns="table.columns"
                  :rows="table.rows"
                  :total="table.totalRecordCount"
                  :sortable="table.sortable"
                  :messages="table.messages"
                  @do-search="doSearch"
                  @is-finished="tableLoadingFinish"
                  @return-checked-rows="updateCheckedRows"
                >
                  <template v-slot:edit>
                    <v-btn icon size="small" flat>
                      <i class="text-secondary text-18 tio-">more_vertical</i>
                    </v-btn>
                  </template>
                </table-lite>
              </perfect-scrollbar>
            </v-col>
          </v-row>
        </base-card>
      </v-col>
      <v-col cols="12" lg="4" md="6" class="px-0">
        <InformationCard />
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.mw-200 {
  max-width: 200px;
}
.product-list-card {
  box-shadow: 0px 12px 50px 2px rgba(19, 80, 124, 0.14);
  border-radius: 8px;
}
.product-link {
  color: #647283;
  padding-bottom: 12px;
  border-bottom: 2px solid transparent;
  &.active {
    color: #0a68ff;
    border-bottom: 2px solid #0a68ff;
  }
}

.invoice-list {
  display: block;
  width: 100%;
  overflow-x: auto;
  .card {
    background-color: transparent;
  }
}
::v-deep(.vtl-thead-tr) {
  background-color: #e5f3ff;
}
::v-deep(.vtl-tbody-tr) {
  background-color: #fff;
}
// ::v-deep(.vtl-table) {
//   border-collapse: separate;
//   border-spacing: 0px 20px;
// }

::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  background-color: transparent;
  border-color: transparent;
  color: #32425e;
  font-weight: 600;

  border-bottom: 1px solid #cee8ff;
}
::v-deep(.vtl-tbody-tr) {
  border-bottom: 1px solid #cee8ff !important;
}
::v-deep(.vtl-tbody-tr:last-child) {
  border-bottom: 1px solid transparent !important;
}
::v-deep(.vtl-table td),
::v-deep(.vtl-table tr) {
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
  border: none;
  vertical-align: middle;
  font-weight: 500;
}

::v-deep(.vtl-paging-pagination-page-link) {
  border: none;
  text-decoration: none;
}
::v-deep(.vtl-paging-pagination-page-li-number.page-item.disabled .page-link) {
  background-color: #0a68ff;
  color: #fff;
  border-radius: 8px;
  padding: 6px 15px;
  font-weight: 600;
}
::v-deep(.vtl-paging-pagination-page-li-first) {
  display: none;
}
::v-deep(.vtl-paging-pagination-page-li-last) {
  display: none;
}

::v-deep(.vtl-paging-change-div) {
  visibility: hidden;
}
::v-deep(.vtl-thead-column) {
  font-size: 12px;
  font-weight: 600;
  color: #88a6c9;
}

::v-deep(.vtl-tbody-td span) {
  font-size: 12px;
  font-weight: 500;
  color: #011e3d;
}
::v-deep(.vtl-paging-info) {
  font-size: 13px;
}
::v-deep(.user-name) {
  font-weight: 600 !important;
}
.mw-200 {
  max-width: 200px;
}
</style>
