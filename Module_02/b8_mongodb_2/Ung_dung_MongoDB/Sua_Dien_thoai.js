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
    var Dieu_kien = {
      Ma_so:"IPHONE_18"
    }

    Bang_Dien_thoai.update(Dieu_kien,{$set: {Don_gia_Ban: 4000000,Don_gia_Nhap:3900000} }, function (Loi, Ket_qua) {
      if (Loi) {
        console.log(Loi)
      } else {
        console.log(Ket_qua)
      }
    })

    // Cập nhật đơn giá
    
    // Bang_Dien_thoai.find({}).toArray(function (loi, Danh_sach_Dien_thoai) {
    //   if (loi) {
    //     console.log(loi)
    //   } else {
    //     Danh_sach_Dien_thoai.forEach(Dien_thoai => {

    //       var Dieu_kien = {
    //         Ma_so: Dien_thoai.Ma_so
    //       }
    //       Bang_Dien_thoai.update(Dieu_kien, { $set: { Don_gia_Ban: parseInt(Dien_thoai.Don_gia_Ban) } }, function (Loi, Ket_qua) {
    //         if (Loi) {
    //           console.log(Loi)
    //         } else {
    //           console.log(Ket_qua)
    //         }
    //       })

    //     })
    //   }
    // })




  }
});