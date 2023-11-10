import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'


const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <StatisticsCard />
        </Grid>

      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard