function getMaxIndex(arr) {
  return arr.indexOf(Math.max(...arr));
}

// X축 데이터 (날짜)
const labels = [
"26.2.1",
"26.2.2",
"26.2.3",
"26.2.4",
"26.2.5",
"26.2.6",
"26.2.7",
"26.2.8",
"26.2.9",
"26.2.10",
"26.2.11",
"26.2.12",
"26.2.13",
"26.2.14",
"26.2.15",
"26.2.16",
"26.2.17",
"26.2.18",
"26.2.19",
"26.2.20",
"26.2.21",
"26.2.22",
"26.2.23",
"26.2.24",
"26.2.25",
"26.2.26",
"26.2.27",
"26.2.28",
"26.3.1",
"26.3.2",
"26.3.3",
"26.3.4",
"26.3.5",
"26.3.6",
"26.3.7",
"26.3.8",
"26.3.9",
"26.3.10",
"26.3.11",
"26.3.12",
"26.3.13",
"26.3.14",
"26.3.15",
"26.3.16",
"26.3.17",
"26.3.18",
"26.3.19",
"26.3.20",
"26.3.21",
"26.3.22",
"26.3.23",
"26.3.24",
"26.3.25",
"26.3.26",
"26.3.27",
"26.3.28",
"26.3.29",
"26.3.30",
"26.3.31",
"26.4.1",
"26.4.2",
"26.4.3",
"26.4.4",
"26.4.5",
"26.4.6",
"26.4.7",
"26.4.8",
"26.4.9",
"26.4.10",
"26.4.11",
"26.4.12",
"26.4.13",
"26.4.14",
"26.4.15",
"26.4.16",
"26.4.17",
"26.4.18",
"26.4.19",
"26.4.20",
"26.4.21",
"26.4.22",
"26.4.23",
"26.4.24",
"26.4.25",
"26.4.26",
"26.4.27",
"26.4.28",
"26.4.29",
"26.4.30",
"26.5.1",
"26.5.2",
"26.5.3",
"26.5.4",
"26.5.5",
"26.5.6",
"26.5.7",
"26.5.8",
"26.5.9",
"26.5.10",
"26.5.11",
"26.5.12",
"26.5.13",
"26.5.14",
"26.5.15",
"26.5.16",
"26.5.17",
"26.5.18",
"26.5.19",
"26.5.20",
"26.5.21",
"26.5.22",
"26.5.23",
"26.5.24",
"26.5.25",
"26.5.26",
"26.5.27",
"26.5.28",
"26.5.29",
"26.5.30",
"26.5.31"
];

    // "2/1/26": "0.09",
    // "2/2/26": "0.13",
    // "2/3/26": "0.14",
    // "2/4/26": "0.1",
    // "2/5/26": "0.14",
    // "2/6/26": "0.17",
    // "2/7/26": "0.23",
    // "2/8/26": "0.2",
    // "2/9/26": "0.22",
    // "2/10/26": "0.29",
    // "2/11/26": "0.32",
    // "2/12/26": "0.22",
    // "2/13/26": "0.1",
    // "2/14/26": "0.14",
    // "2/15/26": "0.12",
    // "2/16/26": "0.09",
    // "2/17/26": "0.12",
    // "2/18/26": "0.17",
    // "2/19/26": "0.24",
    // "2/20/26": "0.12",
    // "2/21/26": "0.07",
    // "2/22/26": "0.09",
    // "2/23/26": "0.15",
    // "2/24/26": "0.02",
    // "2/25/26": "-0.12",
    // "2/26/26": "-0.25",
    // "2/27/26": "-0.31",
    // "2/28/26": "-0.38",
    // "3/1/26": "-0.41",
    // "3/2/26": "-0.37",
    // "3/3/26": "-0.35",
    // "3/4/26": "-0.38",
    // "3/5/26": "-0.41",
    // "3/6/26": "-0.35",
    // "3/7/26": "-0.25",
    // "3/8/26": "-0.19",
    // "3/9/26": "-0.07",
    // "3/10/26": "1.3",
    // "3/11/26": "1.6",
    // "3/12/26": "1.8",
    // "3/13/26": "1.83",
    // "3/14/26": "1.65",
    // "3/15/26": "1.82",
    // "3/16/26": "1.65",
    // "3/17/26": "1.61",
    // "3/18/26": "1.57",
    // "3/19/26": "1.5",
    // "3/20/26": "1.38",
    // "3/21/26": "1.37",
    // "3/22/26": "1.44",
    // "3/23/26": "1.42",
    // "3/24/26": "1.45",
    // "3/25/26": "1.47",
    // "3/26/26": "1.55",
    // "3/27/26": "1.4",
    // "3/28/26": "1.34",
    // "3/29/26": "1.2",
    // "3/30/26": "1.32",
    // "3/31/26": "1.44",
    // "4/1/26": "1.53",
    // "4/2/26": "1.39",
    // "4/3/26": "1.21",
    // "4/4/26": "1.05",
    // "4/5/26": "1.01",
    // "4/6/26": "0.89",
    // "4/7/26": "0.83",
    // "4/8/26": "0.86",
    // "4/9/26": "0.92",
    // "4/10/26": "0.92",
    // "4/11/26": "0.92",
    // "4/12/26": "0.92",
    // "4/13/26": "0.88",
    // "4/14/26": "0.93",
    // "4/15/26": "0.99",
    // "4/16/26": "1.02",
    // "4/17/26": "0.9",
    // "4/18/26": "0.84",
    // "4/19/26": "0.78",
    // "4/20/26": "0.72",
    // "4/21/26": "0.66",
    // "4/22/26": "0.65",
    // "4/23/26": "0.69",
    // "4/24/26": "0.73",
    // "4/25/26": "0.82",
    // "4/26/26": "0.72",
    // "4/27/26": "0.67",
    // "4/28/26": "0.58",
    // "4/29/26": "0.52",
    // "4/30/26": "0.48",
    // "5/1/26": "0.44",
    // "5/2/26": "0.44",
    // "5/3/26": "0.47",
    // "5/4/26": "0.52",
    // "5/5/26": "0.58",
    // "5/6/26": "0.59",
    // "5/7/26": "0.6",
    // "5/8/26": "0.59",
    // "5/9/26": "0.54",
    // "5/10/26": "0.55",
    // "5/11/26": "0.51",
    // "5/12/26": "0.4",
    // "5/13/26": "0.37",
    // "5/14/26": "0.38",
    // "5/15/26": "0.44",
    // "5/16/26": "0.42",
    // "5/17/26": "0.42",
    // "5/18/26": "0.4",
    // "5/19/26": "0.38",
    // "5/20/26": "0.46",
    // "5/21/26": "0.52",
    // "5/22/26": "0.43",
    // "5/23/26": "0.28",
    // "5/24/26": "0.38",
    // "5/25/26": "0.43",
    // "5/26/26": "0.35",
    // "5/27/26": "0.34",
    // "5/28/26": "0.38",
    // "5/29/26": "0.32",
    // "5/30/26": "0.3",
    // "5/31/26": "0.08"
