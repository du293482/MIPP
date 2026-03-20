function getAvr(arr) {
    const avg = arr.reduce((sum, value) => sum + value, 0) / arr.length;
    return Number(avg.toFixed(2));
}

const ctx = document.getElementById('mi-view-canvas').getContext('2d');

// CME 가격-3월 1주
// CME 가격-3월 2주
// CME 가격-3월 3주
// MI Base-3월 2주
// MI Base-3월 3주

const tension = 0.2;

const datasets = [
    {
        label: 'CME 가격-3월 1주',
        data: [13.365,16.485,15.175,14.31,13.75,13.51,13.075,12.91,12.97],
        borderColor: '#cccccc',
        borderDash: [6,6],
        tension: tension
    },
    {
        label: 'CME 가격-3월 2주',
        data: [16.23,21.145,20.1,19.085,18.435,18.135,17.925,17.71,17.705],
        borderColor: '#999999',
        borderDash: [6,6],
        tension: tension
    },
    {
        label: 'CME 가격-3월 3주',
        data: [15.275,19.275,18.6,18.065,17.485,17.16,16.775,16.635,16.785],
        borderColor: '#707070',
        borderWidth: 3,
        tension: tension
    },
    {
        label: 'MI Base-3월 2주',
        data: [16.5,20,19.5,18.8,18,17.6,17.2,16.8,17],
        borderColor: '#f4b400',
        borderWidth: 3,
        tension: tension
    },
    {
        label: 'MI Base-3월 3주',
        data: [15.5,19,18.5,17.8,17,16.6,16.2,15.8,16],
        borderColor: '#7cb342',
        borderWidth: 3,
        tension: tension
    }
];

const data = {
    labels: ["4월","5월","6월","7월","8월","9월","10월","11월","12월"],
    datasets: datasets
};

const chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        layout: {
            padding: {left: 10}
        },
        // animations: {
        //     // 선이 그려지는 y축 경로 애니메이션
        //     y: {
        //         type: 'number',
        //         duration: 2000,
        //         easing: 'easeOutQuart',
        //         from: (ctx) => ctx.chart.scales.y.max, // 위에서 아래로 내려오거나
        //         // from: (ctx) => ctx.chart.scales.y.min, // 아래에서 위로 올라오는 효과
        //     },
        //     // 투명도 조절로 부드럽게 등장
        //     opacity: {
        //         easing: 'linear',
        //         duration: 1500,
        //         from: 0,
        //         to: 1
        //     }
        // },
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Unit: $/MMBtu',
                align: 'start',
                padding: {
                    top: 10,
                    bottom: 10,
                    left: 50
                }
            },

            annotation: {
                annotations: {

                    avg1: {
                        type: 'label',
                        xValue: data.labels[1],
                        yValue: datasets[0].data[1],
                        xAdjust: 0,
                        backgroundColor: '#ccccccaa',
                        content: ['평균 $']+getAvr(datasets[0].data),
                        color: '#333',
                        padding: 6,
                        borderRadius: 6
                    },

                    avg2: {
                        type: 'label',
                        xValue: data.labels[2],
                        yValue: datasets[1].data[2],
                        backgroundColor: '#999999aa',
                        content: ['평균 $']+getAvr(datasets[1].data),
                        color: '#333',
                        padding: 6,
                        borderRadius: 6
                    },

                    avg3: {
                        type: 'label',
                        xValue: data.labels[3],
                        yValue: datasets[2].data[3],
                        backgroundColor: '#707070aa',
                        content: ['평균 $'+getAvr(datasets[2].data)],
                        color: '#fff',
                        padding: 6,
                        borderRadius: 6
                    },

                    avg4: {
                        type: 'label',
                        xValue: data.labels[4],
                        yValue: datasets[3].data[4],
                        backgroundColor: '#f4b400aa',
                        content: ['평균 $'+getAvr(datasets[3].data)],
                        color: '#666',
                        padding: 6,
                        borderRadius: 6
                    },

                    avg5: {
                        type: 'label',
                        xValue: data.labels[5],
                        yValue: datasets[4].data[5],
                        backgroundColor: '#7cb342aa',
                        content: ['평균 $'+getAvr(datasets[4].data)],
                        color: '#666',
                        padding: 6,
                        borderRadius: 6
                    }
                }
            }
        },

        interaction: {
            mode: 'nearest',
            intersect: false
        },
        scales: {
            y: {
                min: 10,
                max: 24
            },

        }
    }
});

// 🔥 커스텀 legend (기존 그대로)
const legendContainer = document.getElementById('custom-legend');

datasets.forEach((ds, index) => {
    const item = document.createElement('div');
    item.className = 'legend-item';

    const colorBox = document.createElement('div');
    colorBox.className = 'legend-color';

    if (ds.borderDash) {
        colorBox.style.borderTop = '3px dashed ' + ds.borderColor;
    } else {
        colorBox.style.background = ds.borderColor;
    }

    const label = document.createElement('span');
    label.innerText = ds.label;

    item.appendChild(colorBox);
    item.appendChild(label);
    legendContainer.appendChild(item);

    item.onclick = () => {
        const meta = chart.getDatasetMeta(index);
        meta.hidden = meta.hidden === null ? !chart.data.datasets[index].hidden : null;

        item.classList.toggle('inactive');
        chart.update();
    };

    item.onmouseenter = () => {
        chart.data.datasets.forEach((d, i) => {
            d.borderWidth = i === index ? 5 : 1;
            d.borderColor = i === index ? d.borderColor : d.borderColor + '55';
        });
        chart.update();
    };

    item.onmouseleave = () => {
        chart.data.datasets.forEach((d) => {
            d.borderWidth = 3;
            d.borderColor = d.borderColor.replace('55','');
        });
        chart.update();
    };
});