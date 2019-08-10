var NodeJS = require("http")
var getQuerystring = require("querystring")
var Port = 2300

var Duong_dan_luu_tru = require("../Xu_ly/XL_LUU_TRU")
var du_lieu = Duong_dan_luu_tru.Doc_Cua_hang()

var Server = NodeJS.createServer((req,res)=>{
    var Dia_chi_xu_ly = req.url.replace("/","").replace("?","")
    var Tham_so = getQuerystring.parse(Dia_chi_xu_ly)
    var Chuoi_nhan = ""
    req.on('data',(chunk)=>{Chuoi_nhan+=chunk})
    var Chuoi_kq =""
    req.on('end',()=>{
        res.setHeader("Access-Control-Allow-Origin","*")
        var Xu_ly_tham_so = Tham_so.Xu_ly_tham_so
        if(Xu_ly_tham_so == "Cua_hang")
        {
            Chuoi_kq = JSON.stringify(du_lieu.cua_hang)
            res.end(Chuoi_kq)
        }
        else if(Xu_ly_tham_so == "Ghi_cua_hang")
        {
            var Cua_hang = JSON.parse(Chuoi_nhan)
            var result = Duong_dan_luu_tru.Ghi_cua_hang(Cua_hang)
            if(result == "ok")
            {
                du_lieu.cua_hang = Cua_hang
                Chuoi_kq = JSON.stringify(Cua_hang,"UTF-8")
            }
            else
            {
                Chuoi_kq=`xay ra loi`
            }
            res.end(Chuoi_kq)
        }
        else
        {
            Chuoi_kq= Duong_dan_luu_tru.Doc_Html()
            res.end(Chuoi_kq)
        }
    })
})

Server.listen(Port,console.log(`server http://localhost:${Port}`))