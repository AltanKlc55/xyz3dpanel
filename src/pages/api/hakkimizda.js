import { query } from "src/lib/db"
export default async function handler(req, res) {

    if (req.method === "GET") {
        const hizmetler = await query({
            query: "SELECT * FROM tbl_hakkimizda where id = 1",
            values: [],
        });
        res.status(200).json({ hizmetler: hizmetler });
    }


    if(req.method === "PUT"){
        let message = "";
        const datas = req.body;
        const baslik = datas.sayfaBasligi;
        const icerik = datas.hakkimizdaContent;
        const nedenbizBaslik = datas.nedenBizBasligi;
        const nedenbizContent = datas.nedenBizContent;
        const banner = datas.banner;
        const nedenbizImg = datas.neden_biz_gorsel;
        const hakkimizdaImg = datas.hakkimizda_gorsel;

          const updateHizmet = await query({
              query: "UPDATE tbl_hakkimizda SET baslik = ?, hakkimizda_gorsel = ?, hakkimizda_icerik = ?, neden_biz_baslik = ?,neden_biz_icerik = ?,neden_biz_gorsel = ?,banner = ? WHERE id = 1",
              values: [baslik,hakkimizdaImg,icerik,nedenbizBaslik,nedenbizContent,nedenbizImg,banner],
          });
          const result = updateHizmet.affectedRows;

          if(result){
            message = "ok";
          } else{
           message = "no";
         }

         res.status(200).json({response : {message:message, hizmetler:result}});
    }

}