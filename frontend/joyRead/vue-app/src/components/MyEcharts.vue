<template>
<div>
    <div class="echarts-box">
        <el-button plain icon="el-icon-arrow-left" class="turnleft"></el-button>
        {{month}}月阅读统计
        <el-button plain icon="el-icon-arrow-right" class="turnright"></el-button>
    </div>
    <div id="myChart" style = "height:200px;padding:0;"></div>
</div>
</template>

<script>
export default {
    name: 'eCharts',
    data () {
        return {
            month: '3',
        }
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            var myChart = this.$echarts.init(document.getElementById('myChart'))
            myChart.setOption({
                backgroundColor:'#feb353',
                tooltip: {},
                legend: {
                    data:['页数'],
                    icon: "circle",
                    textStyle:{
                        color:'white',
                    },

                },
                xAxis: {
                    data:['3/1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
                    axisLine: {
                        lineStyle: {
                            color:'#ffffff',
                        }
                    },
                    axisLabel: {
                        interval:1,
                    }
                    
                },
                yAxis: {
                    "show":false,
                },
                grid: {
                    top:'4%',
                    left:'3%',
                    right:'3%',
                    bottom:'10%',
                    containLabel: false,
                },
                series: [{
                    type: 'bar',
                    data: [21,0,43,25,44,11,0,43,34,63,53,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    label: {
                        show:true,
                        position: 'top',
                        textStyle: {
                            color:'white',
                            fontSize:9,
                        },
                        formatter: function (params) {
                                    if (params.value > 0) {
                                        return params.value;
                                    } else {
                                        return '';
                                    }
                                },
                    },
                    itemStyle: { 
                        emphasis: {
                            barBorderRadius: 11
                        },
                        normal: {
                            barBorderRadius: 11
                        }
                    },
                    color: {
                        type:'linear',
                        x:0,
                        y:0,
                        x2:0,
                        y2:1,
                        colorStops:[{
                            offset:0,color: 'rgba(255,255,255,1)'  //0处的颜色
                        },
                        {
                            offset:0.8,color:'rgba(255,255,255,0.8)'
                        },    
                        {
                            offset:1,color: 'rgba(255,255,255,0)' //100%处的颜色
                        }],
                        gloablCoord: false
                    }
                }],
            })
        }        
    }
}
</script>

<style lang="scss" scoped>
.echarts-box {
    background-color: #feb353;
    padding: 0px;
    margin-bottom:0;
    text-align: center;
    color:#ffffff;
    margin-top: 10px;
    font-size: 16px;
}
.turnleft {
    padding:0;
    background: rgba(0,0,0,0);
    border:0;
    float:left;
    margin-top:4px;
    margin-left: 6px;
    font-size: 18px;
}
.turnright {
    padding:0;
    background: rgba(0,0,0,0);
    border:0;
    float:right;
    margin-top:4px;
    margin-right: 6px;
    font-size: 18px;
}
</style>