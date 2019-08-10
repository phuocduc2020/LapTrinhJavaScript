var dia_chi_dich_vu="http://localhost:2300/"
var dia_chi_media = "http://localhost:2100/"

function doc_du_lieu_cua_hang()
{
    var Tham_so= "Xu_ly_tham_so=Cua_hang"
    var dia_chi_xu_ly=`${dia_chi_dich_vu}?${Tham_so}`
    var Http = new XMLHttpRequest
    Http.open('POST',dia_chi_xu_ly,false)
    Http.send()
    var Cua_hang = Http.responseText
    if(Cua_hang!="")
    {
        return Cua_hang
    }

}

function Ghi_Cua_hang(Cua_hang)
{
    var Tham_so="Xu_ly_tham_so=Ghi_cua_hang"
    var dia_chi_xu_ly = `${dia_chi_dich_vu}?${Tham_so}`
    var Html = new XMLHttpRequest
    Html.open('POST',dia_chi_xu_ly,false)
    var chuoi_goi = JSON.stringify(Cua_hang)
    Html.send(chuoi_goi)
    var Ghi_cua_hang = Html.responseText
    if(Ghi_cua_hang!="")
    {
        return Ghi_cua_hang
    }
}
// function doc_du_lieu_dien_thoai()
// {
//     var Tham_so = "Xu_ly_tham_so=Dien_thoai"
//     var dia_chi_xu_ly = `${dia_chi_dich_vu}?${Tham_so}`
//     var Http= new XMLHttpRequest()
//     Http.open('POST',dia_chi_xu_ly,false)
//     Http.send()
//     var Dien_thoai = Http.responseText
//     if(Dien_thoai != "")
//     {
//         return JSON.parse(Dien_thoai)
//     }
// }

// Ghi 
// function Ghi_Du_lieu_Cua_hang(Cua_hang) {
//     var Tham_so = `Xu_ly_tham_so=Ghi_Cua_hang`
//     var Dia_chi_Xu_ly = `${dia_chi_dich_vu}?${Tham_so}`
//     var Xu_ly_HTTP = new XMLHttpRequest()
//     Xu_ly_HTTP.open('POST', Dia_chi_Xu_ly, false)
//     var Chuoi_goi = JSON.stringify(Cua_hang)
//     Xu_ly_HTTP.send(Chuoi_goi)
//     var Chuoi_Kq = Xu_ly_HTTP.responseText
//     console.log(Chuoi_Kq);
//     if (Chuoi_Kq != "")
//         return Chuoi_Kq;
// }

function Xuat_cua_hang(Cua_hang, the_hien) {
    var chuoi_html = `<img src="${dia_chi_media}/${Cua_hang.Ma_so}.png" class="btn" />
    <div class="text-center btn btn-outline-primary">${Cua_hang.Ten}
        <br>
        <small>${Cua_hang.Dia_chi}</small>
    </div>`
    the_hien.innerHTML = chuoi_html
}

// function Xuat_dien_thoai(Dien_thoai,the_hien){
//     var chuoi_html = ` <div class="card text-white bg-primary">
//     <img class="card-img-top" src="${dia_chi_media}/${Dien_thoai.Ma_so}.png" alt="" style="width:10rem">
//     <div class="card-body">
//       <h4 class="card-title">Loại:${Dien_thoai.Nhom_Dien_thoai.Ten}</h4>
//       <p class="card-text">Giá bán: ${Dien_thoai.Don_gia_Ban}</p>
//     </div>
//   </div>`
//     the_hien.innerHTML=chuoi_html
// }