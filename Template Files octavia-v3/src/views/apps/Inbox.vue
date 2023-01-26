<script setup>
import { ref, reactive } from "@vue/reactivity";
import TableLite from "vue3-table-lite";
// Fake Data for 'asc' sortable
const sampleData1 = (offst, limit) => {
  offst = offst + 1;
  let data = [];
  for (let i = offst; i <= limit; i++) {
    data.push({
      id: i,
      name: `
        <div class="d-flex align-center">
          <img width="36 rounded" src="/src/assets/images/faces/2.jpg" />
          <span class="ms-4"> Zachary Gomez ${i} </span>
        </div>
      `,
      username: "zachary_gomez_" + i,
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
      width: "10%",
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
      label: "Username",
      field: "username",
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

const isOpen = ref(false);
const btnToggle = () => {
  isOpen.value = !isOpen.value;
};
const todosFilter = ref([
  {
    icon: "email_outlined",
    title: "Pending Emails",
  },
  {
    icon: "all_done",
    title: "Sent Emails",
  },
  {
    icon: "files_outlined",
    title: "Drafts",
  },
  {
    icon: "security_warning_outlined",
    title: "Spamming",
  },
  {
    icon: "delete_outlined",
    title: "Trash",
  },
  {
    icon: "labels_outlined",
    title: "Labels",
  },
  {
    icon: "settings_outlined",
    title: "Settings",
  },
]);
</script>
<template>
  <v-container>
    <v-btn class="btn-box-toggle" flat @click="btnToggle"
      ><i class="tio- text-secondary text-18">menu_hamburger</i></v-btn
    >
    <div class="box-wrapper">
      <div :class="isOpen ? 'open' : ''" class="box-sidebar p-card">
        <v-btn block flat color="primary" class="text-capitalize mb-5"
          ><i class="tio- text-18 me-2">add_square_outlined</i>Connect</v-btn
        >

        <router-link to="#" class="text-decoration-none sidebar-link active">
          <i class="tio- me-2 text-18">inbox</i>
          Inbox
        </router-link>
        <router-link
          v-for="(item, index) in todosFilter"
          :key="index"
          to="#"
          class="text-decoration-none sidebar-link"
        >
          <i class="tio- me-2 text-18">{{ item.icon }}</i>
          {{ item.title }}
        </router-link>
      </div>

      <div class="box-container">
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
              <div class="d-flex">
                <v-btn icon size="small" flat class="mr-2">
                  <i class="text-secondary tio-">edit</i>
                </v-btn>
                <v-btn icon size="small" flat>
                  <i class="text-secondary tio-">delete</i>
                </v-btn>
              </div>
            </template>
          </table-lite>
        </perfect-scrollbar>
      </div>
      <div
        @click="isOpen = false"
        :class="isOpen ? 'open' : ''"
        class="box-overlay"
      ></div>
    </div>
  </v-container>
</template>
<style lang="scss" scoped>
.btn-box-toggle {
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
}
.sidebar-link {
  color: #647283;
  font-weight: 600;
  display: block;
  border-radius: 4px;
  padding: 0.75rem;
  &.active {
    background-color: #e6f3ff;
    color: #0a68ff;
  }
  &:hover {
    background-color: #e6f3ff;
    color: #0a68ff;
  }
}
.box-wrapper {
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: flex-start;
  .box-sidebar {
    width: 260px;
    background-color: #fff;
    border-radius: 8px;
    height: 100%;
    @media (max-width: 1200px) {
      position: fixed;
      left: -260px;
      top: 0;
      z-index: 999;
      height: 100vh;
      transition: all 0.2s ease-in;
      &.open {
        left: 0;
      }
    }
  }
  .box-container {
    width: 100%;
    margin-left: 28px;
    background-color: #fff;
    @media (max-width: 1200px) {
      margin-left: 0;
    }
  }
  .box-overlay {
    position: fixed;
    z-index: 998;
    display: none;
    background-color: #000;
    opacity: 0.5;
    height: 100%;
    top: 0;
    left: 0;
    width: 100%;
    &.open {
      display: block;
    }
  }
}

.invoice-list {
  display: block;
  width: 100%;
  overflow-x: auto;
  .card {
    background-color: transparent;
    padding-top: 0 !important;
  }
}
::v-deep(.vtl-thead-tr) {
  background-color: #e5f3ff;
}
::v-deep(.vtl-tbody-tr) {
  background-color: #fff;
}
::v-deep(.vtl-tbody-td span) {
  font-size: 12px;
  font-weight: 600;
  color: #88a6c9;
}

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
::v-deep(.vtl-thead-column) {
  font-size: 12px;
  font-weight: 600;
  color: #88a6c9;
}
::v-deep(.vtl-table td),
::v-deep(.vtl-table tr) {
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
</style>
