//************** Xử lý Lưu trữ ***********
var Dia_chi_Dich_vu = "http://localhost:1000"
var Dia_chi_Media = "http://localhost:1001"

function Doc_Cua_hang() {
    var Tham_so = `Ma_so_Xu_ly=DOC_CUA_HANG`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    var Xu_ly_HTTP = new XMLHttpRequest()
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send()

    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        return JSON.parse(Chuoi_JSON)
}

function Doc_Danh_sach_hoc_vien() {
    var Tham_so = `Ma_so_Xu_ly=DOC_DANH_SACH_HOC_VIEN`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    var Xu_ly_HTTP = new XMLHttpRequest()
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send()
    var Chuoi = Xu_ly_HTTP.responseText
    return Chuoi
}


function Xuat_Thong_tin_Cua_hang(Cua_hang, Th_Cha) {
    var Chuoi_HTML = `
    <img src="http://localhost:1001/${Cua_hang.Ma_so}.png" class="btn" />
    <div class="text-center btn btn-outline-primary">${Cua_hang.Ten}
        <br>
        <small> ${Cua_hang.Dia_chi}</small>
    </div>
    `
    Th_Cha.innerHTML = Chuoi_HTML
}

function Xuat_Danh_sach_Hoc_vien(ds,Th_Cha){
    Th_Cha.innerHTML=""
    ds.forEach(hv => {
        var The_hien = document.createElement("button");
        The_hien.className = "btn btn-danger m-1";
        The_hien.innerText = hv;
        Th_Cha.appendChild(The_hien);
        
        The_hien.onclick = () => {
            Th_Thong_bao.innerHTML = `Tôi tên là: ${hv}`;
        }
    })
}




