export const navigations = [
  {
    id: 1,
    name: "Dashboard",
    description: "",
    type: "dropDown",
    icon: "dashboard_outlined",
    sub: [
      {
        icon: "i-Clock-3",
        name: "Learning Management",
        link: "/dashboards/learning-management",
        type: "link",
      },
      {
        icon: "i-Clock-4",
        name: "Job Management",
        link: "/dashboards/job-management",
        type: "link",
      },
      {
        icon: "i-Over-Time",
        name: "Crm",
        link: "/dashboards/crm",
        type: "link",
      },
      {
        icon: "i-Clock",
        name: "Sales",
        link: "/dashboards/sales",
        type: "link",
      },
    ],
  },

  {
    id: 2,
    name: "Accounts",
    icon: "account_square_outlined",
    link: "/accounts/basic-information",
  },
  {
    id: 3,
    name: "Pricing",
    icon: "format_bullets",
    link: "/pricing",
  },
  {
    id: 4,
    name: "Ecommerce",
    description: "",
    type: "dropDown",
    icon: "shopping_cart_outlined",
    sub: [
      {
        icon: "i-Clock-3",
        name: "Shop",
        link: "/ecommerce/shop",
        type: "link",
      },
      {
        icon: "i-Over-Time",
        name: "Product Details",
        link: "/ecommerce/product-details",
        type: "link",
      },
      {
        icon: "i-Over-Time",
        name: "Reviews",
        link: "/ecommerce/reviews",
        type: "link",
      },
      {
        icon: "i-Clock",
        name: "Checkout",
        link: "/ecommerce/checkout",
        type: "link",
      },
      {
        icon: "i-Over-Time",
        name: "Billing Address",
        link: "/ecommerce/billing-address",
        type: "link",
      },
      {
        icon: "i-Over-Time",
        name: "Payment Complete",
        link: "/ecommerce/payment-complete",
        type: "link",
      },
    ],
  },
  {
    name: "Profile",
    icon: "account_square_outlined",
    link: "/profile/overview",
  },
  {
    name: "Apps",
    description: "",
    type: "dropDown",
    icon: "website",
    sub: [
      // {
      //   icon: "i-Clock-3",
      //   name: "Kanban",
      //   link: "/apps/kanban",
      //   type: "link",
      // },
      {
        icon: "i-Clock-4",
        name: "Todo",
        link: "/apps/todo",
        type: "link",
      },
      {
        icon: "i-Over-Time",
        name: "Inbox",
        link: "/apps/inbox",
        type: "link",
      },
      {
        icon: "i-Clock",
        name: "Chat",
        link: "/apps/chat",
        type: "link",
      },
      // {
      //   icon: "i-Clock",
      //   name: "Calendar",
      //   link: "/apps/calendar",
      //   type: "link",
      // },
    ],
  },
  {
    name: "Invoice",
    description: "",
    type: "dropDown",
    icon: "receipt_outlined",
    sub: [
      {
        icon: "i-Clock-3",
        name: "Invoice Details One",
        link: "/invoice/invoice-details-one",
        type: "link",
      },
      {
        icon: "i-Clock-3",
        name: "Invoice Details Two",
        link: "/invoice/invoice-details-two",
        type: "link",
      },
      {
        icon: "i-Clock-3",
        name: "Create Invoice",
        link: "/invoice/create-invoice",
        type: "link",
      },
      {
        icon: "i-Clock-3",
        name: " Invoice List",
        link: "/invoice/invoice-list",
        type: "link",
      },
    ],
  },
  {
    name: "Session",
    description: "",
    type: "dropDown",
    icon: "sign_out",
    sub: [
      {
        icon: "i-Clock-3",
        name: "Signin",
        link: "/session/signin",
        type: "link",
      },
      {
        icon: "i-Clock-3",
        name: "Register",
        link: "/session/Register",
        type: "link",
      },

      {
        icon: "i-Clock-4",
        name: "Register 2",
        link: "/session/register-2",
        type: "link",
      },
      {
        icon: "i-Clock-4",
        name: "Forgot",
        link: "/session/forgot",
        type: "link",
      },
      {
        icon: "i-Clock-4",
        name: "Forgot 2",
        link: "/session/forgot-2",
        type: "link",
      },
      {
        icon: "i-Clock-4",
        name: "Two Step Verification",
        link: "/session/two-step-verification",
        type: "link",
      },
    ],
  },
  {
    name: "User",
    description: "",
    type: "dropDown",
    icon: "user_big_outlined",
    sub: [
      {
        icon: "i-Clock-3",
        name: "User List",
        link: "/user/user-list",
        type: "link",
      },
      {
        icon: "i-Clock-4",
        name: "User Grid",
        link: "/user/user-grid",
        type: "link",
      },
      {
        icon: "i-Over-Time",
        name: "Contact List",
        link: "/user/contact-list",
        type: "link",
      },
      {
        icon: "i-Over-Time",
        name: "Contact Grid",
        link: "/user/contact-grid",
        type: "link",
      },
    ],
  },
  {
    name: "Admin Ecommerce",
    description: "",
    type: "dropDown",
    icon: "shopping_basket_outlined",
    sub: [
      {
        icon: "i-Clock-3",
        name: "Product List",
        link: "/admin-ecommerce/product-list",
        type: "link",
      },
      {
        icon: "i-Clock-4",
        name: "Product Grid",
        link: "/admin-ecommerce/product-grid",
        type: "link",
      },
      {
        icon: "i-Clock-4",
        name: "Create Product",
        link: "/admin-ecommerce/create-product",
        type: "link",
      },
      {
        icon: "i-Clock-4",
        name: "Add Product Media",
        link: "/admin-ecommerce/add-product-media",
        type: "link",
      },
    ],
  },
];