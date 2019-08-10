//************** Xử lý Lưu trữ ***********
//************** Khai báo đường dẫn Dịch vụ  ***********
var Dia_chi_Dich_vu = "http://localhost:1000"
var Dia_chi_Media = "http://localhost:1001"

//************** Các Hàm Xử lý Đọc Xuất   ***********
function Doc_Danh_sach_Dien_thoai() {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=DOC_DANH_SACH_DIEN_THOAI`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function Doc_Thong_tin_Cua_hang() {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=DOC_CUA_HANG`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function Ghi_Media(Hinh) {
    
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Dia_chi_Xu_ly = `${Dia_chi_Media}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Hinh)
    Xu_ly_HTTP.send(Chuoi_Goi)
    var Chuoi_KQ = Xu_ly_HTTP.responseText
    return Chuoi_KQ
}
function Ghi_Dien_thoai_Moi(Dien_thoai) {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Ghi_Dien_thoai_Moi`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Dien_thoai)
    Xu_ly_HTTP.send(Chuoi_Goi)
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function Ghi_Xoa_Dien_thoai(Danh_sach) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Xoa_Dien_thoai`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Danh_sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}
function Ghi_Cap_nhap_Dien_thoai(Danh_sach) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Cap_nhat_Dien_thoai`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Danh_sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}
// ***************************** Xuất ***********************
function Tao_The_hien_Cap_nhat(Th_Cha,Danh_sach_Cap_nhat){
    var noi_dung_HTML=`
    <table class="table">
                <thead>
                    <tr>
                        <th>Tên điện thoại</th>
                        <th>Nhóm điện thoại</th>
                        <th>Đơn giá Nhập</th>
                        <th>Đơn giá Bán</th>
                    </tr>
                </thead>
                <tbody>`
    Danh_sach_Cap_nhat.forEach(Dien_thoai=>{
        var Nhom=Dien_thoai.Nhom_Dien_thoai.Ma_so
        noi_dung_HTML+=`
        <tr Ma_so="${Dien_thoai.Ma_so}" class="CAP_NHAP">
            <td scope="row"><input type="text" value="${Dien_thoai.Ten}"/></td>
            <td>
            <select id="Th_Nhom_Dien_thoai">
                <option value="ANDROID" ${Nhom=='ANDROID'?'selected':''} >ANDROID</option>
                <option value="IPHONE" ${Nhom=='IPHONE'?'selected':''}  >IPHONE</option>
            </select>
            </td>
            <td><input type="text" value="${Dien_thoai.Don_gia_Nhap}" class="text-right" /></td>
            <td><input type="text" value="${Dien_thoai.Don_gia_Ban}" class="text-right" /></td>
        </tr>
        `
    
    })            
    
    noi_dung_HTML+=`
                </tbody>
            </table>
    `
    Th_Cha.innerHTML=noi_dung_HTML
}

function Tao_The_hien_Xoa(Th_Cha,Danh_sach_Cap_nhat){
    var noi_dung_HTML=`
    <table class="table">
                <thead>
                    <tr>
                        <th>Tên điện thoại</th>
                        <th>Nhóm điện thoại</th>
                        <th>Đơn giá Nhập</th>
                        <th>Đơn giá Bán</th>
                    </tr>
                </thead>
                <tbody>`
    Danh_sach_Cap_nhat.forEach(Dien_thoai=>{
        var Nhom=Dien_thoai.Nhom_Dien_thoai.Ma_so
        noi_dung_HTML+=`
        <tr Ma_so="${Dien_thoai.Ma_so}" class="CAP_NHAP">
            <td scope="row">${Dien_thoai.Ten}</td>
            <td>${Nhom}</td>
            <td>${Tao_Chuoi_The_hien_So_nguyen_duong(Dien_thoai.Don_gia_Nhap)}đ</td>
            <td>${Tao_Chuoi_The_hien_So_nguyen_duong(Dien_thoai.Don_gia_Ban)}đ</td>
        </tr>
        `
    
    })            
    
    noi_dung_HTML+=`
                </tbody>
            </table>
    `
    Th_Cha.innerHTML=noi_dung_HTML
}

