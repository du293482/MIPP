const ctx = document.getElementById('mi-view-canvas');

const labels = [10,20,30,40,50,60,70];

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [1,2,3,4,5,6,7],
            borderColor: '#00ff00',
            backgroundColor: '#00aa00',
        },
        {
            label: 'Dataset 2',
            data: [7,6,5,4,3,2,1],
            borderColor: '#ff0000',
            backgroundColor: '#aa0000',
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,

        plugins: {
            legend: {
                position: 'top',
            },
            align: 'inner',
            title: {
                display: true,
                text: 'Unit: $/MMBtu'
            }
        }
    },
};

new Chart(ctx, {
    type: config.type,
    data: data,
    options: config.options
});