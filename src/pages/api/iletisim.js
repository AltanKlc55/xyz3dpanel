import { query } from "src/lib/db"
export default async function handler(req, res) {

    if (req.method === "GET") {
        const hizmetler = await query({
            query: "SELECT * FROM tbl_iletisim where id = 1",
            values: [],
        });
        res.status(200).json({ hizmetler: hizmetler });
    }


    if(req.method === "PUT"){
        let message = "";
        const datas = req.body;
        const telefon = datas.telefon;
        const telefonSirket = datas.telefonSirket;
        const slogan = datas.slogan;
        const email = datas.email;
        const adres = datas.adres;
        const banner = datas.banner;
        const iletisimGorsel = datas.iletisimGorsel;

        const updateHizmet = await query({
            query: "UPDATE tbl_iletisim SET tel_no = ?, tel_no_sirket = ?, slogan = ?, email = ?,adres = ?,banner = ?,iletisim_gorsel = ? WHERE id = 1",
            values: [telefon,telefonSirket,slogan,email,adres,banner,iletisimGorsel],
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