const data_arr = 
[
0.09,
0.13,
0.14,
0.1,
0.14,
0.17,
0.23,
0.2,
0.22,
0.29,
0.32,
0.22,
0.1,
0.14,
0.12,
0.09,
0.12,
0.17,
0.24,
0.12,
0.07,
0.09,
0.15,
0.02,
-0.12,
-0.25,
-0.31,
-0.38,
-0.41,
-0.37,
-0.35,
-0.38,
-0.41,
-0.35,
-0.25,
-0.19,
-0.07,
1.3,
1.6,
1.8,
1.83,
1.65,
1.82,
1.65,
1.61,
1.57,
1.5,
1.38,
1.37,
1.44,
1.42,
1.45,
1.47,
1.55,
1.4,
1.34,
1.2,
1.32,
1.44,
1.53,
1.39,
1.21,
1.05,
1.01,
0.89,
0.83,
0.86,
0.92,
0.92,
0.92,
0.92,
0.88,
0.93,
0.99,
1.02,
0.9,
0.84,
0.78,
0.72,
0.66,
0.65,
0.69,
0.73,
0.82,
0.72,
0.67,
0.58,
0.52,
0.48,
0.44,
0.44,
0.47,
0.52,
0.58,
0.59,
0.6,
0.59,
0.54,
0.55,
0.51,
0.4,
0.37,
0.38,
0.44,
0.42,
0.42,
0.4,
0.38,
0.46,
0.52,
0.43,
0.28,
0.38,
0.43,
0.35,
0.34,
0.38,
0.32,
0.3,
0.08,
]

function nullifyUpToIndex(arr, index) {
  return arr.map((value, i) => (i < index ? null : value));
}

function nullifyDownToIndex(arr, index) {
  return arr.map((value, i) => (i > index ? null : value));
}

// 데이터 세트 (이미지와 유사한 곡선을 그리도록 근사치 적용)
// const dataHistorical = [-0.2, -0.1, -0.2, -0.8, -0.6, 1.6, null, null, null, null, null, null, null, null, null];
// const dataPredict = [null, null, null, null, null, 1.6, 1.4, 1.1, 1.2, 0.6, 0.3, 0.4, 0.1, 0.1, -0.1];
const max_index = getMaxIndex(data_arr);

const dataHistorical = nullifyDownToIndex(data_arr,max_index);
const dataPredict = nullifyUpToIndex(data_arr,max_index);

const point_date = labels[max_index];
const point_val = data_arr[max_index];

//const gap_index = labels.length - 10;
const gap_index = 109;
const gap_date = labels[gap_index];
const gap_val = data_arr[gap_index];


// 가능 범위(밴드)를 그리기 위한 상단/하단 경계 데이터
// const dataUpper = [null, null, null, null, null, 1.6, 1.8, 1.7, 1.6, 1.3, 1.0, 1.1, 0.9, 0.9, 0.6];
// const dataLower = [null, null, null, null, null, 1.6, 0.8, 0.6, -0.4, -0.3, -0.8, -0.6, -0.5, -0.8, -1.2];


function addIncreasingFromIndex(arr, startIndex, add) {
  let increment = 0;

  for (let i = startIndex; i < arr.length; i++) {
    arr[i] += increment;
    increment+=add;
  }

  return arr;
}

// function addIncreasingFromIndex(arr, startIndex) {
//   return arr.map((value, i) =>
//     i >= startIndex ? value + (i - startIndex) : value
//   );
// }

const dataUpper = addIncreasingFromIndex([...dataPredict],max_index,0.01);
const dataLower = addIncreasingFromIndex([...dataPredict],max_index,-0.01);

const ctx = document.getElementById('spikeChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Upper Bound',
                data: dataUpper,
                borderColor: 'transparent',
                pointRadius: 0,
                fill: false,
                tension: 0.3
            },
            {
                label: 'Lower Bound',
                data: dataLower,
                borderColor: 'transparent',
                backgroundColor: 'rgba(185, 45, 68, 0.25)',
                fill: '-1',
                pointRadius: 0,
                tension: 0.3
            },
            {
                label: 'Predicted',
                data: dataPredict,
                borderColor: '#b92d44',
                borderWidth: 3,
                pointRadius: 0,
                tension: 0.3
            },
            {
                label: 'Historical',
                data: dataHistorical,
                borderColor: '#666666',
                borderWidth: 3,
                pointRadius: 0,
                tension: 0.3
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // 이 옵션을 위해 wrapper에 높이를 고정했습니다.
        layout: {
            padding: { right: 20 }
        },
        plugins: {
            legend: { display: false },
            annotation: {
                annotations: {
                    spikeVertical: {
                        type: 'line',
                        xMin: point_date,
                        xMax: point_date,
                        yMin: -2,
                        yMax: point_val,
                        borderColor: '#3d8b40',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        arrowHeads: {
                            end: { display: true, fill: true, backgroundColor: '#3d8b40' }
                        }
                    },
                    spikeText: {
                        type: 'label',
                        xValue: point_date,
                        yValue: -1.7,
                        content: 'Spike Point ('+point_date+')',
                        color: '#3d8b40',
                        font: { size: 14, weight: 'bold' },
                        xAdjust: 75,
                    },
                    horizontalLine: {
                        type: 'line',
                        yMin: point_val,
                        yMax: point_val,
                        xMin: point_date,
                        xMax: '26.5.31',
                        borderColor: '#3d8b40',
                        borderWidth: 3,
                        borderDash: [8, 8]
                    },
                    gapArrow: {
                        type: 'line',
                        xMin: gap_date,
                        xMax: gap_date,
                        yMin: gap_val,
                        yMax: point_val,
                        borderColor: '#b92d44',
                        borderWidth: 2,
                        arrowHeads: {
                            start: { display: true, fill: true, backgroundColor: '#b92d44' },
                            end: { display: true, fill: true, backgroundColor: '#b92d44' }
                        }
                    },
                    gapText: {
                        type: 'label',
                        xValue: labels[gap_index+5],
                        yValue: 0.85,
                        content: '+$'+ Number((point_val-gap_val).toFixed(2)),
                        color: '#b92d44',
                        font: { size: 16, weight: 'bold' },
                        backgroundColor: 'rgba(255,255,255,0.7)',
                        padding: 2
                    }
                }
            }
        },
        scales: {
            y: {
                min: -2,
                max: 2,
                ticks: {
                    stepSize: 1
                },
                title: {
                    display: true,
                    text: 'Unit: $/MMBtu',
                    font: { weight: 'bold', size: 13 }
                },
                grid: { color: '#e0e0e0' }
            },
            x: {
                grid: {
                    display: true,
                    color: '#e0e0e0',
                    drawBorder: true
                },
                ticks: {
                    // callback: function(value, index, values) {
                    //     const label = labels[index];
                    //     if (['26.2.1', '26.2.28', '26.3.31', '26.4.30', '26.5.31'].includes(label)) {
                    //         return label;
                    //     }
                    //     return '';
                    // },
                    // font: { weight: 'bold' }
                    autoSkip: true,     // 기본값이지만 명시 가능
                    maxTicksLimit: 10   // 최대 표시 개수 제한
                }
            }
        }
    }
});