import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

import TableBasic from 'src/views/tables/TableBasic'
import TableDense from 'src/views/tables/TableDense'
import TableSpanning from 'src/views/tables/TableSpanning'
import TableCustomized from 'src/views/tables/TableCustomized'
import TableCollapsible from 'src/views/tables/TableCollapsible'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'

const MUITable = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link>
            Sayfalar
          </Link>
        </Typography>
        <Typography variant='body2'>Sayfalarınızı buradan düzenleyin</Typography>
      </Grid>


      <Grid item xs={12}>
        <Card>
          <CardHeader title='Sayfa Tablosu' titleTypographyProps={{ variant: 'h6' }} />
          <TableStickyHeader />
        </Card>
      </Grid>

    </Grid>
  )
}

export default MUITable
