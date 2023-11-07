import multiparty from 'multiparty';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method === 'POST') {
    const form = new multiparty.Form();
    const yuklenenDosyalar = []; 

    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: 'Dosya yükleme hatası' });
        return;
      }

      const uploadDir = path.join(process.cwd(),"/public/uploads");

      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      for (const dosyaKey of Object.keys(files)) {
        const dosya = files[dosyaKey][0];
        const dosyaYolu = path.join(uploadDir, dosya.originalFilename);
        fs.renameSync(dosya.path, dosyaYolu);
        yuklenenDosyalar.push({
          name: dosya.originalFilename,
          fieldName:dosya.fieldName
        });
      }

      console.log('Yüklenen Dosyalar:', yuklenenDosyalar);

      res.status(200).json({message: 'Dosyalar başarıyla yüklendi ve kaydedildi',files:yuklenenDosyalar });
    });
  } else {
    res.status(405).json({ error: 'Yanlış yöntem' });
  }
};