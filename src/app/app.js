async function fetchData() {
    const response = await fetch("data.json");
    const data = await response.json();
    return data;
}

// Function to create bar chart
async function createChart() {
    const data = await fetchData();

    const labels = data.map((item) => item.day);
    const amounts = data.map((item) => item.amount);

    const ctx = document.getElementById("spending-chart").getContext("2d");
    const myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels,
            datasets: [
                {
                    label: "Amount",
                    data: amounts,
                    backgroundColor: (color) => {
                        console.log(color);
                        let colors =
                            color.index == 2
                                ? " hsl(186, 34%, 60%)"
                                : " hsl(10, 79%, 65%)";
                        return colors;
                    },
                    hoverBackgroundColor: (color) => {
                        let colors =
                            color.index >= 3
                                ? " hsl(27, 66%, 92%)"
                                : "  hsl(25, 47%, 15%)";
                        return colors;
                    },
                    borderColor: "transparent",
                    borderRadius: 5,
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                x: {
                    grid: {
                        drawOnChartArea: false,
                        drawBorder: false,
                        drawTicks: false,
                    },
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        display: false,
                    },
                    grid: {
                        drawTicks: false,
                        drawBorder: false,
                        drawOnChartArea: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },

                elements: {
                    bar: {
                        borderRadius: 10, // Add border-radius
                    },
                },
            },
        },
    });
}
createChart();
