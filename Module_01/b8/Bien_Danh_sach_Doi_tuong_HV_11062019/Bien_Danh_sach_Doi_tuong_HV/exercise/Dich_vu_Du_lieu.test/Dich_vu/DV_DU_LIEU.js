var NodeJS = require("http")
var getQueryString = require("querystring")
var Port = 2000

var duong_dan_xu_ly = require("../Xu_ly/XL_LUU_TRU")
var du_lieu = {}
du_lieu.cua_hang = duong_dan_xu_ly.Cua_hang()
du_lieu.dien_thoai = duong_dan_xu_ly.Doc_du_lieu("Dien_thoai")

//server 
var Server = NodeJS.createServer((req,res)=>{
  var Dia_chi_xu_ly = req.url.replace("/","")
  var Tham_so = getQueryString.parse(Dia_chi_xu_ly.replace("?",""))
  var chuoi_nhan=""
  req.on('data',(chunk)=>{chuoi_nhan+=chunk})
  var chuoi_kq =""
  req.on('end',()=>{
    
    var Xu_ly_tham_so= Tham_so.Xu_ly_tham_so
    if(Xu_ly_tham_so == "Dien_thoai")
    {
      res.setHeader("Access-Control-Allow-Origin","*")
      var chuoi = {}
      chuoi = du_lieu.dien_thoai
      chuoi_kq = JSON.stringify(chuoi,"UTF-8")
      res.end(chuoi_kq)      
    }
    else if(Xu_ly_tham_so == "Cua_hang")
    {
      var chuoi = {}
      chuoi= du_lieu.cua_hang
      chuoi_kq=JSON.stringify(chuoi,"UTF-8")
      res.setHeader("Access-Control-Allow-Origin","*")
      res.end(chuoi_kq)
    }
    else{
      chuoi_kq = duong_dan_xu_ly.Trang_loi()
      res.setHeader("Access-Control-Allow-Origin","*")
      res.end(chuoi_kq)
    }
  })
})

Server.listen(Port,console.log(`server Http://localhost:${Port}`))