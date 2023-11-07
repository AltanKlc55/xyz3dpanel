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
import axios from 'axios'

const HakkimizdaLayout = ({dataAll,randData}) => {

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedBannerFile, setSelectedBannerFile] = useState("");
  const [file, setFile] = useState("");
  const [bannerfile, setBannerFile] = useState("");
  const [hakkimizdaFile, setHakkimizdaFile] = useState("");
  const [selectHakkimizdaFile, setSelectHakkimizdaFile] = useState("");
  const [sayfaBasligi, setSayfaBasligi] = useState("");
  const [nedenBizBasligi, setNedenBizBasligi] = useState("");
  const [nedenBizContent, setNedenBizContent] = useState("");
  const [hakkimizdaContent, setHakkimizdaContent] = useState("");
  const imagesOld = {};

  useEffect(() => {
    setSelectedImage("/uploads/"+dataAll[0]?.neden_biz_gorsel);
    setSelectedBannerFile("/uploads/"+dataAll[0]?.banner);
    setSelectHakkimizdaFile("/uploads/"+dataAll[0]?.hakkimizda_gorsel);
    setNedenBizContent(dataAll[0]?.neden_biz_icerik);
    setHakkimizdaContent(dataAll[0]?.hakkimizda_icerik);
    setSayfaBasligi(dataAll[0]?.baslik)
    setNedenBizBasligi(dataAll[0]?.neden_biz_baslik);
  }, [dataAll])

  const handleChangeHakkimizda = (newContent) => {
    setHakkimizdaContent(newContent);
  }

  const handleChangeNedenBiz = (newContent) => {
    setNedenBizContent(newContent);
  }

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const baslikHandleChange = (event) => {
    setSayfaBasligi(event.target.value);
  }

  const nedenBizHandleChange = (event) => {
    setNedenBizBasligi(event.target.value);
  }

  const onSubmit = async () => {

    const formData = new FormData();
    
    if(file === ""){
    try {
      formData.append("nedenBiz", file);
    } catch (error) {
      console.log(error);
    }
    }else{
      const txt = file.split('/')
       imagesOld["nedenBiz"] = txt[2];
    }

   if(hakkimizdaFile === ""){
    try {
      formData.append("hakkimizdaImg", hakkimizdaFile);
    } catch (error) {
      console.log(error);
    }
    }else{
      const txts = selectHakkimizdaFile.split('/')
       imagesOld["hakkimizdaImg"] = txts[2];
    }

    if(bannerfile === ""){
      try {
        formData.append("bannerImg", bannerfile);
      } catch (error) {
        console.log(error);
      }
      }else{
        const txts = selectedBannerFile.split('/')
         imagesOld["bannerImg"] = txts[2];
      }


  const responseImg = await fetch('/api/newfileupload', {
    method: 'POST',
    body: formData,
  });
 
    const newimg = await responseImg.json();
    const images = newimg.files;
    const banner = images.filter(item => item.fieldName === "bannerImg");
    const img = images.filter(item => item.fieldName === "hakkimizdaImg");
    const nedenbiz = images.filter(item => item.fieldName === "nedenBiz");

    console.log(img);

    const postData = {
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        nedenBizContent: nedenBizContent,
        hakkimizdaContent: hakkimizdaContent,
        nedenBizBasligi: nedenBizBasligi,
        sayfaBasligi: sayfaBasligi,
        banner:bannerfile.length === 0 ? selectedBannerFile.split('/')[2] : bannerfile.name,
        hakkimizda_gorsel:hakkimizdaFile.length === 0 ? selectHakkimizdaFile.split('/')[2] : hakkimizdaFile.name,
        neden_biz_gorsel:file.length === 0 ? selectedImage.split('/')[2] : file.name
      })
    }
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_NEXT_PUBLUC_URL}/api/hakkimizda`,postData)
    const response = await res.json();
    console.log(response);
    randData();
  };


  return (
    <Card>
      <CardHeader title='Sayfa İçerikleri' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>

            {
              // Contentler 
            }

            <Grid mt={10} item xs={12}>
              <TextField fullWidth label='Sayfa Başlığı' placeholder='Sayfa Başlığı' value={sayfaBasligi} onChange={baslikHandleChange} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h6' style={{ paddingBottom: 10 }}> Hakkımızda İçeriği </Typography>
              <TextEditor editorStatus={editorLoaded} contentsforupdate={dataAll[0]?.hakkimizda_icerik} onChange={handleChangeHakkimizda} />
            </Grid>

            <Grid mt={10} item xs={12}>
              <TextField fullWidth label='Neden Biz Başlığı' placeholder='Neden Biz Başlığı' value={nedenBizBasligi} onChange={nedenBizHandleChange} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h6' style={{ paddingBottom: 10 }}> Neden Biz ? İçeriği </Typography>
              <TextEditor editorStatus={editorLoaded} contentsforupdate={dataAll[0]?.neden_biz_icerik} onChange={handleChangeNedenBiz} />
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


            <Grid style={{ textAlign: "center" }} item xs={4}>

              <Button component="label" variant="contained" startIcon={<TrendingUp />}
                style={{ marginBottom: 20 }} >

                Hakkımızda Görseli Yükle
                <Input style={{ display: "none" }} type="file"
                  onChange={(e) => {
                    setHakkimizdaFile(e.target.files?.[0])
                    setSelectHakkimizdaFile(window.URL.createObjectURL(e.target.files?.[0]));
                  }}
                />
              </Button>

              {selectHakkimizdaFile !== "" ?
                <Image
                  src={selectHakkimizdaFile}
                  width={500}
                  height={500}
                />
                : ""}

            </Grid>

            <Grid style={{ textAlign: "center" }} item xs={4}>
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

            <Grid style={{ textAlign: "center" }} item xs={4}>
              <Button component="label" variant="contained" startIcon={<TrendingUp />}
                style={{ marginBottom: 20 }}
              >
                Neden Biz ? Görseli Yükle
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

export default HakkimizdaLayout;
