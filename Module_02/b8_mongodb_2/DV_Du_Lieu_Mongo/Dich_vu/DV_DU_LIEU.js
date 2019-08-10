
var NodeJs_Dich_vu = require("http")
var Luu_tru = require("../Xu_ly/XL_LUU_TRU")
var Port = 1000
var Xu_ly_Tham_so = require('querystring')

var Du_lieu = {}
var Danh_sach_Dien_thoai = Luu_tru.Doc_Danh_sach()
var Cua_hang = Luu_tru.Doc_Thong_tin_Cua_hang()
var Nguoi_dung = Luu_tru.Doc_Thong_tin_Nguoi_dung()

Danh_sach_Dien_thoai.then(Kq => {
  Du_lieu.Danh_sach_Dien_thoai = Kq
})
Cua_hang.then(Kq => {
  Du_lieu.Cua_hang = Kq[0]
})
Nguoi_dung.then(Kq => {
  Du_lieu.Nguoi_dung = Kq
})


var Dich_vu = NodeJs_Dich_vu.createServer((Yeu_cau, Dap_ung) => {
  var Chuoi_Nhan = ""
  var Dia_chi_Xu_ly = Yeu_cau.url.replace("/", "")
  Yeu_cau.on('data', (chunk) => { Chuoi_Nhan += chunk })
  Yeu_cau.on('end', () => {
    Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
    var Tham_so = Xu_ly_Tham_so.parse(Dia_chi_Xu_ly.replace("?", ""))
    var Ma_so_Xu_ly = Tham_so.Ma_so_Xu_ly
    var Chuoi_Kq = ""
    if (Ma_so_Xu_ly == "Doc_Danh_sach_Dien_thoai") {
      
      var Danh_sach_Dien_thoai = Du_lieu.Danh_sach_Dien_thoai
      Chuoi_Kq = JSON.stringify(Danh_sach_Dien_thoai)
      Dap_ung.end(Chuoi_Kq);
    } else if (Ma_so_Xu_ly == "Doc_Cua_hang") {
      var Cua_hang = Du_lieu.Cua_hang      
      Chuoi_Kq = JSON.stringify(Cua_hang)
      Dap_ung.end(Chuoi_Kq);

    } else if (Ma_so_Xu_ly == "Ghi_Dien_thoai_Moi") {
      var Kq
      var Dien_thoai = JSON.parse(Chuoi_Nhan)
      Kq = Luu_tru.Ghi_moi_Doi_tuong("Dien_thoai", Dien_thoai)
      Kq.then(result => {
        //console.log(result)
        Du_lieu.Danh_sach_Dien_thoai.push(Dien_thoai)
        Chuoi_Kq = JSON.stringify(Dien_thoai)
        Dap_ung.end(Chuoi_Kq);
      })
    } else if (Ma_so_Xu_ly == "Ghi_Phieu_Dat_hang") {
      var Kq = ""
      var Dien_thoai = Du_lieu.Danh_sach_Dien_thoai.find(x => x.Ma_so == Tham_so.Ma_so_Dien_thoai)
      var Phieu_Dat_hang = JSON.parse(Chuoi_Nhan)
      var So_Phieu_Dat = Dien_thoai.Danh_sach_Phieu_Dat.length + 1
      Phieu_Dat_hang.So_Phieu_Dat = So_Phieu_Dat
      Dien_thoai.Danh_sach_Phieu_Dat.push(Phieu_Dat_hang)
      var Dieu_kien = { "Ma_so": Dien_thoai.Ma_so }
      var Gia_tri_Cap_nhat = {
        $set: { Danh_sach_Phieu_Dat: Dien_thoai.Danh_sach_Phieu_Dat }
      }
      Kq = Luu_tru.Cap_nhat_Doi_tuong("Dien_thoai", Dieu_kien, Gia_tri_Cap_nhat)

      Kq.then(result => {
        console.log(result)
        Chuoi_Kq = "OK"
        Dap_ung.end(Chuoi_Kq);
      })

    } else if (Ma_so_Xu_ly == "Ghi_Phieu_Nhap_hang") {
      var Kq = ""
      var Danh_sach_Phieu_Nhap_hang = JSON.parse(Chuoi_Nhan)
      Danh_sach_Phieu_Nhap_hang.forEach(Dien_thoai_Nhap => {
        var Dien_thoai = Du_lieu.Danh_sach_Dien_thoai.find(x => x.Ma_so == Dien_thoai_Nhap.Ma_so)
        var So_Phieu_Nhap = Dien_thoai.Danh_sach_Phieu_Nhap.length + 1
        Dien_thoai_Nhap.Phieu_Nhap_hang.So_Phieu_Nhap = So_Phieu_Nhap
        Dien_thoai.Danh_sach_Phieu_Nhap.push(Dien_thoai_Nhap.Phieu_Nhap_hang)
        var Dieu_kien = { "Ma_so": Dien_thoai.Ma_so }
        var Gia_tri_Cap_nhat = {
          $set: { Danh_sach_Phieu_Nhap: Dien_thoai.Danh_sach_Phieu_Nhap }
        }
        Kq = Luu_tru.Cap_nhat_Doi_tuong("Dien_thoai", Dieu_kien, Gia_tri_Cap_nhat)

        Kq.then(result => {
          console.log(result)
          Chuoi_Kq = "OK"
          Dap_ung.end(Chuoi_Kq);
        })


      })
    } else if (Ma_so_Xu_ly == "Ghi_Phieu_Ban_hang") {
      var Kq = ""
      var Dien_thoai = Du_lieu.Danh_sach_Dien_thoai.find(x => x.Ma_so == Tham_so.Ma_so_Dien_thoai)
      var Phieu_Ban_hang = JSON.parse(Chuoi_Nhan)
      var So_Phieu_Ban = Dien_thoai.Danh_sach_Phieu_Ban.length + 1
      Phieu_Ban_hang.So_Phieu_Ban = So_Phieu_Ban
      Dien_thoai.Danh_sach_Phieu_Ban.push(Phieu_Ban_hang)
      var Dieu_kien = { "Ma_so": Dien_thoai.Ma_so }
      var Gia_tri_Cap_nhat = {
        $set: { Danh_sach_Phieu_Ban: Dien_thoai.Danh_sach_Phieu_Ban }
      }
      Kq = Luu_tru.Cap_nhat_Doi_tuong("Dien_thoai", Dieu_kien, Gia_tri_Cap_nhat)

      Kq.then(result => {
        Chuoi_Kq = "OK"
        Dap_ung.end(Chuoi_Kq);
      })

    } else if (Ma_so_Xu_ly == "Ghi_Phieu_Giao_hang") {
      var Kq = ""
      var Phieu_Giao_hang = JSON.parse(Chuoi_Nhan)
      var Dien_thoai = Du_lieu.Danh_sach_Dien_thoai.find(x => x.Ma_so == Phieu_Giao_hang.Ma_so)
      Dien_thoai.Danh_sach_Phieu_Dat.forEach(Phieu => {
        if (Phieu.So_Phieu_Dat == Phieu_Giao_hang.So_Phieu_Dat) {
          Phieu.Nhan_vien = Phieu_Giao_hang.Nhan_vien
          Phieu.Trang_thai = "DA_GIAO_HANG"
        }
      })
      var Dieu_kien = { "Ma_so": Dien_thoai.Ma_so }
      var Gia_tri_Cap_nhat = {
        $set: { Danh_sach_Phieu_Dat: Dien_thoai.Danh_sach_Phieu_Dat }
      }
      Kq = Luu_tru.Cap_nhat_Doi_tuong("Dien_thoai", Dieu_kien, Gia_tri_Cap_nhat)
      Kq.then(result => {
        console.log(result)
        Chuoi_Kq = "OK"
        Dap_ung.end(Chuoi_Kq);
      })

    } else if (Ma_so_Xu_ly == "Cap_nhat_Dien_thoai") {
      var Kq = ""
      var Danh_sach_Cap_nhat = JSON.parse(Chuoi_Nhan)
      Danh_sach_Cap_nhat.forEach(Dien_thoai_Cap_nhat => {
        var Dien_thoai = Du_lieu.Danh_sach_Dien_thoai.find(x => x.Ma_so == Dien_thoai_Cap_nhat.Ma_so)
        Dien_thoai.Ten = Dien_thoai_Cap_nhat.Ten
        Dien_thoai.Don_gia_Ban = Dien_thoai_Cap_nhat.Don_gia_Ban
        Dien_thoai.Don_gia_Nhap = Dien_thoai_Cap_nhat.Don_gia_Nhap
        Dien_thoai.Nhom_Dien_thoai.Ten = Dien_thoai_Cap_nhat.Nhom_Dien_thoai.Ten
        Dien_thoai.Nhom_Dien_thoai.Ma_so = Dien_thoai_Cap_nhat.Nhom_Dien_thoai.Ma_so
        var Dieu_kien = { "Ma_so": Dien_thoai.Ma_so }
        var Gia_tri_Cap_nhat = {
          $set: {
            "Ten": Dien_thoai.Ten,
            "Don_gia_Ban": Dien_thoai.Don_gia_Ban,
            "Don_gia_Nhap": Dien_thoai.Don_gia_Nhap,
            "Nhom_Dien_thoai.Ten": Dien_thoai.Nhom_Dien_thoai.Ten,
            "Nhom_Dien_thoai.Ma_so": Dien_thoai.Nhom_Dien_thoai.Ma_so
          }
        }

        Kq = Luu_tru.Cap_nhat_Doi_tuong("Dien_thoai", Dieu_kien, Gia_tri_Cap_nhat)

        Kq.then(result => {
          console.log(result)
          Chuoi_Kq = "OK"
          Dap_ung.end(Chuoi_Kq);
        })

      })
    } else if (Ma_so_Xu_ly == "Xoa_Dien_thoai") {
      var Kq = ""
      var Danh_sach_Xoa = JSON.parse(Chuoi_Nhan)
      Danh_sach_Xoa.forEach(Dien_thoai_Xoa => {
        var Dien_thoai = Du_lieu.Danh_sach_Dien_thoai.find(x => x.Ma_so == Dien_thoai_Xoa.Ma_so)
        var Dieu_kien = { "Ma_so": Dien_thoai.Ma_so }
        Kq = Luu_tru.Xoa_Doi_tuong("Dien_thoai", Dieu_kien)
        Kq.then(result => {
          Du_lieu.Danh_sach_Dien_thoai = Du_lieu.Danh_sach_Dien_thoai.filter(x => x.Ma_so != Dien_thoai_Xoa.Ma_so)
          Chuoi_Kq = "OK"
          Dap_ung.end(Chuoi_Kq);
        }).catch(err => {
          Chuoi_Kq = "Error"
          Dap_ung.end(Chuoi_Kq);
        })

      })
      
    } else {
      Chuoi_Kq = Luu_tru.Doc_Thong_tin_Dich_vu()
      Dap_ung.end(Chuoi_Kq);
    }
    
    
  })
})

Dich_vu.listen(Port,
  console.log(`Dịch vụ Dữ liệu đang thực thi tại địa chỉ: http://localhost:${Port}`)
);