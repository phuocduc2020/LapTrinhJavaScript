var NodeJs_Dich_vu = require("http");
var Port = 1000;
var Xu_ly_Tham_so = require('querystring');

var Luu_tru = require("../Xu_ly/XL_LUU_TRU")
var Du_lieu = Luu_tru.Doc_Du_lieu();

var Dich_vu = NodeJs_Dich_vu.createServer((Yeu_cau, Dap_ung) => {
    //console.log(Yeu_cau.url)
    var Dia_chi_Xu_ly = Yeu_cau.url.replace("/", "").replace("?", "")
    var Tham_so = Xu_ly_Tham_so.parse(Dia_chi_Xu_ly)
    // Nhận dữ liệu từ yêu cầu
    var Chuoi_Nhan = "";
    Yeu_cau.on('data', (chunk) => { Chuoi_Nhan += chunk })
    
    var Chuoi_Kq = "";
    Yeu_cau.on('end', () => {
        // Cấp quyền cho Server
        Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
        // Lấy giá trị của tham số
        var Ma_so_Xu_ly = Tham_so.Ma_so_Xu_ly
        // Trả kết quả cho Client sau khi xử lý
        if (Ma_so_Xu_ly == "DOC_CUA_HANG") {
            Chuoi_Kq = JSON.stringify(Du_lieu.Cua_hang);
            Dap_ung.end(Chuoi_Kq);
        } else if(Ma_so_Xu_ly == "HOC_VIEN"){
            Chuoi_Kq = JSON.stringify(Du_lieu);
            Dap_ung.end(Chuoi_Kq);
        }else{
            Chuoi_Kq = `Server khong co nhan yeu cau`;
            Dap_ung.end(Chuoi_Kq);
        }
        
    })


})

Dich_vu.listen(Port,
    console.log(`Dịch vụ dữ liệu thực thi tại địa chỉ: http://localhost:${Port}`)
)

