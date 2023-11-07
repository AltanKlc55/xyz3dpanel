import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { Box, CardHeader } from '@mui/material'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react'
import BloglarForm from '../../views/form-layouts/BloglarForm'
import SektorlerDuzenleForm from '../../views/form-layouts/SektorlerDuzenleForm'
import TableStickyHeaderSektorler from '../../views/tables/TableStickyHeaderSektorler'

const MUITable = () => {

  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [updatedData,setUpdatedData] = useState([])
  const [rand,setRand] = useState();
    

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const handleUpdateOpen = (event,data) => {
    setOpenUpdate(true);
    setUpdatedData(data);
    console.log(data);
  }

  const handleUpdateClose = () => {
    setOpenUpdate(false);
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "%90",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    overflow: 'auto',
    height:700,
    pt: 2,
    px: 4,
    pb: 3,
  };

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
       fetch(`${process.env.NEXT_PUBLIC_NEXT_PUBLUC_URL}/api/blog`,
    postData);
    const response = await res.json();
    setTableData(response.hizmetler);
  }

  useEffect(() => {
      getDatas();
   },[rand])
  
   const handleClick = async (id) => {
     console.log(id)
      const deleteData = {
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          id: id,
          action:"delete"
        })
      }
      const res = await fetch(`${process.env.NEXT_PUBLIC_NEXT_PUBLUC_URL}/api/blog`,deleteData);
      const response = await res.json();
      console.log(response);
      rastgeleSayiUret();
   }
  
  return (
    <Grid container spacing={6}>
      <Grid item xs={10}>
        <Typography variant='h5'>
          <Link>
            Bloglar
          </Link>
        </Typography>
        <Typography variant='body2'>Blogları ekleyip çıkartıp düzenleyin..</Typography>
      </Grid>
      <Grid item xs={2}>
      <Button onClick={handleOpen}>Blog Ekle</Button>

      <Modal
           open={openUpdate}
           onClose={handleUpdateClose}
           aria-labelledby="child-modal-title"
           aria-describedby="child-modal-description"
         >
         <Box sx={{ ...style, width: 800 }}>
           <h2 id="child-modal-title">Yeni Hizmet Ekle</h2>
              <SektorlerDuzenleForm dataUpdates={updatedData} reDatas={rastgeleSayiUret} closeModal={handleUpdateClose}/>
           <Button onClick={handleUpdateClose} >İptal</Button>
         </Box>
       </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 800 }}>
          <h2 id="child-modal-title">Yeni Blog Ekle</h2>
             <BloglarForm reDatas={rastgeleSayiUret} closeModal={handleClose}/>
          <Button onClick={handleClose}>İptal</Button>
        </Box>
      </Modal>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader title='Bloglar Tablosu' titleTypographyProps={{ variant: 'h6' }} />
          <TableStickyHeaderSektorler data={tableData} handleClickFunc={handleClick} openDuzenleModal={handleUpdateOpen} />
        </Card>
      </Grid>

    </Grid>
  )
}

export default MUITable
