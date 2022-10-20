import React from "react"
import Taro from "@tarojs/taro"
import { View } from "@tarojs/components"
import * as echarts from "../../components/ec-canvas/echarts"
import "./echarts.scss"

const initChart = (canvas, width, height) => {
    const chart = echarts.init(canvas, null, {
        width: width,
        height: height
    })
    canvas.setChart(chart)
    return chart
}

const initPie = (canvas, width, height) => {
    const chart = initChart(canvas, width, height)
    const data = [
        { value: 10, name: "已完成课程" },
        { value: 90, name: "未完成课程" }
    ];
    const option = {
        series: [
            {
                name: "访问来源",
                type: "pie",
                center: ["50%", "50%"],
                radius: [0, "60%"],
                data: data,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                },
                label: {
                    formatter: '{c}'
                }
            }
        ],
        legend: {
            data: ["已完成课程", "未完成课程"],
            bottom: 'bottom'
        },
    }
    chart.setOption(option)
    return chart
}
const initLine = (canvas, width, height) => {
    const chart = initChart(canvas, width, height)
    const option = {
        tooltip: {
            trigger: "axis"
        },
        legend: {
            data: ["已完成课程", "已完成作业"],
            bottom: 0
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "10%",
            containLabel: true
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"]
        },
        yAxis: {
            type: "value"
        },
        series: [
            {
                name: "已完成课程",
                type: "line",
                // stack: "Total",
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: "已完成作业",
                type: "line",
                // stack: "Total",
                data: [220, 182, 191, 234, 290, 330, 310]
            }
        ]
    };
    chart.setOption(option)
    return chart
}
export default class Echarts extends React.Component {
    state = {
        ecPie: {
            onInit: initPie
        },
        ecLine: {
            onInit: initLine
        }
    }
    render() {
        return (
            <View className="echarts">
                <ec-canvas id="mychart-line" canvas-id="myline" ec={this.state.ecLine}></ec-canvas>
                <ec-canvas id="mychart-pie-course" canvas-id="mypie" ec={this.state.ecPie}></ec-canvas>
                <ec-canvas id="mychart-pie-homework" canvas-id="mypie" ec={this.state.ecPie}></ec-canvas>
            </View>
        )
    }
}