var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';
MongoClient.connect(url, function (err, client) {
  if (err) {
    console.log('Không kết nối với CSDL. Error:', err);
  } else {
    console.log('Kết nối thành công', url);
    
    var db = client.db("Ban_Dien_thoai")
    var Bang_Dien_thoai = db.collection("Dien_thoai");

    var Dien_thoai_Moi = {
      Ma_so: "IPHONE_18",
      Ten: "IPHONE 18",
      Don_gia_Ban: 3800000,
      Don_gia_Nhap: 3700000,
      Nhom_Dien_thoai: {
        Ten: "IPHONE",
        Ma_so: "IPHONE"
      },
      Danh_sach_Phieu_Ban: [],
      Danh_sach_Phieu_Dat: [],
      Danh_sach_Phieu_Nhap: []

    }
    // Thêm một 
    Bang_Dien_thoai.insert(Dien_thoai_Moi, function (Loi, Ket_qua) {
      if (Loi) {
        console.log(Loi)
      } else {
        console.log(Ket_qua)
      }
    })
    // Thêm nhiều 
    //var Ds = [Dien_thoai_1, Dien_thoai_2, Dien_thoai_3]
    // Bang_Dien_thoai.insert(Ds, function (Loi, Ket_qua) {
    //   if (Loi) {
    //     console.log(Loi)
    //   } else {
    //     console.log(Ket_qua)
    //   }
    // })
  }
});