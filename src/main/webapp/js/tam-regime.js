const rawData = {
    "2/1/26": 19.5, "2/2/26": 19.4, "2/3/26": 19.2, "2/4/26": 19,
    "2/5/26": 19, "2/6/26": 19.3, "2/7/26": 19.8, "2/8/26": 20.1,
    "2/9/26": 20.5, "2/10/26": 19.8, "2/11/26": 19, "2/12/26": 20.6,
    "2/13/26": 22, "2/14/26": 22.2, "2/15/26": 22.2, "2/16/26": 22.7,
    "2/17/26": 23.5, "2/18/26": 23.7, "2/19/26": 24, "2/20/26": 24,
    "2/21/26": 24.3, "2/22/26": 24.3, "2/23/26": 24.5, "2/24/26": 24.3,
    "2/25/26": 24.1, "2/26/26": 24, "2/27/26": 24.2, "2/28/26": 23.7,
    "3/1/26": 23.3, "3/2/26": 23.1, "3/3/26": 22.8, "3/4/26": 22.9,
    "3/5/26": 23, "3/6/26": 22.8, "3/7/26": 22.7, "3/8/26": 22.5,
    "3/9/26": 21.7, "3/10/26": 22.5
};

function formatDate(dateStr) {
    const [month, day, year] = dateStr.split('/');
    return `${year}.${parseInt(month)}.${parseInt(day)}`;
}

const r_labels = Object.keys(rawData).map(formatDate);
const values = Object.values(rawData);

const r_ctx = document.getElementById('regimeChart').getContext('2d');

const chart = new Chart(r_ctx, {
    type: 'line',
    data: {
        labels: r_labels,
        datasets: [{
            data: values,
            // borderColor: '#555',
            // borderWidth: 3,
            // tension: 0.2
        }]
    },
    options: {
        responsive: true,
        elements: {
            point: {radius: 0,},
        },
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: '동북아 LNG 수요 (단위: Mt)',
                font: { size: 13 }
            },
            annotation: {
                annotations: {
                    zText: {
                        type: 'label',
                        xValue: '26.2.6',
                        yValue: 12,
                        content: '|Z| : 1.7',
                        color: '#777',
                        font: { size: 12 },
                        xAdjust: 0,
                    },
                    spikeText: {
                        type: 'label',
                        xValue: '26.2.28',
                        yValue: 26,
                        content: 'Spike Point',
                        color: '#777',
                        font: { size: 12 },
                        xAdjust: 0,
                        yAdjust: -3,
                    },
                    dateText: {
                        type: 'label',
                        xValue: '26.2.28',
                        yValue: 25,
                        content: '(26.2.28)',
                        color: '#777',
                        font: { size: 12 },
                        xAdjust: 0,
                    },
                }
            }
        },
        scales: {
            y: {
                min: 10,
                max: 30,
                ticks: { stepSize: 7 }
            },
            x: {
                ticks: { maxTicksLimit: 8 },
                grid: { display: false }
            }
        }
    },
    plugins: [{
        id: 'customText',
        afterDraw(chart) {
            const {ctx} = chart;
            ctx.save();
            ctx.font = '12px';
            ctx.fillStyle = 'green';

            ctx.fillText('|Z| : 1.7', 80, 350);
            ctx.fillText('Spike Point', 650, 150);
            ctx.fillText('(26.3.10)', 650, 170);

            ctx.restore();
        }
    }]
});