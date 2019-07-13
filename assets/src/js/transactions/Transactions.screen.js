import React from 'react';
import ReactEcharts from 'echarts-for-react';
import {getAllTransactions} from "../api/TransactionsAPI";

const options = {
    title: {
        text: 'title text',
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['entrada', 'saida', 'média'],
    },
    toolbox: {
        feature: {
            saveAsImage: {},
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: ['xAxis data 1', 'xAxis data 2', 'xAxis data 3', 'xAxis data 4', 'xAxis data 5', 'xAxis data 6', 'xAxis data 7'],
        },
    ],
    yAxis: [
        {
            type: 'value',
        },
    ],
    series: [
        {
            name: '邮件营销',
            type: 'bar',
            data: [125, 132, 101, 134, 90, 230, 210],
        },
        {
            name: '联盟广告',
            type: 'bar',
            data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
            name: '视频广告',
            type: 'line',
            data: [150, 232, 201, 154, 190, 330, 410],
        },
    ],
};

const getOptions = async () => {
    const data = await getAllTransactions();
        
};

const Transactions = () => {


    return (
        <ReactEcharts
            // option={getOptions()}
            option={options}
            style={{ height: '700px', width: '100%' }}
            className="react_for_echarts"
        />
    );
}

export default Transactions;
