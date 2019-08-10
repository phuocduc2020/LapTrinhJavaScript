var NodeJs_Dich_vu = require("http")
var Port = 1000
var Xu_ly_Tham_so = require('querystring')
var Luu_tru = require("../Xu_ly/XL_LUU_TRU")
var Du_lieu = Luu_tru.Doc_Du_lieu();
var Dich_vu = NodeJs_Dich_vu.createServer((Yeu_cau, Dap_ung) => {
  var Chuoi_Nhan = "";
  var Dia_chi_Xu_ly = Yeu_cau.url.replace("/", "").replace("?", "")
  var Tham_so = Xu_ly_Tham_so.parse(Dia_chi_Xu_ly)
  Yeu_cau.on('data', (chunk) => { Chuoi_Nhan += chunk })
  Yeu_cau.on('end', () => {
    Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
    var Ma_so_Xu_ly = Tham_so.Ma_so_Xu_ly
    var Chuoi_Kq = ""
    if (Ma_so_Xu_ly == "DOC_CUA_HANG") {
      Chuoi_Kq = JSON.stringify(Du_lieu.Cua_hang)
      Dap_ung.end(Chuoi_Kq);
    } else if (Ma_so_Xu_ly == "DOC_HOC_VIEN") {
      Chuoi_Kq = JSON.stringify(Du_lieu.Hoc_vien)
      Dap_ung.end(Chuoi_Kq);
    } else if (Ma_so_Xu_ly == "DOC_CAU_THU") {
      Chuoi_Kq = JSON.stringify(Du_lieu.Cau_thu)
      Dap_ung.end(Chuoi_Kq);
    } else if (Ma_so_Xu_ly == "DOC_HOA_DON") {
      Chuoi_Kq = JSON.stringify(Du_lieu.Hoa_don)
      Dap_ung.end(Chuoi_Kq);
    } else if (Ma_so_Xu_ly == "DOC_DIEN_THOAI") {
      Chuoi_Kq = JSON.stringify(Du_lieu.Dien_thoai)
      Dap_ung.end(Chuoi_Kq);
    } else if (Ma_so_Xu_ly == "GHI_CUA_HANG") {
      var Cua_hang=JSON.parse(Chuoi_Nhan)
      var Kq=Luu_tru.Ghi_Cua_hang(Cua_hang)
      if(Kq=="OK"){
        Du_lieu.Cua_hang=Cua_hang
      }
      Chuoi_Kq = Kq
      Dap_ung.end(Chuoi_Kq);
    } else {
      Chuoi_Kq = Luu_tru.Thong_tin_Dich_vu()
      Dap_ung.end(Chuoi_Kq);
    }
  })


})

Dich_vu.listen(Port,
  console.log(`Dịch vụ Dữ liệu đang thực thi tại địa chỉ: http://localhost:${Port}`)
);