import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'


const TasarimInnerForm = ({ data, deleteItem, index }) => {

    return (
        <Card>
            <Grid xs={10}>
                <CardHeader title='Özelleştir' />
            </Grid>
            <Grid xs={2}>
                <Button onClick={deleteItem}>
                    X
                </Button>
            </Grid>
            <CardContent>



                <TextField
                    fullWidth
                    type='text'
                    label='Başlık'
                    placeholder='Başlık'
                    value={data.name}
                    size='small'
                />

                <TextField
                    style={{ marginTop: 10 }}
                    fullWidth
                    type='text'
                    label='Veri Türü'
                    placeholder='Veri Türü'
                    value={data.type}
                    size='small'
                />

            </CardContent>
        </Card>
    )
}

export default TasarimInnerForm;