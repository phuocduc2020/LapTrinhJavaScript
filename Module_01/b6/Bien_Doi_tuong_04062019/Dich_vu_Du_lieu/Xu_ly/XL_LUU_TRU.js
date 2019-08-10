
var File = require("fs"); // Xử lý tập tin NODE
var Duong_dan_Thu_muc_Du_lieu = "Du_lieu_Luu_tru";

function Doc_Thong_tin_Dich_vu() {
    var Duong_dan = "index.html"
    var Chuoi_Thong_tin = File.readFileSync(Duong_dan, "UTF-8")
    return Chuoi_Thong_tin
}

function Doc_Thong_tin_Cua_hang() {
    var Duong_dan = Duong_dan_Thu_muc_Du_lieu + "//Cua_hang.json"
    var Chuoi_JSON = File.readFileSync(Duong_dan, "UTF-8") //Đọc file Đồng bộ
    var Cua_hang = JSON.parse(Chuoi_JSON)
    return Cua_hang
}

function Doc_Thong_tin_Hoc_vien() {
    var Duong_dan = Duong_dan_Thu_muc_Du_lieu + "//Hoc_vien.json"
    var Chuoi_JSON = File.readFileSync(Duong_dan, "UTF-8") //Đọc file Đồng bộ
    var Hoc_vien = JSON.parse(Chuoi_JSON)
    return Hoc_vien
}

function Doc_Thong_tin_Cau_thu() {
    var Duong_dan = Duong_dan_Thu_muc_Du_lieu + "//Cau_thu.json"
    var Chuoi_JSON = File.readFileSync(Duong_dan, "UTF-8") //Đọc file Đồng bộ
    var Cau_thu = JSON.parse(Chuoi_JSON)
    return Cau_thu
}

function Doc_Thong_tin_Hoa_don() {
    var Duong_dan = Duong_dan_Thu_muc_Du_lieu + "//HD0001.json"
    var Chuoi_JSON = File.readFileSync(Duong_dan, "UTF-8") //Đọc file Đồng bộ
    var Hoa_don = JSON.parse(Chuoi_JSON)
    return Hoa_don
}

function Doc_Thong_tin_Dien_thoai() {
    var Duong_dan = Duong_dan_Thu_muc_Du_lieu + "//ANDROID_1.json"
    var Chuoi_JSON = File.readFileSync(Duong_dan, "UTF-8") //Đọc file Đồng bộ
    var Dien_thoai = JSON.parse(Chuoi_JSON)
    return Dien_thoai
}

class XL_LUU_TRU {
    Thong_tin_Dich_vu() {
        return Doc_Thong_tin_Dich_vu()
    }

    Doc_Du_lieu() {
        var Du_lieu = {}
        Du_lieu.Cua_hang = Doc_Thong_tin_Cua_hang()
        Du_lieu.Hoc_vien = Doc_Thong_tin_Hoc_vien()
        Du_lieu.Cau_thu = Doc_Thong_tin_Cau_thu()
        Du_lieu.Hoa_don = Doc_Thong_tin_Hoa_don()
        Du_lieu.Dien_thoai = Doc_Thong_tin_Dien_thoai()
        return Du_lieu
    }
    Ghi_Cua_hang(Doi_tuong_Cua_hang) {
        var Kq = "OK"
        try {
            var Duong_dan = Duong_dan_Thu_muc_Du_lieu + "//" + "Cua_hang.json"
            var Chuoi = JSON.stringify(Doi_tuong_Cua_hang, null, "\t")
            File.writeFileSync(Duong_dan, Chuoi, "UTF-8")
        } catch (Loi) {
            Kq = Loi
        }
        return Kq
    }
}

var Xu_ly = new XL_LUU_TRU
module.exports = Xu_ly




