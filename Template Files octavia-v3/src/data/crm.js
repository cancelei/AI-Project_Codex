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

export const crmOne = {
  series: [
    { name: "Leads", data: [10, 30, 85, 49, 55, 35, 60] },
    { name: "Customers", data: [50, 34, 45, 79, 35, 70, 120] },
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
    colors: [primary, "#FFC675"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    grid: { show: false },
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
    legend: {
      position: "top",
      horizontalAlign: "center",
    },
  },
};

export const crmTwo = {
  series: [44, 55, 41, 17],
  chartOptions: {
    colors: ["#E5F3FD", "#FFC675", "#8C8DFF", "#FE8969"],
    chart: {
      type: "donut",
      height: "100%",
      width: "100%",
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
    labels: ["In Progress", "On Hold", "Upcoming", "Completed"],
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

export const tasks = {
  series: [
    {
      name: "Inflation",
      data: [50, 60, 70, 90, 70, 60, 50],
    },
  ],
  chartOptions: {
    colors: primary,
    chart: {
      stacked: true,
      height: 280,
      width: "100%",
      toolbar: { show: false },
      fontFamily: "Montserrat, sans-serif",
      type: "bar",
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 8,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },

    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      labels: { show: false },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    title: {
      text: "",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444",
      },
    },
  },
};
