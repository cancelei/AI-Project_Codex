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
// const chartTwo = ["#4F46E5", "#818CF8", "#A5B4FC"];

export const dashboardTwoOne = {
  series: ["+70"],
  chartOptions: {
    colors: [primary, primary100],
    chart: {
      type: "radialBar",
      sparkline: { enabled: true },
      stacked: true,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "69%",
        },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 8,
            fontSize: "18px",
            fontWeight: 600,

            color: primary,
            fontFamily: "Montserrat, sans-serif",
          },
        },
        track: {
          margin: 0,
          strokeWidth: "100%",
          background: primary100,
        },
      },
    },
    stroke: { curve: "smooth", lineCap: "round" },
  },
};
export const dashboardTwoTwo = {
  series: ["+50"],
  chartOptions: {
    colors: ["#8C8DFF", "#F4F4FF"],
    chart: {
      height: 120,
      width: 120,
      type: "radialBar",
      sparkline: { enabled: true },
      stacked: true,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "69%",
        },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 8,
            fontSize: "18px",
            fontWeight: 600,

            color: "#8C8DFF",
            fontFamily: "Montserrat, sans-serif",
          },
        },
        track: {
          margin: 0,
          strokeWidth: "100%",
          background: "#F4F4FF",
        },
      },
    },
    stroke: { curve: "smooth", lineCap: "round" },
  },
};

export const dashboardTwoThree = {
  colors: [primary],
  series: [
    {
      name: "series1",
      data: [20, 60, 28, 91, 42, 109, 100],
    },
  ],
  chartOptions: {
    chart: {
      height: 246,
      width: "100%",
      type: "area",
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    stroke: {
      curve: "smooth",
    },
    yaxis: {
      show: true,
      tickAmount: 4,

      labels: {
        style: {
          colors: muteColor,
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 500,
        },
      },
    },
    xaxis: {
      type: "datetime",
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: muteColor,
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 500,
        },
      },
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};
