
var Dia_chi_Dich_vu = "http://localhost:1000"
var Dia_chi_Media = "http://localhost:1001"
//************** Xử lý Lưu trữ ***********
// Ghi
function Ghi_Du_lieu_Cua_hang(Cua_hang){
  var Tham_so=`Ma_so_Xu_ly=GHI_CUA_HANG`
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
  var Xu_ly_HTTP = new XMLHttpRequest() 
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
  var Chuoi_goi=JSON.stringify(Cua_hang)
  Xu_ly_HTTP.send(Chuoi_goi)
  var Chuoi_Kq = Xu_ly_HTTP.responseText
  return Chuoi_Kq
}

// Đọc
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
  var Tham_so=`Ma_so_Xu_ly=DOC_HOC_VIEN`
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
  var Xu_ly_HTTP = new XMLHttpRequest() 
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
  Xu_ly_HTTP.send()
  var Chuoi_JSON = Xu_ly_HTTP.responseText
  if(Chuoi_JSON!="")
    return JSON.parse(Chuoi_JSON) 
}
function Doc_Du_lieu_Hoa_don(){
  var Tham_so=`Ma_so_Xu_ly=DOC_HOA_DON`
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
  var Xu_ly_HTTP = new XMLHttpRequest() 
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
  Xu_ly_HTTP.send()
  var Chuoi_JSON = Xu_ly_HTTP.responseText
  if(Chuoi_JSON!="")
    return JSON.parse(Chuoi_JSON) 
}

function Doc_Du_lieu_Cau_thu(){
  var Tham_so=`Ma_so_Xu_ly=DOC_CAU_THU`
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
  var Xu_ly_HTTP = new XMLHttpRequest() 
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
  Xu_ly_HTTP.send()
  var Chuoi_JSON = Xu_ly_HTTP.responseText
  if(Chuoi_JSON!="")
    return JSON.parse(Chuoi_JSON) 
}
function Doc_Du_lieu_Dien_thoai(){
  var Tham_so=`Ma_so_Xu_ly=DOC_DIEN_THOAI`
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
  var Xu_ly_HTTP = new XMLHttpRequest() 
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
  Xu_ly_HTTP.send()
  var Chuoi_JSON = Xu_ly_HTTP.responseText
  if(Chuoi_JSON!="")
    return JSON.parse(Chuoi_JSON) 
}
// Xuất
function Xuat_Cua_hang(Ch,Th_Cha){
  var Chuoi_HTML=`
  <img src="${Dia_chi_Media}/${Ch.Ma_so}.png" class="btn" />
  <div class="text-center btn btn-outline-primary">${Ch.Ten}
      <br>
      <small> ${Ch.Dia_chi}</small>
  </div>
  `
  Th_Cha.innerHTML=Chuoi_HTML
}

function Xuat_Hoc_vien(Hv,Th_Cha){
  var Chuoi_HTML=`
  <img src="${Dia_chi_Media}/HS_1.png" >
      <h3>Họ tên: ${Hv.Ho_ten} </h3>
      <div>Ngày sinh: ${Hv.Ngay_sinh}</div>
      <div>Địa chỉ: ${Hv.Dia_chi}</div>
  
  `
  Th_Cha.innerHTML=Chuoi_HTML
}
function Xuat_Hoa_don(Hoa_don,Th_Cha){
  var Chuoi_HTML=`
  <div>${Hoa_don.Ten} : ${Hoa_don.Ma_so}</div>
  <div>Ngày hóa đơn ${Hoa_don.Ngay_Hoa_don} </div>
  <div>Trị giá: ${Hoa_don.Tri_gia}</div>
  <div>Nhân viên nhập: ${Hoa_don.Nhan_vien.Ten} </div>
  `
  Th_Cha.innerHTML=Chuoi_HTML
}
function Xuat_Cau_thu(Cau_thu,Th_Cha){
  var Chuoi_HTML=`
  <div>Tên:${Cau_thu.Ten}</div>
  <div>Vị trí:${Cau_thu.Vi_tri}</div>
  <div>Số áo: ${Cau_thu.So_ao}</div>
  <div>Biên chế:${Cau_thu.Bien_che}</div>
  `
  Th_Cha.innerHTML=Chuoi_HTML
}

function Xuat_Dien_thoai(Dt,Th_Cha){
  var Chuoi_HTML=`
  <img src="${Dia_chi_Media}/${Dt.Ma_so}.png" >
      <h3>Tên: ${Dt.Ten} </h3>
      <div>Đơn giá bán: ${Dt.Don_gia_Ban}</div>
      <div>Nhóm: ${Dt.Nhom_Dien_thoai.Ten}</div>
  
  `
  Th_Cha.innerHTML=Chuoi_HTML
}

