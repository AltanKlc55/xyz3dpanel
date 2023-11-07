import { query } from "src/lib/db"

export default async function handler(req, res) {

    if (req.method === "GET") {
        const hizmetler = await query({
            query: "SELECT * FROM tbl_sektorler",
            values: [],
        });
        res.status(200).json({ hizmetler: hizmetler });
    }

    if (req.method === "POST") {
        const datas = req.body;
        const baslik = datas.sektorBasligi;
        const icerik = datas.sektorIcerigi;
        const banner = datas.banner;
        const img = datas.img;
        let message = "";
          const addHizmet = await query({
              query: "INSERT INTO tbl_sektorler (name,content,banner,img) VALUES (?,?,?,?)",
              values: [baslik,icerik,banner,img],
          });
          if(addHizmet.insertId){
              message = "ok";
          } else{
             message = "no";
          }
          let sektorler = {
             hizmetId: addHizmet.insertId,
             hizmetbaslik:datas.sektorBasligi
          };

         res.status(200).json({response : {message:message, sektorler:sektorler}});
    }


    if(req.method === "DELETE"){
        const datas = req.body;
        let message = "";
         const dellHizmet = await query({
              query: "DELETE FROM tbl_sektorler WHERE id = ?",
              values: [datas.id],
          });
          if(dellHizmet){
              message = "ok";
          } else{
             message = "no";
          }
   
        
        res.status(200).json({response: {message:message}})

    }

    if(req.method === "PUT"){
        let message = "";
        const datas = req.body;
        const baslik = datas.sektorBasligi;
        const icerik = datas.sektorIcerigi;
        const banner = datas.banner;
        const img = datas.img;
        const id = datas.id;

          const updateHizmet = await query({
              query: "UPDATE tbl_sektorler SET name = ?, content = ?, banner = ?, img = ? WHERE id = ?",
              values: [baslik,icerik,banner,img,id],
          });
          const result = updateHizmet.affectedRows;

          if(result){
            message = "ok";
          } else{
           message = "no";
         }

         res.status(200).json({response : {message:message, sektorler:result}});
    }

}