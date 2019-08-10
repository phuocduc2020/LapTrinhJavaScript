//************** Xử lý Lưu trữ ***********
var Dia_chi_Dich_vu = "http://localhost:1000"
var Dia_chi_Media = "http://localhost:1001"

// Đọc dữ liệu từ Dịch vụ Dữ liệu

function Doc_Du_lieu_Cua_hang(){
    var Tham_so=`Ma_so_Xu_ly=DOC_CUA_HANG`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    var Xu_ly_HTTP = new XMLHttpRequest() 
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send()
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if(Chuoi_JSON!="")
      return JSON.parse(Chuoi_JSON) 
  }

  function Doc_Du_lieu_Hoc_vien(){
    var Tham_so=`Ma_so_Xu_ly=HOC_VIEN`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    var Xu_ly_HTTP = new XMLHttpRequest() 
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send()
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if(Chuoi_JSON!="")
      return JSON.parse(Chuoi_JSON) 
  }

  function Doc_Du_lieu_Dien_thoai(){
    var Tham_so=`Ma_so_Xu_ly=DIEN_THOAI`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    var Xu_ly_HTTP = new XMLHttpRequest() 
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send()
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if(Chuoi_JSON!="")
      return JSON.parse(Chuoi_JSON) 
  }
  // Ghi 
  function Ghi_Du_lieu_Cua_hang(Cua_hang){
    var Tham_so=`Ma_so_Xu_ly=GHI_CUA_HANG`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    var Xu_ly_HTTP = new XMLHttpRequest() 
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_goi=JSON.stringify(Cua_hang)
    Xu_ly_HTTP.send(Chuoi_goi)
    var Chuoi_Kq = Xu_ly_HTTP.responseText
    if(Chuoi_Kq!="")
      return Chuoi_Kq; 
  }

  // Xuất 

  function Xuat_Cua_hang(Cua_hang,The_hien){
    var Chuoi_HTML=`
    <img src="${Dia_chi_Media}/${Cua_hang.Ma_so}.png" class="btn" />
        <div class="text-center btn btn-outline-primary">${Cua_hang.Ten}
            <br>
            <small> Địa chỉ: ${Cua_hang.Dia_chi}</small>
        </div>
    `
    The_hien.innerHTML=Chuoi_HTML;
  }



  function Xuat_Hoc_vien(Hoc_vien,The_hien){
    var Chuoi_HTML=`
    <img src="${Dia_chi_Media}/HS_1.png" >
                <h3>${Hoc_vien.Ho_ten}</h3>
                <div>Ngày sinh: ${Hoc_vien.Ngay_sinh}</div>
                <div>Địa chỉ: ${Hoc_vien.Dia_chi}</div>
    
    `
    The_hien.innerHTML=Chuoi_HTML;
  }

  function Xuat_Dien_thoai(Dien_thoai,The_hien){
    var Chuoi_HTML=`
    <img class="card-img-top" src="${Dia_chi_Media}/${Dien_thoai.Ma_so}.png" alt="">
                <div class="card-body">
                    <h4 class="card-title">${Dien_thoai.Ten}</h4>
                    <p class="card-text">Đơn giá: ${Dien_thoai.Don_gia_Ban}</p>
                    Hệ điều hành: ${Dien_thoai.Nhom_Dien_thoai.Ten}
                </div>
    
    `
    The_hien.innerHTML=Chuoi_HTML;
  }

