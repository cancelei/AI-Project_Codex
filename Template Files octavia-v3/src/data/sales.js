const primary = "rgba(var(--v-theme-primary))";
const primary50 = "rgba(var(--v-theme-primary-50))";
const primary100 = "rgba(var(--v-theme-primary-100))";
const primary200 = "rgba(var(--v-theme-primary-200))";
const primary300 = "rgba(var(--v-theme-primary-300))";
const primary400 = "rgba(var(--v-theme-primary-400))";
const primary500 = "rgba(var(--v-theme-primary-500))";
const primary600 = "rgba(var(--v-theme-primary-600))";
const primary700 = "rgba(var(--v-theme-primary-700))";
const muteColor = "#88A6C9";
const info = "rgba(var(--v-theme-info))";
const warning = "rgba(var(--v-theme-warning))";

const grey300 = "rgba(var(--v-theme-grey-300))";
const grey400 = "rgba(var(--v-theme-grey-400))";

export const salesOne = {
  series: [
    { name: "Total", data: [10, 30, 85, 49, 55, 35, 60] },
    { name: "Average", data: [50, 34, 45, 79, 35, 70, 120] },
  ],
  chartOptions: {
    chart: {
      height: 250,
      width: "100%",
      type: "line",
      dropShadow: {
        enabled: false,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: { show: false },
      stacked: false,
    },
    colors: [primary, grey400],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    grid: { show: true, borderColor: grey300 },
    markers: {
      size: 1,
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      labels: {
        style: {
          colors: "#88A6C9",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: "#88A6C9",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 500,
        },
      },
      min: 5,
      max: 120,
    },
  },
};

export const salesTwo = {
  colors: [grey400, primary, warning, info],
  series: [44, 55, 41, 17],
  chartOptions: {
    chart: {
      type: "donut",
    },
    legend: {
      position: "bottom",
      background: "transparent",
      sparkline: { enabled: true },
      fontFamily: "Montserrat, sans-serif",
      horizontalAlign: "center",
      fontSize: "13px",
      fontWeight: 500,
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["Transactions", "Payouts", "Sales", "Reports"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};
const chartSeries = [{ name: "Orders", data: [10, 30, 49, 55, 30, 70, 100] }];
const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
var series = {
  monthDataSeries1: {
    prices: [
      8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85,
      8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25,
      8600.65, 8881.1, 9340.85,
    ],
    dates: [
      "13 Nov 2017",
      "14 Nov 2017",
      "15 Nov 2017",
      "16 Nov 2017",
      "17 Nov 2017",
      "20 Nov 2017",
      "21 Nov 2017",
      "22 Nov 2017",
      "23 Nov 2017",
      "24 Nov 2017",
      "27 Nov 2017",
      "28 Nov 2017",
      "29 Nov 2017",
      "30 Nov 2017",
      "01 Dec 2017",
      "04 Dec 2017",
      "05 Dec 2017",
      "06 Dec 2017",
      "07 Dec 2017",
      "08 Dec 2017",
    ],
  },
};
export const salesThree = {
  colors: [primary],
  series: [
    {
      name: "STOCK ABC",
      data: series.monthDataSeries1.prices,
    },
  ],
  chartOptions: {
    chart: {
      type: "area",
      height: 230,
      width: "100%",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    xaxis: {
      type: "datetime",
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: "#88A6C9",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 500,
        },
      },
      categories: series.monthDataSeries1.dates,
    },
    yaxis: {
      show: false,
    },

    legend: {
      horizontalAlign: "left",
    },
  },
};

export const salesFour = {
  series: [44, 55, 67],
  colors: [primary, info, warning],
  chartOptions: {
    series: [44, 55, 67],
    colors: [primary, info, warning],
    chart: {
      height: 350,
      width: "100%",
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          dataLabels: {
            name: { show: false },
            value: { show: false },
          },
          track: {
            background: grey300,
          },
          hollow: { size: "20%" },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249;
            },
          },
        },
      },
    },
    labels: ["Apples", "Oranges", "Bananas"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
  },
};
