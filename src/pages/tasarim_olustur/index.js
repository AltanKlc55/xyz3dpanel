// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import FormLayoutsBasic from 'src/views/form-layouts/FormLayoutsBasic'
import FormLayoutsIcons from 'src/views/form-layouts/FormLayoutsIcons'
import FormLayoutsSeparator from 'src/views/form-layouts/FormLayoutsSeparator'
import FormLayoutsAlignment from 'src/views/form-layouts/FormLayoutsAlignment'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import SayfaTasarimiOlustur from 'src/views/form-layouts/SayfaTasarimiOlustur'

const FormLayouts = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <SayfaTasarimiOlustur />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts
