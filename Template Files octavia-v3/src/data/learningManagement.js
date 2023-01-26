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
const chartTwo = [primary, primary400, primary300];

export const dashboardOne = {
  series: [76],
  chartOptions: {
    colors: ["rgba(196, 181, 253, 1)", "#8b5cf6"],
    width: 100,
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -100,
        endAngle: 100,
        track: {
          background: primary100,
          // background: learningManagementTwo,
          strokeWidth: "97%",
        },
        dataLabels: {
          name: {
            fontSize: "13px",
            fontWeight: "500",
            fontFamily: "Montserrat, sans-serif",
            color: muteColor,
          },
          value: {
            offsetY: -30,
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: "Montserrat, sans-serif",
          },
        },

        hollow: {
          size: "60%",
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: "solid",
      colors: primary,
    },
    labels: ["Average Results"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
  },
};
export const dashboardTwo = {
  series: [
    { name: "Marketer", data: [22, 30, 46, 50, 46, 30, 22] },
    { name: "Developer", data: [36, 40, 56, 75, 56, 40, 36] },
    { name: "Manager", data: [50, 60, 70, 90, 70, 60, 50] },
  ],
  chartOptions: {
    colors: chartTwo,
    chart: {
      type: "bar",
      height: 300,
      width: "100%",
      stacked: true,
      toolbar: {
        show: false,
      },

      zoom: {
        enabled: true,
      },
    },
    dataLabels: { enabled: false },
    grid: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 9,
        columnWidth: "30%",
      },
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      // type: "datetime",
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      labels: {
        show: true,
        style: {
          colors: "#88A6C9",
          fontSize: "10px",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 5400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
    yaxis: { show: false },
    legend: {
      show: true,
      position: "bottom",
      fontFamily: "inherit",
      fontSize: "13px",
      fontWeight: 500,
      offsetY: 5,
      offsetX: 0,
      markers: {
        radius: 12,
      },
    },
    fill: {
      opacity: 1,
    },
  },
};
