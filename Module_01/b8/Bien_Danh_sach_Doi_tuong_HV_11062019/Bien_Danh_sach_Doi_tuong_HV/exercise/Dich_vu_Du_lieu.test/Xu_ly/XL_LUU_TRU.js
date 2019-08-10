var File = require("fs")
var duong_dan_luu_tru = "Du_lieu_Luu_tru"
var cong_nghe="json"

function Doc_cua_hang()
{
  var duong_dan = duong_dan_luu_tru + "//" + "Cua_hang.json"
  var doc_file = File.readFileSync(duong_dan,"UTF-8")
  return JSON.parse(doc_file)
}

function Doc_Index()
{
  var duong_dan = "index.html"
  return File.readFileSync(duong_dan,"UTF-8")
}
class XL_Luu_tru{
  Trang_loi()
  {
    return Doc_Index()
  }
  Cua_hang()
  {
    return Doc_cua_hang()
  }
  Doc_du_lieu(doi_tuong)
  {
    var Danh_sach = []
    var duong_dan = duong_dan_luu_tru + "//" + doi_tuong
    var Danh_sach_ten_tap_tin = File.readdirSync(duong_dan,"UTF-8")
    Danh_sach_ten_tap_tin.forEach(Ten=>{
      if(Ten.toLowerCase().endsWith(cong_nghe))
      {
        var chuoi = File.readFileSync(duong_dan + "//" + Ten,"UTF-8")
        var obj = JSON.parse(chuoi)
        Danh_sach.push(obj)
      }
    })
    return Danh_sach
  }
}

var Xu_ly = new XL_Luu_tru
module.exports = Xu_ly