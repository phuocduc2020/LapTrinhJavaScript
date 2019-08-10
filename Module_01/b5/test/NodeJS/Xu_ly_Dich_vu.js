//khai bao thu vien

var NodeJS = require("http")
var Xu_ly_tham_so = require("querystring")
var Port = 2000

var Duong_dan_luu_tru = require("../Xu_Ly_luu_tru/Xu_ly_luu_tru")
var Du_lieu = Duong_dan_luu_tru.Doc_du_lieu()
// khoi tao server nodejs
var Dich_vu_xu_ly= NodeJS.createServer((req,res)=>{
    //xu ly chuoi
    var Dia_chi_xu_ly = req.url.replace("/","").replace("?","")
    var Tham_so = Xu_ly_tham_so.parse(Dia_chi_xu_ly)

    //su ly theo yeu cau
    var Chuoi_nhan="";
    req.on('data',(chunk)=>{Chuoi_nhan+=chunk})

    var Chuoi_kq="";
    req.on('end',()=>{
        //quyen server
        res.setHeader("Access-control-allow-origin","*")

        var xu_ly_tham_so = Tham_so.xu_ly_tham_so
        if(xu_ly_tham_so=="Cua_hang")
        {
            Chuoi_kq = JSON.stringify(Du_lieu.Cua_hang)
            res.end(Chuoi_kq)
        }
        else if (xu_ly_tham_so == "Hoc_vien")
        {
            Chuoi_kq=JSON.stringify(Du_lieu.Hoc_vien)
            res.end(Chuoi_kq)
        }
        else if (xu_ly_tham_so == "Hd0001")
        {
            Chuoi_kq=JSON.stringify(Du_lieu.Hd)
            res.end(Chuoi_kq)
        }
        else
        {
            Chuoi_kq=`ko nhan duoc thong tin`
            res.end(Chuoi_kq)
        }
    })
})

Dich_vu_xu_ly.listen(Port,console.log(`server http://localhost:${Port}`))