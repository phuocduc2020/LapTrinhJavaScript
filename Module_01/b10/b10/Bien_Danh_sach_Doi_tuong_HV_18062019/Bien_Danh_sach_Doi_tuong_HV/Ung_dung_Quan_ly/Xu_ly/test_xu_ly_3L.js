//khai bao duong dan dich vu

var Dia_chi_dich_vu = "http://localhost:1000"
var Dia_chi_media = "http://localhost:1001"

function Doc_du_lieu_cua_hang() {
    var du_lieu = {}
    var tham_so = "Ma_so_Xu_ly=DOC_CUA_HANG"
    var dia_chi_xu_ly = `${Dia_chi_dich_vu}?${tham_so}`
    var http = new XMLHttpRequest()
    http.open('POST', dia_chi_xu_ly, false)
    http.send("")
    var chuoi_json = http.responseText
    if (chuoi_json != "") {
        du_lieu = JSON.parse(chuoi_json)
    }
    return du_lieu
}
function Xuat_du_lieu_cua_hang(Cua_hang, Th_cha) {
    var chuoi_html = `
    <img src = "${Dia_chi_media}/${Cua_hang.Ma_so}.png" class="btn"/>
    <div class="text-center btn btn-outline-primary">${Cua_hang.Ten}
    <br>
    <small>${Cua_hang.Dia_chi}</small>
    `
    Th_cha.innerHTML = chuoi_html
}

function Doc_danh_sach_dien_thoai() {
    var du_lieu = {}
    var http = new XMLHttpRequest()
    var tham_so = `Ma_so_Xu_ly=DOC_DANH_SACH_DIEN_THOAI`
    var dia_chi_xu_ly = `${Dia_chi_dich_vu}?${tham_so}`
    http.open("POST", dia_chi_xu_ly, false)
    http.send("")
    var chuoi_json = http.responseText
    if (chuoi_json != "") 
        du_lieu = JSON.parse(chuoi_json)
    return du_lieu
}

function Xuat_danh_sach_dien_thoai(Dien_thoai, Th_Cha){
    Th_Cha.innerHTML = ""
    
    Dien_thoai.forEach(Dien_thoai => {
        var the_hien = document.createElement("div")
       
        if (sessionStorage.getItem("Danh_sach_chon") != undefined) {
            var dsChon = JSON.parse(sessionStorage.getItem("Danh_sach_chon"))
            var vt = dsChon.indexOf(Dien_thoai.Ma_so)
         
            if (vt != -1) {
                the_hien.className = "CHON "
            }
            
        }
            the_hien.className += "card m-1"
            the_hien.style.cssText="width:18rem;float:left"
             the_hien.setAttribute("data",Dien_thoai.Ma_so)

            var noi_dung_html = `
           
            <img class="card-img-top" src="${Dia_chi_media}/${Dien_thoai.Ma_so}.png" alt="">
            <div class="card-body">
                <p class="card-title text-primary">${Dien_thoai.Ten}</p>
                <h5 class="text-warning">${Dien_thoai.Nhom_Dien_thoai.Ma_so}</h5>
                <p class="card-text text-danger">Giá:${Dien_thoai.Don_gia_Ban} đồng </p>
            </div>
            `
          
        the_hien.innerHTML = noi_dung_html
        
        Th_Cha.appendChild(the_hien)
        
       
        the_hien.onclick = () => {
            the_hien.classList.toggle("CHON")
            
            // Lưu Session HTML5
            var ds = []
           
            if (sessionStorage.getItem("Danh_sach_chon") != undefined) {
                ds = JSON.parse(sessionStorage.getItem("Danh_sach_chon"))
            }
            
            var vt = ds.indexOf(Dien_thoai.Ma_so)
            
            if (vt == -1) 
            {
                ds.push(Dien_thoai.Ma_so) // Thêm
                
            } else {
                ds.splice(vt, 1) // Xóa
            }   

            if (ds.length > 0) {
                sessionStorage.setItem("Danh_sach_chon", JSON.stringify(ds))
            } else {
                sessionStorage.removeItem("Danh_sach_chon")
            }
        }
        
})
Th_Thong_bao.innerHTML = `<u>danh sach dien thoai co: ${Dien_thoai.length}</u>`

}


function Tao_the_hien_them(Th_Cha)
{
    var noi_dung_html=`
    <div class="form m-3 p-3">
    <!--Nhom dien Thoai-->

   


    <div class="form-group">
        <label for="Th_Nhom_dien_thoai">Nhom Dien Thoai</label>
        <select id="Th_Nhom_dien_thoai" onchange="Lay_ma_so()">
            <option value="IPHONE">IPHONE</option>
            <option value="ANDROID">Android</option>
        </select>
    </div>





    <!--Ma so dien thoai-->
    <div class="form-group">
        <label for="Th_Ma_so_DT">Ma so dien thoai</label>
        <input class="form-control" type="text" id="Th_Ma_so_DT" readonly>
    </div>


    
    <!--Ten dien thoai-->
    <div class="form-group">
        <label for="Th_Ten">Ten Dien Thoai</label>
        <input class="form-control" id="Th_Ten" placeholder="Nhap ten dien thoai" type="text"></input>
    </div>

    <!--don gia nhap-->
    <div class="form-group">
        <label for="Th_Don_gia_nhap">Don Gia Nhap</label>
        <input type="text" class="form-control" id="Th_Don_gia_nhap" placeholder="Nhap don gia nhap">
    </div>
    <!--Don Gia ban-->
    <div class="form-group">
        <label for="Th_don_gia_ban">Don Gia Ban</label>
        <input type="text" id="Th_don_gia_ban" class="form-control" placeholder="Nhap don gia ban">
    </div>

    <!--lay file hinh-->
    <div class="form-group">
        <label for="file_hinh">Chon Hinh</label>
        <input id="file_hinh" type="file" onchange="Xem_truoc_media()" accept="image/png"/>
        <img id="Th_hinh_xem_truoc" style="width:10rem"/>
    </div>
</div>`

Th_Cha.innerHTML=noi_dung_html
}