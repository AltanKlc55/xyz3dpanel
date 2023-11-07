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
import TextEditor from '../components/ckEditor/TextEditor'
import Image from 'next/image'

const SektorlerForm = ({reDatas,closeModal}) => {

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [selectedBannerFile, setSelectedBannerFile] = useState("");
  const [data, setData] = useState("");
  const [uploading, setUploading] = useState(false);
  const [bannerfile, setBannerFile] = useState();
  const [sektorlerFile, setSektortlerFile] = useState();
  const [selectSektorlerFile, setSelectSektorlerFile] = useState("");
  const [sayfaBasligi, setSayfaBasligi] = useState();
  const [hakkimizdaContent, setHakkimizdaContent] = useState();
  const imagesOld = {};


  const handleChangeHakkimizda = (newContent) => {
    setHakkimizdaContent(newContent);
  }

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const baslikHandleChange = (event) => {
    setSayfaBasligi(event.target.value);
  }


  const onSubmit = async () => {
    setUploading(true);
    const formData = new FormData();

    try {
      formData.append("bannerImg", bannerfile);
    } catch (error) {
      console.log(error);
    }

    try {
      if (!sektorlerFile) return;
      formData.append("sektorImg", sektorlerFile);
    } catch (error) {
      console.log(error);
    }


    const responseImg = await fetch('/api/newfileupload', {
      method: 'POST',
      body: formData,
    });

    const newimg = await responseImg.json();
    const images = newimg.files;

    const banner = images.filter(item => item.fieldName === "bannerImg");
    const img = images.filter(item => item.fieldName === "sektorImg");

    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sektorIcerigi: hakkimizdaContent,
        sektorBasligi: sayfaBasligi,
        banner: banner.length === 0 ? selectedBannerFile.split('/')[2] : banner[0].name,
        img: img.length === 0 ? selectSektorlerFile.split('/')[2] : img[0].name
      })
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_NEXT_PUBLUC_URL}/api/sektorler`, postData)
    const response = await res.json();
    reDatas();
    closeModal();
  };

  useEffect(() => {
    console.log(data);
  }, [data])


  return (
    <Card>
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>

            {
              // Contentler 
            }

            <Grid mt={3} item xs={12}>
              <TextField fullWidth label='Sektör Başlığı' placeholder='Sektör Başlığı' onChange={baslikHandleChange} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h6' style={{ paddingBottom: 10 }}> Sektör İçeriği </Typography>
              <TextEditor editorStatus={editorLoaded} onChange={handleChangeHakkimizda} />
            </Grid>

            {
              // Contentler End
            }

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
                style={{ marginBottom: 20 }} >

                Sektör Görseli Yükle
                <Input style={{ display: "none" }} type="file"
                  onChange={(e) => {
                    setSektortlerFile(e.target.files?.[0])
                    setSelectSektorlerFile(window.URL.createObjectURL(e.target.files?.[0]));
                  }}
                />
              </Button>

              {selectSektorlerFile !== "" ?
                <Image
                  src={selectSektorlerFile}
                  width={500}
                  height={500}
                />
                : ""}

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

export default SektorlerForm;
