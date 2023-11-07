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
import TextEditor from '../components/ckEditor/TextEditor'
import Image from 'next/image'
import axios from 'axios'

const HizmetlerDuzenleForm = ({dataUpdates,closeModal,reDatas}) => {

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedBannerFile, setSelectedBannerFile] = useState("/uploads/"+dataUpdates.banner);
  const [data, setData] = useState("");
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState();
  const [bannerfile, setBannerFile] = useState("/uploads/"+dataUpdates.banner);
  const [hakkimizdaFile, setHakkimizdaFile] = useState("/uploads/"+dataUpdates.img);
  const [selectHakkimizdaFile, setSelectHakkimizdaFile] = useState("/uploads/"+dataUpdates.img);
  const [sayfaBasligi, setSayfaBasligi] = useState(dataUpdates.name);
  const [nedenBizBasligi, setNedenBizBasligi] = useState();
  const [nedenBizContent, setNedenBizContent] = useState();
  const [hakkimizdaContent, setHakkimizdaContent] = useState(dataUpdates.content);
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

   if(hakkimizdaFile !== dataUpdates.img || dataUpdates.img === ""){
    try {
      if (!hakkimizdaFile) return;
      formData.append("hizmetImg", hakkimizdaFile);
    } catch (error) {
      console.log(error);
    }
  }else{
    const txts = selectHakkimizdaFile.split('/')
     imagesOld["hizmetImg"] = txts[2];
  }

  const responseImg = await fetch('/api/newfileupload', {
    method: 'POST',
    body: formData,
  });
 
    const newimg = await responseImg.json();
    const images = newimg.files;
    const banner = images.filter(item => item.fieldName === "bannerImg");
    const img = images.filter(item => item.fieldName === "hizmetImg");


    const postData = {
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        id:dataUpdates.id,
        hizmetIcerigi: hakkimizdaContent,
        hizmetBasligi: sayfaBasligi,
        banner:banner.length === 0 ? selectedBannerFile.split('/')[2] : banner[0].name,
        img:img.length === 0 ? selectHakkimizdaFile.split('/')[2] : img[0].name
      })
    }
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_NEXT_PUBLUC_URL}/api/hizmetler`,postData)
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

            {
              // Contentler 
            }

            <Grid mt={3} item xs={12}>
              <TextField fullWidth label='Hizmet Başlığı' placeholder='Hizmet Başlığı' value={sayfaBasligi} onChange={baslikHandleChange} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h6' style={{ paddingBottom: 10 }}> Hizmet İçeriği </Typography>
              <TextEditor editorStatus={editorLoaded} contentsforupdate={dataUpdates.content} onChange={handleChangeHakkimizda} />
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

                Hizmet Görseli Yükle
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

export default HizmetlerDuzenleForm;