function Tao_The_hien_Them_Dien_thoai(Th_Cha) {
    var Chuoi_HTML = `
    <div class="form m-3 p-3">
        
        <div class="form-group">
            <label for="Th_Nhom_Dien_thoai">Nhóm Điện thoại</label>
            <select id="Th_Nhom_Dien_thoai" onchange="Lay_Ma_so_cuoi()">
                <option value="IPHONE">IPHONE</option>
                <option value="ANDOID">ANDROID</option>
            </select>
        </div>

        <div class="form-group">
            <label for="Th_Ma_so">Mã số Điện thoại</label>
            <input type="text" class="form-control" id="Th_Ma_so" readonly>
        </div>
        
        <div class="form-group">
            <label for="Th_Ten">Tên Điện thoại</label>
            <input type="text" class="form-control" id="Th_Ten" placeholder="Nhập Tên Điện thoại">
        </div>
        <div class="form-group">
            <label for="Th_Don_gia_Nhap">Đơn giá Nhập</label>
            <input type="text" class="form-control" id="Th_Don_gia_Nhap" placeholder="Nhập Đơn giá Nhập">
        </div>
        <div class="form-group">
            <label for="Th_Don_gia_Nhap">Đơn giá Bán</label>
            <input type="text" class="form-control" id="Th_Don_gia_Ban" placeholder="Nhập Đơn giá Bán">
        </div>
        
        <div class="form-group">
            <label for="Th_file">Chọn hình</label>
            <input id="Th_file" type="file" onchange="Xem_truoc_Media()" accept="image/png" />
            <img id="Th_Hinh_Xem_truoc" style="width:10rem" />
        </div>
    </div>
    `
    Th_Cha.innerHTML = Chuoi_HTML
}

function Xuat_Thong_tin_Cua_hang(Cua_hang, Th_Cha) {
    var Chuoi_HTML = `
    <img src="${Dia_chi_Media}/${Cua_hang.Ma_so}.png" class="btn" />
        <div class="text-center btn btn-outline-primary">${Cua_hang.Ten}
            <br>
            <small> ${Cua_hang.Dia_chi}</small>
    </div>
    `
    Th_Cha.innerHTML = Chuoi_HTML
}
function Xuat_Danh_sach_Dien_thoai(Danh_sach, Th_Cha) {
    Th_Cha.innerHTML = ""
    console.log(Th_Cha)
    Danh_sach.forEach(Dien_thoai => {
        var The_hien = document.createElement("div")
        if (sessionStorage.getItem("Danh_sach_Chon") != undefined) {
            var dsChon = JSON.parse(sessionStorage.getItem("Danh_sach_Chon"))
            var vt = dsChon.indexOf(Dien_thoai.Ma_so)
            if (vt != -1) {
                The_hien.className = "CHON "
            }
        }
        The_hien.className += "card m-1"
        The_hien.style.cssText = "width:18rem;float:left"
        The_hien.setAttribute("Ma_so", Dien_thoai.Ma_so)

        var Noi_dung_HTML = `
        <img class="card-img-top" src="${Dia_chi_Media}/${Dien_thoai.Ma_so}.png" alt="">
        <div class="card-body">
            <p class="card-title text-primary">${Dien_thoai.Ten}</p>
            <h5 class="text-warning">${Dien_thoai.Nhom_Dien_thoai.Ma_so}</h5>
            <p class="card-text text-danger">Giá:${Tao_Chuoi_The_hien_So_nguyen_duong(Dien_thoai.Don_gia_Ban)} đồng </p>
        </div>
        `
        The_hien.innerHTML = Noi_dung_HTML
        Th_Cha.appendChild(The_hien)

        The_hien.onclick = () => {
            The_hien.classList.toggle("CHON")

            // Lưu Session HTML5
            var ds = []
            if (sessionStorage.getItem("Danh_sach_Chon") != undefined) {
                ds = JSON.parse(sessionStorage.getItem("Danh_sach_Chon"))
            }
            var vt = ds.indexOf(Dien_thoai.Ma_so)
            if (vt == -1) 
            {
                ds.push(Dien_thoai.Ma_so) // Thêm
            } else {
                ds.splice(vt, 1) // Xóa
            }   

            if (ds.length > 0) {
                sessionStorage.setItem("Danh_sach_Chon", JSON.stringify(ds))
            } else {
                sessionStorage.removeItem("Danh_sach_Chon")
            }
        }
    })
    Th_Thong_bao.innerHTML = `Tổng số sản phẩm: ${Danh_sach.length}`;
}

//************** Các Hàm Xử lý Số, Ngày    ***********

//==============================================================================
// Xử lý biến Số nguyên
function Nhap_So_nguyen_duong(Th_So_nguyen) {
    var Kq = {}
    Kq.So_nguyen = parseInt(Th_So_nguyen.value.trim())
    Kq.Hop_le = !isNaN(Kq.So_nguyen) && Kq.So_nguyen > 0
    return Kq
}

