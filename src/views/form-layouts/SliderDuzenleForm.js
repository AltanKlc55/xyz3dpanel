import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TrendingUp from 'mdi-material-ui/TrendingUp'
import { useState } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'

const SliderDuzenleForm = ({dataUpdates,closeModal,reDatas}) => {

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [selectedBannerFile, setSelectedBannerFile] = useState("/uploads/"+dataUpdates.banner);
  const [uploading, setUploading] = useState(false);
  const [bannerfile, setBannerFile] = useState([]);
  const [sayfaBasligi, setSayfaBasligi] = useState(dataUpdates.baslik);
  const [sliderBtnTxt, setSliderBtnTxt] = useState(dataUpdates.slider_btn_txt);
  const [sliderBtnLink, setSlidetBtnLink] = useState(dataUpdates.slider_btn_link);
  const imagesOld = {};

  console.log(dataUpdates);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);


  const baslikHandleChange = (event) => {
    setSayfaBasligi(event.target.value);
  }

  const sliderBtnTxtChange = (event) => {
    setSliderBtnTxt(event.target.value);
  }

  const sliderBtnLinkChange = (event) => {
    setSlidetBtnLink(event.target.value);
  }

  const onSubmit = async () => {
    setUploading(true);
    const formData = new FormData();

    if(bannerfile !== dataUpdates.banner || dataUpdates.banner === ""){
        try {
          formData.append("bannerImg", bannerfile);
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
        id:dataUpdates.id,
        sliderBaslik: sayfaBasligi,
        sliderBtnTxt: sliderBtnTxt,
        sliderBtnLink: sliderBtnLink,
        banner:bannerfile.length === 0 ? selectedBannerFile.split('/')[2] : bannerfile.name,
      })
    }
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_NEXT_PUBLUC_URL}/api/slider`,postData)
    const response = await res.json();
    console.log(response);
    reDatas();
    closeModal();
  };


  return (
    <Card>
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>

            <Grid mt={3} item xs={12}>
              <TextField fullWidth label='Slider Başlığı' placeholder='Slider Başlığı' value={sayfaBasligi} onChange={baslikHandleChange} />
            </Grid>

            <Grid mt={3} item xs={12}>
              <TextField fullWidth label='Slider Button Metni' placeholder='Slider Button Metni' value={sliderBtnTxt} onChange={sliderBtnTxtChange} />
            </Grid>

            <Grid mt={3} item xs={12}>
              <TextField fullWidth label='Slider Button Link' placeholder='Slider Button Link' value={sliderBtnLink} onChange={sliderBtnLinkChange} />
            </Grid>

            {
              // Medyalar 
            }

            <Grid item xs={12}>
              <Typography mt={10} variant='h6'>
                Medya Alanı
              </Typography>
            </Grid>


            <Grid style={{ textAlign: "center" }} item xs={12}>
              <Button component="label" variant="contained" startIcon={<TrendingUp />}
                style={{ marginBottom: 20 }}>
                Slider Görseli Yükle
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


            {
              // Medyalar End
            }

            <Grid style={{ textAlign: "center" }} item xs={12}>
                <Button type='submit' onClick={onSubmit} variant='contained' size='large'>
                  Kaydet
                </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default SliderDuzenleForm;
