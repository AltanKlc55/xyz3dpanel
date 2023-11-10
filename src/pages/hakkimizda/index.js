import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import HakkimizdaLayout from 'src/views/form-layouts/HakkimizdaLayout'
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
       fetch(`${process.env.NEXT_PUBLIC_NEXT_PUBLUC_URL}/api/hakkimizda`,
    postData);
    const response = await res.json();
    setTableData(response.hakkimizda);
  }



  useEffect(() => {
      getDatas();
   },[rand])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link>
            Hakkımzıda
          </Link>
        </Typography>
        <Typography variant='body2'>Hakkımızda Sayfasını Düzenleyin</Typography>
      </Grid>


      <Grid item xs={12}>
        <Card>
           <HakkimizdaLayout dataAll={tableData} randData={rastgeleSayiUret}/>   
        </Card>
      </Grid>

    </Grid>
  )
}

export default MUITable
