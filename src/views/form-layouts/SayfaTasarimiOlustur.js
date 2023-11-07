// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TasarimInnerForm from './TasarimInnerForm'
import { useEffect } from 'react'

const SayfaTasarimiOlustur = () => {
    const [elements, setElements] = useState();
    const [random, setRandomValue] = useState();
    const mockElements = [];
    const [elementData, setElementData] = useState(mockElements);

    const elementsHandler = (event) => {
        console.log(event.target.value);
        setElements(event.target.value);
        const min = 1;
        const max = 100;
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomValue(random);
    }

    const createHandler = () => {
        mockElements.push(...elementData, { name: "", type: elements, defaultValue: "" });
        setElementData(mockElements);
        console.log(mockElements);
    }

    const deleteItemHandler = (x) => {
        const newElemetData = elementData.splice(x, 1);
        const newArray = elementData.filter(item => item !== newElemetData);
        setElementData(newArray);
        console.log(newArray);

    }

    return (
        <Card>
            <CardHeader title='Sayfa Tasarımı Oluştur' titleTypographyProps={{ variant: 'h6' }} />

            <CardContent>
                <p> Bu alandan sayfa içerisinde bulunacak olan yapıların elementleri eklenmektedir... </p>

                <form onSubmit={e => e.preventDefault()}>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                        </Grid>
                        <Grid item xs={10}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor='form-layouts-basic-password'>Element Seçin</InputLabel>
                                <Select
                                    label="Element Seçin"
                                    placeholder='Element Seçin'
                                    onChange={elementsHandler}
                                >
                                    <MenuItem value="input">Input (Kısa Metinler İçin)</MenuItem>
                                    <MenuItem value="select">Select (Kategorisel Seçimler vb. İçin)</MenuItem>
                                    <MenuItem value="textarea">TextArea (İçerik yazmak vb. işlemler için)</MenuItem>
                                    <MenuItem value="image">Görsel Seçim Aracı</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={2} style={{ justifyContent: "center", alignItems: "center" }}>
                            <Button onClick={createHandler} style={{ alignSelf: "center", marginTop: 5 }} size="large" variant="contained" >
                                Ekle
                            </Button>
                        </Grid>


                        {elementData.map((x, i) => {
                            return (
                                <Grid key={i} item xs={3}>
                                    <TasarimInnerForm data={x} deleteItem={() => deleteItemHandler(i)} />
                                </Grid>
                            )
                        })}


                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    gap: 5,
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Button type='submit' variant='contained' size='large'>
                                    Kaydet
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>

            </CardContent>
        </Card>
    )
}

export default SayfaTasarimiOlustur
