
var File = require("fs") 
var Duong_dan_Thu_muc_Du_lieu = "Du_lieu_Luu_tru"

function Doc_Thong_tin_Dich_vu() {
  var Duong_dan = "index.html"
  var Chuoi_Thong_tin = File.readFileSync(Duong_dan, "UTF-8")
  return Chuoi_Thong_tin
}

function Doc_Thong_tin_Cua_hang() {
  var Duong_dan = Duong_dan_Thu_muc_Du_lieu + "//Cua_hang.json"
  var Chuoi_JSON = File.readFileSync(Duong_dan, "UTF-8") // Đồng bộ
  var Cua_hang = JSON.parse(Chuoi_JSON)
  return Cua_hang
}

function Doc_Danh_sach_Hoc_vien() {
  var Duong_dan = Duong_dan_Thu_muc_Du_lieu + "//Danh_sach_hoc_vien.txt"
  var Chuoi = File.readFileSync(Duong_dan, "UTF-8") // Đồng bộ
  return Chuoi
}


class XL_LUU_TRU {
  Doc_Du_lieu() {
    var Du_lieu = {}
    Du_lieu.Cua_hang = Doc_Thong_tin_Cua_hang()
    return Du_lieu
  }

  Thong_tin_Dich_vu(){
    return Doc_Thong_tin_Dich_vu()
  }

  Danh_sach_Hoc_vien(){
    return Doc_Danh_sach_Hoc_vien()
  }

}

var Xu_ly = new XL_LUU_TRU
module.exports = Xu_ly




