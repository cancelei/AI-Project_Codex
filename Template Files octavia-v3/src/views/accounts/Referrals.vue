<script setup>
import Account from "@/components/Account.vue";
import { reactive } from "@vue/reactivity";
import TableLite from "vue3-table-lite";
const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "Order ID",
      field: "orderId",
      width: "20%",
      sortable: true,
    },
    {
      label: "User",
      field: "user",
      width: "20%",
      sortable: true,
    },
    {
      label: "Date",
      field: "date",
      width: "20%",
      sortable: true,
    },
    {
      label: "Bonus",
      field: "bonus",
      width: "20%",
      sortable: true,
    },
    {
      label: "Profit",
      field: "profit",
      width: "20%",
      sortable: true,
    },
  ],
  rows: [
    {
      orderId: "678935899",
      user: "Marcus Harris",
      date: "Nov 12, 2021",
      bonus: "15%",
      profit: "$1,200.00",
    },
    {
      orderId: "678935899",
      user: "Robert Smith",
      date: "Nov 12, 2021",
      bonus: "53%",
      profit: "$2,400.00",
    },
    {
      orderId: "678935899",
      user: "Williams Brown",
      date: "Nov 12, 2021",
      bonus: "78%",
      profit: "$1,200.00",
    },
    {
      orderId: "678935899",
      user: "Marcus Harris",
      date: "Nov 12, 2021",
      bonus: "15%",
      profit: "$1,200.00",
    },
    {
      orderId: "678935899",
      user: "Robert Smith",
      date: "Nov 12, 2021",
      bonus: "53%",
      profit: "$2,400.00",
    },
    {
      orderId: "678935899",
      user: "Williams Brown",
      date: "Nov 12, 2021",
      bonus: "78%",
      profit: "$1,200.00",
    },
  ],
  totalRecordCount: 0,
  sortable: {
    order: "id",
    sort: "asc",
  },
});
</script>
<template>
  <v-container>
    <Account>
      <base-card class="pa-0" card-title="Referrals">
        <div class="p-card">
          <v-row>
            <v-col cols="12" lg="3">
              <div
                class="border-secondary px-8 py-4 rounded-lg text-center mb-4 me-3"
              >
                <i class="text-18 text-primary tio-">chart_line_up </i>
                <div class="text-subtitle-2 f-600">$4,550</div>
                <div class="text-caption text-secondary">Net Earnings</div>
              </div>
            </v-col>
            <v-col cols="12" lg="3">
              <div
                class="border-secondary px-8 py-4 rounded-lg text-center mb-4 me-3"
              >
                <i class="text-18 text-success tio-">dollar_outlined </i>
                <div class="text-subtitle-2 f-600">$44,550</div>
                <div class="text-caption text-secondary">Balance</div>
              </div>
            </v-col>
            <v-col cols="12" lg="3">
              <div
                class="border-secondary px-8 py-4 rounded-lg text-center mb-4 me-3"
              >
                <i class="text-18 text-error tio-"
                  >checkmark_circle_outlined
                </i>
                <div class="text-subtitle-2 f-600">$44,550</div>
                <div class="text-caption text-secondary">Avg Deal Size</div>
              </div>
            </v-col>
            <v-col cols="12" lg="3">
              <div
                class="border-secondary px-8 py-4 rounded-lg text-center mb-4 me-3"
              >
                <i class="text-18 text-info tio-">sign_in </i>
                <div class="text-subtitle-2 f-600">$44,550</div>
                <div class="text-caption text-secondary">Referral Signups</div>
              </div>
            </v-col>
            <v-col cols="12">
              <div
                class="pa-6 mb-6 border-primary rounded bg-secondary-lighten-5 d-flex justify-center justify-sm-space-between flex-wrap"
              >
                <div
                  class="d-flex flex-column flex-sm-row align-center mb-2 text-center text-sm-left"
                >
                  <i class="text-24 text-primary me-3 tio-">money_vs</i>
                  <div>
                    <div class="text-caption f-600">We Need Your Attention</div>
                    <div class="text-caption f-500 mw-900">
                      Writing headlines for blog posts is as much an art as it
                      is a science, and warrants its own post, but for now, all
                      I’d advise is experimenting what works for your audience,
                      especially if it’s not resonating with your audience
                    </div>
                  </div>
                </div>
                <v-btn
                  class="text-capitalize d-flex"
                  color="primary"
                  hide-details
                  >Add payment
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12">
              <div
                class="mb-2 d-flex justify-space-between flex-wrap align-center"
              >
                <div>
                  <v-card-title class="mb-0 pa-0 text-body-2 font-weight-medium"
                    >Your Referral Link</v-card-title
                  >
                  <p class="text-grey-500 body-text-1 col-lg-8 mb-4">
                    Plan your blog post by choosing a topic, creatingan outline
                    conduct research, and checking facts
                  </p>
                </div>
                <div class="d-flex flex-wrap">
                  <div
                    class="bg-secondary-lighten-5 text-secondary pa-2 me-2 mb-2"
                  >
                    https://OctaviaX.com/reffer/?refid=345re66787k8
                  </div>
                  <v-btn class="text-capitalize bg-secondary-lighten-5" flat
                    >Copy Link</v-btn
                  >
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <v-card-title class="mb-0 border-bottom text-body-2 f-600"
          >Referred Users
        </v-card-title>
        <perfect-scrollbar class="table">
          <table-lite
            :is-slot-mode="true"
            :columns="table.columns"
            :rows="table.rows"
            :total="table.totalRecordCount"
            :is-hide-paging="true"
          >
            <template v-slot:profit="data">
              <div class="text-success">{{ data.value.profit }}</div>
            </template>
          </table-lite>
        </perfect-scrollbar>
      </base-card>
    </Account>
  </v-container>
</template>
<style lang="scss" scoped>
.text-dark {
  color: #000;
}
.table {
  display: block;
  width: 100%;
  overflow-x: auto;
}
.mw-900 {
  max-width: 900px;
}
.vertical-line {
  height: 100%;
  display: flex;
  width: 1px;
  background-color: #e9eff6;
}
::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  background-color: transparent;
  border-color: transparent;
  color: #131e3e;
  font-weight: 600;
  border-bottom: 1px solid #cee8ff;
}
::v-deep(.vtl-thead-tr) {
  background-color: #cee8ff;
}
::v-deep(.vtl-table td span) {
  white-space: nowrap;
}
::v-deep(.vtl-table td),
::v-deep(.vtl-table tr) {
  border: none;
  vertical-align: middle;
  font-weight: 500;
  color: #647283;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
::v-deep(.vtl-thead-column) {
  font-size: 12px;
  font-weight: 600;
  color: #88a6c9;
}
::v-deep(.vtl-thead-tr) {
  background-color: #f2f9ff;
}
::v-deep(.vtl-tbody-td span) {
  font-size: 12px;
  font-weight: 600;
  color: #011e3d;
}
::v-deep(.vtl-tbody-tr) {
  border-bottom: 1px solid #cee8ff !important;
}
::v-deep(.vtl-paging-pagination-page-link) {
  border: none;
}
</style>
