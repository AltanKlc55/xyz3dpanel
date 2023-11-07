import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import IletisimForm from '../../views/form-layouts/İletisimForm'
import { useEffect, useState } from 'react'

const MUITable = () => {

  const [tableData, setTableData] = useState([]);
  const [rand,setRand] = useState();

  const rastgeleSayiUret = () => {
    setRand(Math.floor(Math.random()*(100 - 300 + 1)) + 100);
  };

  const getDatas = async () => {
    const postData = {
      method:"GET",
      headers:{
        "Content-Type":"application/json",
      }
    }
    const res = await 
       fetch(`${process.env.NEXT_PUBLIC_NEXT_PUBLUC_URL}/api/iletisim`,
    postData);
    const response = await res.json();
    setTableData(response.hizmetler);
  }



  useEffect(() => {
      getDatas();
   },[rand])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link>
            İletişim
          </Link>
        </Typography>
        <Typography variant='body2'>İletişim Sayfasını Düzenleyin</Typography>
      </Grid>


      <Grid item xs={12}>
        <Card>
           <IletisimForm dataRes={rastgeleSayiUret} data={tableData}/>   
        </Card>
      </Grid>

    </Grid>
  )
}

export default MUITable
