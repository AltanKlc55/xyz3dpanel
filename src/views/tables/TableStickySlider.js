import { useState } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import { Button } from '@mui/material'


const TableStickySlider = ({ data,handleClickFunc,openDuzenleModal }) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
                <TableCell align={"center"} style={{width:50}}>
                  ID
                </TableCell>
               <TableCell align={"center"} style={{width:50}}>
                  Slider Başlığı
                </TableCell>
                <TableCell align={"center"} style={{width:150}}>
                  Slider Button Metni
                </TableCell>
                <TableCell align={"center"} style={{width:150}}>
                  Slider Button Link
                </TableCell>
                 <TableCell align={"center"} style={{width:150}}>
                  Banner
                </TableCell>
                <TableCell align={"center"} style={{width:300}}>
                  İşlem
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                  {data.map((column,index) => {
                    return (
                      <TableRow key={index} hover role='checkbox' tabIndex={-1}>
                       <TableCell >{column.id}</TableCell>
                       <TableCell >{column.baslik}</TableCell>
                       <TableCell >{column.slider_btn_txt}</TableCell>
                       <TableCell >{column.slider_btn_link}</TableCell>
                       <TableCell >{column.banner}</TableCell>
                       <TableCell style={{width:300,textAlign:"center"}}>
                        <div style={{flexDirection:"row"}}> 
                         <Button style={{color:"white",width:85,margin:5}} variant="contained" 
                         onClick={() => 
                         openDuzenleModal(column.id,column)}>Düzenle</Button>
                         <Button style={{color:"white",width:50,backgroundColor:"red"}} variant="contained" onClick={() => handleClickFunc(column.id)}>Sil</Button>
                        </div>
                       </TableCell>
                       </TableRow>
                    )
                  }
                )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableStickySlider
