import { query } from "src/lib/db"

export default async function handler(req, res) {

    if (req.method === "GET") {
        const hizmetler = await query({
            query: "SELECT * FROM tbl_slider",
            values: [],
        });
        res.status(200).json({ hizmetler: hizmetler });
    }

    if (req.method === "POST") {
        const datas = req.body;
        const sliderBaslik = datas.sliderBaslik;
        const sliderBtnTxt = datas.sliderBtnTxt;
        const banner = datas.banner;
        const sliderBtnLink = datas.sliderBtnLink;
        let message = "";
          const addHizmet = await query({
              query: "INSERT INTO tbl_slider (baslik,slider_btn_txt,slider_btn_link,banner) VALUES (?,?,?,?)",
              values: [sliderBaslik,sliderBtnTxt,sliderBtnLink,banner],
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

         res.status(200).json({response : {message:message, slider:sektorler}});
    }


    if(req.method === "DELETE"){
        const datas = req.body;
        let message = "";
         const dellHizmet = await query({
              query: "DELETE FROM tbl_slider WHERE id = ?",
              values: [datas.id],
          });
          if(dellHizmet){
              message = "ok silindi";
          } else{
             message = "no";
          }
   
        
        res.status(200).json({response: {message:message}})

    }

    if(req.method === "PUT"){
        let message = "";
        const datas = req.body;
        const sliderBaslik = datas.sliderBaslik;
        const sliderBtnTxt = datas.sliderBtnTxt;
        const banner = datas.banner;
        const sliderBtnLink = datas.sliderBtnLink;
        const id = datas.id;

          const updateHizmet = await query({
              query: "UPDATE tbl_slider SET baslik = ?, slider_btn_txt = ?, banner = ?, slider_btn_link = ? WHERE id = ?",
              values: [sliderBaslik,sliderBtnTxt,banner,sliderBtnLink,id],
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