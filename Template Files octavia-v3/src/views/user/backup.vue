<script setup>
import { crmOne, crmTwo, tasks } from "@/data/crm.js";
import { ref, reactive } from "@vue/reactivity";
import crmImportImg from "@/assets/images/crm-lead.svg";
import TableLite from "vue3-table-lite";
const crmImg = ref(crmImportImg);
const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "Product",
      field: "product",
      width: "",
      sortable: false,
    },
    {
      label: "Producer",
      field: "producer",
      width: "",
      sortable: false,
    },
    {
      label: "ID",
      field: "nid",
      width: "",
      sortable: false,
    },
    {
      label: "Category",
      field: "category",
      width: "",
      sortable: false,
    },
    {
      label: "Cost",
      field: "cost",
      width: "",
      sortable: false,
    },
    {
      label: "Extra",
      field: "extra",
      width: "",
      sortable: false,
    },
    {
      label: "Price",
      field: "price",
      width: "",
      sortable: false,
    },
    {
      label: "Priority",
      field: "priority",
      width: "",
      sortable: false,
    },
    {
      label: "Edit",
      field: "edit",
      width: "",
      sortable: false,
    },
  ],
  rows: [
    {
      product: {
        img: "@/assets/images/products/earbud.png",
        title: "Earbud",
      },

      producer: "Zachery Gomez",
      nid: "P10001",
      category: "Air Pod",
      cost: "$432",
      extra: "20%",
      price: "$450",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/headphone-1.jpg",
        title: "Headphone",
      },

      producer: "Jackie Gomez",
      nid: "P10001",
      category: "Sony Pro",
      cost: "$132",
      extra: "20%",
      price: "$450",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/nike-shoe.png",
        title: "Nike Shoe",
      },

      producer: "Demi Frost",
      nid: "P10001",
      category: "Sony Pro",
      cost: "$132",
      extra: "20%",
      price: "$450",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/logitech-mouse.png",
        title: "Logitech",
      },

      producer: "Jemmie Frost",
      nid: "P10001",
      category: "Logitech",
      cost: "$132",
      extra: "20%",
      price: "$450",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/macbook-pro.png",
        title: "Macbook Pro",
      },

      producer: "Steve Jobs",
      nid: "P10001",
      category: "Laptop",
      cost: "$132",
      extra: "20%",
      price: "$2k",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/earbud.png",
        title: "Earbud",
      },

      producer: "Zachery Gomez",
      nid: "P10001",
      category: "Air Pod",
      cost: "$432",
      extra: "20%",
      price: "$450",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/headphone-1.jpg",
        title: "Headphone",
      },

      producer: "Jackie Gomez",
      nid: "P10001",
      category: "Sony Pro",
      cost: "$132",
      extra: "20%",
      price: "$450",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/nike-shoe.png",
        title: "Nike Shoe",
      },

      producer: "Demi Frost",
      nid: "P10001",
      category: "Sony Pro",
      cost: "$132",
      extra: "20%",
      price: "$450",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/logitech-mouse.png",
        title: "Logitech",
      },

      producer: "Jemmie Frost",
      nid: "P10001",
      category: "Logitech",
      cost: "$132",
      extra: "20%",
      price: "$450",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/macbook-pro.png",
        title: "Macbook Pro",
      },

      producer: "Steve Jobs",
      nid: "P10001",
      category: "Laptop",
      cost: "$132",
      extra: "20%",
      price: "$2k",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/earbud.png",
        title: "Earbud",
      },

      producer: "Zachery Gomez",
      nid: "P10001",
      category: "Air Pod",
      cost: "$432",
      extra: "20%",
      price: "$450",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/headphone-1.jpg",
        title: "Headphone",
      },

      producer: "Jackie Gomez",
      nid: "P10001",
      category: "Sony Pro",
      cost: "$132",
      extra: "20%",
      price: "$450",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/nike-shoe.png",
        title: "Nike Shoe",
      },

      producer: "Demi Frost",
      nid: "P10001",
      category: "Sony Pro",
      cost: "$132",
      extra: "20%",
      price: "$450",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/logitech-mouse.png",
        title: "Logitech",
      },

      producer: "Jemmie Frost",
      nid: "P10001",
      category: "Logitech",
      cost: "$132",
      extra: "20%",
      price: "$450",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/macbook-pro.png",
        title: "Macbook Pro",
      },

      producer: "Steve Jobs",
      nid: "P10001",
      category: "Laptop",
      cost: "$132",
      extra: "20%",
      price: "$2k",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/earbud.png",
        title: "Earbud",
      },

      producer: "Zachery Gomez",
      nid: "P10001",
      category: "Air Pod",
      cost: "$432",
      extra: "20%",
      price: "$450",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/headphone-1.jpg",
        title: "Headphone",
      },

      producer: "Jackie Gomez",
      nid: "P10001",
      category: "Sony Pro",
      cost: "$132",
      extra: "20%",
      price: "$450",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/nike-shoe.png",
        title: "Nike Shoe",
      },

      producer: "Demi Frost",
      nid: "P10001",
      category: "Sony Pro",
      cost: "$132",
      extra: "20%",
      price: "$450",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/logitech-mouse.png",
        title: "Logitech",
      },

      producer: "Jemmie Frost",
      nid: "P10001",
      category: "Logitech",
      cost: "$132",
      extra: "20%",
      price: "$450",
      priority: "1",
    },
    {
      product: {
        img: "@/assets/images/products/macbook-pro.png",
        title: "Macbook Pro",
      },

      producer: "Steve Jobs",
      nid: "P10001",
      category: "Laptop",
      cost: "$132",
      extra: "20%",
      price: "$2k",
      priority: "1",
    },
  ],
  totalRecordCount: 0,
  sortable: {
    order: "id",
    sort: "asc",
  },
});
const updateCheckedRows = (rowsKey) => {
  console.log(rowsKey);
};
const toggle_exclusive = ref(2);
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="product-list-card px-0">
        <div
          class="
            d-flex
            justify-space-between
            align-center
            mb-4
            bb-secondary
            pb-3
            px-4
            flex-wrap
          "
        >
          <div class="d-flex align-center mb-3">
            <div class="bg-primary-lighten-5 px-3 py-2 rounded me-3">
              <i class="tio- text-primary text-18">shopping</i>
            </div>
            <div class="text-subtitle-2 f-600">E-commerce</div>
          </div>
          <div class="d-flex mb-3">
            <router-link
              to="#"
              class="text-decoration-none product-link active me-8 f-600"
              >Active</router-link
            >
            <router-link
              to="#"
              class="text-decoration-none product-link me-8 f-600"
              >Draft</router-link
            >
            <router-link
              to="#"
              class="text-decoration-none product-link me-8 f-600"
              >Assembly</router-link
            >
          </div>
          <v-btn color="primary" flat class="text-capitalize">
            <i class="tio- me-2">add</i>
            Add Products</v-btn
          >
        </div>
        <div class="d-flex justify-space-between align-center px-4 flex-wrap">
          <v-text-field
            class="d-inline-block mw-200"
            hide-details
            label="search"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn-toggle v-model="toggle_exclusive">
            <v-btn flat class="bg-white rounded-0">
              <i class="tio- text-18 text-secondary">format_bullets</i>
            </v-btn>
            <v-btn flat class="bg-white rounded-0">
              <i class="tio- text-18 text-secondary">apps</i>
            </v-btn>
          </v-btn-toggle>
        </div>
        <perfect-scrollbar class="table invoice-list">
          <table-lite
            :has-checkbox="true"
            :is-slot-mode="true"
            :columns="table.columns"
            :rows="table.rows"
            :total="table.totalRecordCount"
            :is-hide-paging="false"
          >
            <template v-slot:product="data">
              <div class="d-flex align-center">
                <v-avatar size="40" class="me-2 rounded">
                  <img :src="data.value.product.img" alt="" />
                </v-avatar>
                <div class="f-600">
                  {{ data.value.product.title }}
                </div>
              </div>
            </template>
            <template v-slot:edit>
              <div class="d-flex">
                <v-btn icon size="small" flat>
                  <i class="text-secondary tio-">edit</i>
                </v-btn>
                <v-btn icon size="small" flat>
                  <i class="text-secondary tio-">delete</i>
                </v-btn>
              </div>
            </template>
          </table-lite>
        </perfect-scrollbar>
        <div class="text-center mb-5">
          <v-btn flat class="bg-white text-capitalize"
            >Load More Products</v-btn
          >
        </div>
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
::v-deep(.vtl-table) {
  border-collapse: separate;
  border-spacing: 0px 20px;
}

::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  background-color: transparent;
  border-color: transparent;
  color: #32425e;
  font-weight: 600;

  border-bottom: 1px solid #cee8ff;
}
::v-deep(.vtl-table td),
::v-deep(.vtl-table tr) {
  border: none;
  vertical-align: middle;
  font-weight: 500;
}

::v-deep(.vtl-paging-pagination-page-link) {
  border: none;
}
</style>