function Tao_Chuoi_The_hien_So_nguyen_duong(So_nguyen) {
    var Chuoi_The_hien = ""
    var Chuoi_So_nguyen = So_nguyen.toString()
    var So_Ky_so = Chuoi_So_nguyen.length
    if (So_Ky_so % 3 == 0) {
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."
        }
    } else if (So_Ky_so % 3 == 1) {
        Chuoi_The_hien = Chuoi_So_nguyen[0]
        if (So_Ky_so > 1)
            Chuoi_The_hien += "."
        Chuoi_So_nguyen = Chuoi_So_nguyen.slice(1)
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."

        }
    } else if (So_Ky_so % 3 == 2) {
        Chuoi_The_hien = Chuoi_So_nguyen[0] + Chuoi_So_nguyen[1]
        if (So_Ky_so > 2)
            Chuoi_The_hien += "."
        Chuoi_So_nguyen = Chuoi_So_nguyen.slice(2)
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."
        }
    }
    return Chuoi_The_hien
}
// Xử lý Biến Số thực
function Nhap_So_thuc_duong(Th_So_thuc) {
    var Kq = {}
    Kq.So_thuc = parseInt(Th_So_thuc.value.trim())
    Kq.Hop_le = !isNaN(Kq.So_thuc) && Kq.So_thuc > 0
    return Kq
}

function Tao_Chuoi_The_hien_So_thuc_duong(So_thuc, So_so_le) {
    So_thuc = parseFloat(So_thuc)
    var Chuoi_The_hien = ""
    if (!So_so_le)
        So_so_le = 2
    var Thanh_phan_con = So_thuc
        .toFixed(So_so_le)
        .split(".")
    Chuoi_The_hien = Tao_Chuoi_The_hien_So_nguyen_duong(Thanh_phan_con[0])
    if (Thanh_phan_con.length == 2 && parseInt(Thanh_phan_con[1]) != 0 && So_so_le > 0)
        Chuoi_The_hien += "," + Tao_Chuoi_The_hien_So_nguyen_duong(Thanh_phan_con[1])
    return Chuoi_The_hien
}

function Tao_Chuoi_The_hien_Tien(So_tien, n) {
    if (!n)
        n = 0

    var Chuoi_The_hien = Tao_Chuoi_The_hien_So_thuc_duong(So_tien, n)

    return Chuoi_The_hien
}

// Xử lý với Biến Ngày
function La_Ngay_Hien_hanh(Ngay) {
    var Ngay_Hien_hanh = new Date()
    Ngay = new Date(Ngay)
    var Kq = Ngay_Hien_hanh.getDate() == Ngay.getDate() &&
        Ngay_Hien_hanh.getMonth() == Ngay.getMonth() &&
        Ngay_Hien_hanh.getFullYear() == Ngay.getFullYear()

    return Kq
}

function Tao_Chuoi_The_hien_Ngay(Ngay) {
    var Chuoi_The_hien = ""
    if (!Ngay)
        Ngay = new Date()
    Chuoi_The_hien = Ngay.getDate() + "/" + (Ngay.getMonth() + 1) + "/" + Ngay.getFullYear()
    return Chuoi_The_hien
}

function Tao_Chuoi_The_hien_Gio(Ngay) {
    var Chuoi_The_hien = ""
    if (!Ngay)
        Ngay = new Date()
    Chuoi_The_hien = Ngay.getHours() + ":" + Ngay.getMinutes() + ":" + Ngay.getMinutes()
    return Chuoi_The_hien
}

function Tao_Chuoi_The_hien_Ngay_Gio(Ngay) {
    var Chuoi_The_hien = Tao_Chuoi_The_hien_Ngay(Ngay) + " " + Tao_Chuoi_The_hien_Gio(Ngay)
    return Chuoi_The_hien
}

function Kiem_tra_Ngay(Chuoi_ngay) {
    var Thanh_phan_con = Chuoi_ngay.split("/")
    var Hop_le = Thanh_phan_con.length == 3 && !isNaN(Thanh_phan_con[0]) && !isNaN(Thanh_phan_con[1]) && !isNaN(Thanh_phan_con[2])
    if (Hop_le) {
        var Ng = parseInt(Thanh_phan_con[0])
        var Th = parseInt(Thanh_phan_con[1])
        var Nm = parseInt(Thanh_phan_con[2])
        var So_ngay_cua_Th = new Date(Nm, Th, 0).getDate()
        // var So_ngay_cua_Th = new Date(Nm, Th+1 , 0).getDate()
        Hop_le = Ng >= 1 && Ng <= So_ngay_cua_Th && Th >= 1 && Th <= 12 && Nm > 0
    }
    return Hop_le
}

function Nhap_Ngay(Th_Ngay) {
    var Kq = {}
    var Chuoi_Ngay = Th_Ngay
        .value
        .trim()
    Kq.Hop_le = Kiem_tra_Ngay(Chuoi_Ngay)
    if (Kq.Hop_le) {
        var Thanh_phan_con = Chuoi_ngay.split("/")
        Kq.Ngay = new Date(Thanh_phan_con[1] + "-" + Thanh_phan_con[0] + "-" + Thanh_phan_con[2])
    }

    return Kq
}





