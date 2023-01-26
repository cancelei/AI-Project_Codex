import NotFound from "../views/NotFound.vue";

// /** @type {import('vue-router').RouterOptions['routes']} */

export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../layout/index.vue"),
    redirect: "/session/signin",
    meta: {
      title: "Home",
    },

    children: [
      {
        path: "/dashboards",
        name: "Dashboards",
        component: () => import("../views/dashboards/index.vue"),
        meta: {
          title: "Dashboard",
        },
        children: [
          {
            path: "/dashboards/learning-management",
            name: "Learning Management",
            component: () =>
              import("../views/dashboards/LearningManagement.vue"),
            meta: {
              requiresAuth: true,
            },
          },
          {
            path: "/dashboards/job-management",
            name: "Job Management",
            component: () => import("../views/dashboards/JobManagement.vue"),
          },
          {
            path: "/dashboards/crm",
            name: "Crm",
            component: () => import("../views/dashboards/Crm.vue"),
          },
          {
            path: "/dashboards/sales",
            name: "Sales",
            component: () => import("../views/dashboards/Sales.vue"),
          },
        ],
      },
      {
        path: "/accounts",
        name: "Accounts",
        component: () => import("../views/accounts/index.vue"),
        meta: {
          title: "Accounts",
        },
        children: [
          {
            path: "/accounts/basic-information",
            name: "Basic Information",
            component: () => import("../views/accounts/BasicInformation.vue"),
          },
          {
            path: "/accounts/password",
            name: "Password",
            component: () => import("../views/accounts/Password.vue"),
          },
          {
            path: "/accounts/preferences",
            name: "Preferences",
            component: () => import("../views/accounts/Preferences.vue"),
          },
          {
            path: "/accounts/recent-devices",
            name: "Recent Devices",
            component: () => import("../views/accounts/RecentDevices.vue"),
          },
          {
            path: "/accounts/notifications",
            name: "Notifications",
            component: () => import("../views/accounts/Notifications.vue"),
          },
          {
            path: "/accounts/two-step-verification",
            name: "two-step-verification",
            component: () =>
              import("../views/accounts/TwoStepVerification.vue"),
          },
          {
            path: "/accounts/connected-account",
            name: "Connected Account",
            component: () => import("../views/accounts/ConnectedAccount.vue"),
          },
          {
            path: "/accounts/social-account",
            name: "Social Account",
            component: () => import("../views/accounts/SocialAccount.vue"),
          },
          {
            path: "/accounts/billing",
            name: "Billing",
            component: () => import("../views/accounts/Billing.vue"),
          },
          {
            path: "/accounts/statements",
            name: "Statements",
            component: () => import("../views/accounts/Statements.vue"),
          },
          {
            path: "/accounts/referrals",
            name: "Referrals",
            component: () => import("../views/accounts/Referrals.vue"),
          },
          {
            path: "/accounts/api-keys",
            name: "Api Keys",
            component: () => import("../views/accounts/ApiKeys.vue"),
          },
          {
            path: "/accounts/delete-account",
            name: "Delete Account",
            component: () => import("../views/accounts/DeleteAccount.vue"),
          },
        ],
      },
      {
        path: "/ecommerce",
        name: "Ecommerce",
        component: () => import("../views/ecommerce/index.vue"),
        meta: {
          title: "Ecommerce",
        },
        children: [
          {
            path: "/ecommerce/shop",
            name: "Shop",
            component: () => import("../views/ecommerce/Shop.vue"),
          },
          {
            path: "/ecommerce/product-details",
            name: "Product Details",
            component: () => import("../views/ecommerce/ProductDetails.vue"),
          },
          {
            path: "/ecommerce/reviews",
            name: "Reviews",
            component: () => import("../views/ecommerce/Reviews.vue"),
          },
          {
            path: "/ecommerce/payment-complete",
            name: "Payment Complete",
            component: () => import("../views/ecommerce/PaymentComplete.vue"),
          },
          {
            path: "/ecommerce/checkout",
            name: "Checkout",
            component: () => import("../views/ecommerce/Checkout.vue"),
          },
          {
            path: "/ecommerce/billing-address",
            name: "Billing Address",
            component: () => import("../views/ecommerce/BillingAddress.vue"),
          },
          {
            path: "/ecommerce/payment",
            name: "Payment",
            component: () => import("../views/ecommerce/Payment.vue"),
          },
          {
            path: "/ecommerce/reviews",
            name: "Reviews",
            component: () => import("../views/ecommerce/Reviews.vue"),
          },
        ],
      },
      {
        path: "/apps",
        name: "Apps",
        component: () => import("../views/apps/index.vue"),
        meta: {
          title: "Apps",
        },
        children: [
          {
            path: "/apps/chat",
            name: "Chat",
            component: () => import("../views/apps/Chat.vue"),
          },
          {
            path: "/apps/inbox",
            name: "Inbox",
            component: () => import("../views/apps/Inbox.vue"),
          },
          {
            path: "/apps/todo",
            name: "Todo",
            component: () => import("../views/apps/Todo.vue"),
          },
          {
            path: "/apps/kanban",
            name: "Kanban",
            component: () => import("../views/apps/Kanban.vue"),
          },
          {
            path: "/apps/calendar",
            name: "Kanban",
            component: () => import("../views/apps/Calendar.vue"),
          },
        ],
      },
      {
        path: "/profile",
        name: "Profile",
        component: () => import("../views/profile/index.vue"),
        meta: {
          title: "Profile",
        },
        children: [
          {
            path: "/profile/overview",
            name: "Overview",
            component: () => import("../views/profile/Overview.vue"),
          },
          {
            path: "/profile/projects",
            name: "Projects",
            component: () => import("../views/profile/Projects.vue"),
          },
          {
            path: "/profile/campaign",
            name: "Campaign",
            component: () => import("../views/profile/Campaign.vue"),
          },
          {
            path: "/profile/documents",
            name: "Documents",
            component: () => import("../views/profile/Documents.vue"),
          },
          {
            path: "/profile/connection",
            name: "Connection",
            component: () => import("../views/profile/Connection.vue"),
          },
          {
            path: "/profile/activity",
            name: "Activity",
            component: () => import("../views/profile/Activity.vue"),
          },
        ],
      },
      {
        path: "/invoice",
        name: "Invoice",
        component: () => import("../views/invoice/index.vue"),
        meta: {
          title: "Invoice",
        },
        children: [
          {
            path: "/invoice/invoice-details-one",
            name: "Invoice Details One",
            component: () => import("../views/invoice/InvoiceDetailsOne.vue"),
          },
          {
            path: "/invoice/invoice-details-two",
            name: "Invoice Details Two",
            component: () => import("../views/invoice/InvoiceDetailsTwo.vue"),
          },
          {
            path: "/invoice/create-invoice",
            name: "Create Invoice",
            component: () => import("../views/invoice/CreateInvoice.vue"),
          },
          {
            path: "/invoice/invoice-list",
            name: " Invoice List",
            component: () => import("../views/invoice/InvoiceList.vue"),
          },
        ],
      },

      {
        path: "/pricing",
        name: "Pricing",
        meta: {
          title: "Pricing",
        },
        component: () => import("../views/Pricing.vue"),
      },
      {
        path: "/user",
        name: "User",
        component: () => import("../views/user/index.vue"),
        meta: {
          title: "User",
        },
        children: [
          {
            path: "/user/user-list",
            name: "User List",
            component: () => import("../views/user/UserList.vue"),
          },
          {
            path: "/user/user-grid",
            name: "User Grid",
            component: () => import("../views/user/UserGrid.vue"),
          },
          {
            path: "/user/contact-list",
            name: "Contact List",
            component: () => import("../views/user/ContactList.vue"),
          },
          {
            path: "/user/contact-grid",
            name: "Contact Grid",
            component: () => import("../views/user/ContactGrid.vue"),
          },
        ],
      },
      {
        path: "/admin-ecommerce",
        name: "Admin Ecommerce",
        component: () => import("../views/adminEcommerce/index.vue"),
        meta: {
          title: "Admin Ecommerce",
        },
        children: [
          {
            path: "/admin-ecommerce/product-list",
            name: "Product List",
            component: () => import("../views/adminEcommerce/ProductList.vue"),
          },
          {
            path: "/admin-ecommerce/product-grid",
            name: "Product Grid",
            component: () => import("../views/adminEcommerce/ProductGrid.vue"),
          },
          {
            path: "/admin-ecommerce/create-product",
            name: "Create Product",
            component: () =>
              import("../views/adminEcommerce/CreateProduct.vue"),
          },
          {
            path: "/admin-ecommerce/add-product-media",
            name: "Add Product Media",
            component: () =>
              import("../views/adminEcommerce/AddproductMedia.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/session",
    name: "Session",
    component: () => import("../views/session/index.vue"),
    meta: {
      title: "Session",
    },
    children: [
      {
        path: "/session/signin",
        name: "Sign In",
        component: () => import("../views/session/SignIn.vue"),
      },
      {
        path: "/session/register",
        name: "Register",
        component: () => import("../views/session/Register.vue"),
      },
      {
        path: "/session/register-2",
        name: "Register Two",
        component: () => import("../views/session/RegisterTwo.vue"),
      },
      {
        path: "/session/forgot",
        name: "Forgot",
        component: () => import("../views/session/Forgot.vue"),
      },
      {
        path: "/session/forgot-2",
        name: "Forgot Two",
        component: () => import("../views/session/ForgotTwo.vue"),
      },
      {
        path: "/session/two-step-verification",
        name: "Two Step Verification",
        component: () => import("../views/session/TwoStepVerification.vue"),
      },
    ],
  },
  { path: "/:path(.*)", component: NotFound },
];
