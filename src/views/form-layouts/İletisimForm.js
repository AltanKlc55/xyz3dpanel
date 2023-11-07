import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TrendingUp from 'mdi-material-ui/TrendingUp'
import { useState } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'

const IletisimForm = ({data,dataRes}) => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedBannerFile, setSelectedBannerFile] = useState("");
  const [file, setFile] = useState("");
  const [bannerfile, setBannerFile] = useState("");
  const [telefon,setTelefon] = useState("");
  const [telefonSirket,setTelefonSirket] = useState("");
  const [slogan,setSlogan] = useState("");
  const [email,setEmail] = useState("");
  const [adres,setAdres] = useState("");
  const imagesOld = {};

  useEffect(() => {
    setSelectedImage("/uploads/"+data[0]?.iletisim_gorsel);
    setSelectedBannerFile("/uploads/"+data[0]?.banner);
    setTelefon(data[0]?.tel_no);
    setTelefonSirket(data[0]?.tel_no_sirket);
    setSlogan(data[0]?.slogan);
    setEmail(data[0]?.email);
    setAdres(data[0]?.adres);
  },[data])

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const telefonTxt = (event) => {
    setTelefon(event.target.value);
  }

  const telefonSirketTxt = (event) => {
    setTelefonSirket(event.target.value);
  }

  const sloganTxt = (event) => {
    setSlogan(event.target.value);
  }

  const emailTxt = (event) => {
    setEmail(event.target.value);
  }

  const adressTxt = (event) => {
    setAdres(event.target.value);
  }


  const onSubmit = async () => {

    const formData = new FormData();
    console.log(file);
    if(file !== ""){
    try {
      formData.append("iletisimImg", file.name);
    } catch (error) {
      console.log(error);
    }
    }else{
      const txt = file.split('/')
      imagesOld["iletisimImg"] = txt[2];
    }

    if(bannerfile !== ""){
      try {
        formData.append("bannerImg", bannerfile.name);
      } catch (error) {
        console.log(error);
      }
    }else{
      const txt = selectedBannerFile.split('/')
       imagesOld["bannerImg"] = txt[2];
    }

    const responseImg = await fetch('/api/newfileupload', {
      method: 'POST',
      body: formData,
    });
    
    const newimg = await responseImg.json();
    console.log(newimg);


    const postData = {
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        telefon: telefon,
        telefonSirket: telefonSirket,
        slogan: slogan,
        email: email,
        adres: adres,
        banner:bannerfile.length === 0 ? selectedBannerFile.split('/')[2] : bannerfile.name,
        iletisimGorsel:file.length === 0 ? selectedImage.split('/')[2] : file.name
      })
    }
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_NEXT_PUBLUC_URL}/api/iletisim`,postData)
    const response = await res.json();
    console.log(response);
    dataRes();
  };

  return (
    <Card>
      <CardHeader title='Sayfa İçerikleri' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid mt={10} item xs={6}>
              <TextField fullWidth label='Telefon Numarası' placeholder='Telefon Numarası' value={telefon} onChange={telefonTxt} />
            </Grid>
            <Grid mt={10} item xs={6}>
              <TextField fullWidth label='Telefon Numarası (Şirket)' placeholder='Telefon Numarası (Şirket)' value={telefonSirket} onChange={telefonSirketTxt} />
            </Grid>
            <Grid mt={10} item xs={6}>
              <TextField fullWidth label='Slogan' placeholder='Slogan' value={slogan} onChange={sloganTxt} />
            </Grid>
            <Grid mt={10} item xs={6}>
              <TextField fullWidth label='Email' placeholder='Email' value={email} onChange={emailTxt} />
            </Grid>
            <Grid mt={10} item xs={12}>
              <TextField fullWidth label='Adres' placeholder='Adres' value={adres}  onChange={adressTxt} />
            </Grid>
            {
              // Medyalar 
            }

            <Grid item xs={12}>
              <Typography mt={10} variant='h6'>
                Medya Alanı
              </Typography>
            </Grid>



            <Grid style={{ textAlign: "center" }} item xs={6}>
              <Button component="label" variant="contained" startIcon={<TrendingUp />}
                style={{ marginBottom: 20 }}>
                Banner Görseli Yükle
                <Input style={{ display: "none" }} type="file"
                  onChange={(e) => {
                    setBannerFile(e.target.files?.[0])
                    setSelectedBannerFile(window.URL.createObjectURL(e.target.files?.[0]));
                  }}
                />
              </Button>

              {selectedBannerFile !== "" ?
                <Image
                  src={selectedBannerFile}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
                : ""}

            </Grid>

            <Grid style={{ textAlign: "center" }} item xs={6}>
              <Button component="label" variant="contained" startIcon={<TrendingUp />}
                style={{ marginBottom: 20 }}
              >
                İletişim Görseli Yükle
                <Input style={{ display: "none" }} type="file" onChange={(e) => {
                  setFile(e.target.files?.[0])
                  setSelectedImage(window.URL.createObjectURL(e.target.files?.[0]));
                }} />
              </Button>

              {selectedImage !== "" ?
                <Image
                  src={selectedImage}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
                : ""}

            </Grid>

            {
              // Medyalar End
            }

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
                <Button type='submit' onClick={onSubmit} variant='contained' size='large'>
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

export default IletisimForm;
