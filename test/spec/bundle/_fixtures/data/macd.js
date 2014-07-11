module.exports = {
  plot: [
    { date: new Date("2014-03-05"), macd: 0.11, signal: 0.27, difference: -0.16 },
    { date: new Date("2014-03-06"), macd: -0.12, signal: -0.09, difference: -0.02 },
    { date: new Date("2014-03-07"), macd: -0.03, signal: -0.13, difference: 0.10 }
  ],
  input: [
    { date: new Date(0), close: 459.99 },
    { date: new Date(1), close: 448.85 },
    { date: new Date(2), close: 446.06 },
    { date: new Date(3), close: 450.81 },
    { date: new Date(4), close: 442.8 },
    { date: new Date(5), close: 448.97 },
    { date: new Date(6), close: 444.57 },
    { date: new Date(7), close: 441.4 },
    { date: new Date(8), close: 430.47 },
    { date: new Date(9), close: 420.05 },
    { date: new Date(10), close: 431.14 },
    { date: new Date(11), close: 425.66 },
    { date: new Date(12), close: 430.58 },
    { date: new Date(13), close: 431.72 },
    { date: new Date(14), close: 437.87 },
    { date: new Date(15), close: 428.43 },
    { date: new Date(16), close: 428.35 },
    { date: new Date(17), close: 432.5 },
    { date: new Date(18), close: 443.66 },
    { date: new Date(19), close: 455.72 },
    { date: new Date(20), close: 454.49 },
    { date: new Date(21), close: 452.08 },
    { date: new Date(22), close: 452.73 },
    { date: new Date(23), close: 461.91 },
    { date: new Date(24), close: 463.58 },
    { date: new Date(25), close: 461.14 },
    { date: new Date(26), close: 452.08 },
    { date: new Date(27), close: 442.66 },
    { date: new Date(28), close: 428.91 },
    { date: new Date(29), close: 429.79 },
    { date: new Date(30), close: 431.99 },
    { date: new Date(31), close: 427.72 },
    { date: new Date(32), close: 423.2 },
    { date: new Date(33), close: 426.21 },
    { date: new Date(34), close: 426.98 },
    { date: new Date(35), close: 435.69 },
    { date: new Date(36), close: 434.33 },
    { date: new Date(37), close: 429.8 },
    { date: new Date(38), close: 419.85 },
    { date: new Date(39), close: 426.24 },
    { date: new Date(40), close: 402.8 },
    { date: new Date(41), close: 392.05 }
  ],
  expected: [
    { date: new Date(33), macd: -2.0705581900947436, signal: 3.037525868734014, difference: -5.108084058828758, zero: 0 },
    { date: new Date(34), macd: -2.6218423282567187, signal: 1.9056522293358675, difference: -4.527494557592586, zero: 0 },
    { date: new Date(35), macd: -2.3290667404547776, signal: 1.0587084353777385, difference: -3.387775175832516, zero: 0 },
    { date: new Date(36), macd: -2.1816321147928193, signal: 0.41064032534362693, difference: -2.5922724401364463, zero: 0 },
    { date: new Date(37), macd: -2.402626272866314, signal: -0.15201299429836135, difference: -2.2506132785679527, zero: 0 },
    { date: new Date(38), macd: -3.342121681352694, signal: -0.7900347317092279, difference: -2.552086949643466, zero: 0 },
    { date: new Date(39), macd: -3.5303631360773693, signal: -1.3381004125828562, difference: -2.192262723494513, zero: 0 },
    { date: new Date(40), macd: -5.507471248627155, signal: -2.171974579791716, difference: -3.335496668835439, zero: 0 },
    { date: new Date(41), macd: -7.851274228560726, signal: -3.3078345095455184, difference: -4.543439719015208, zero: 0 }
  ]
};