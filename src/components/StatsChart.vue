<script setup>
    import { Bar } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
</script>
<template>
    <Bar
        :chart-data="chartData"
        :chart-options="options"
    />
</template>
<script>
export default {
    data() {
        return {
            chartData: {
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#E46651', , '#DD1B16'],
                        data: ['Advanced', 'Advanced', 'Intermediate']
                    },
                ]
            },
            options: {
                scales: {
                    x:{
                        labels: ["VueJS", "ReactJS", "NextJS"],
                    },
                    y: {
                        type:"category",
                        labels: ['Beginner', "Intermediate", "Advanced"]
                    }
                }
            }
        }
    }
}
</script>