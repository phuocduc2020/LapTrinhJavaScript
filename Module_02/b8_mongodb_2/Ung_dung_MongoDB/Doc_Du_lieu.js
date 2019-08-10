var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
//var url = 'mongodb://localhost:27017/';
var url = 'mongodb+srv://ducnpgt60935:28060104@cluster0-kozkd.mongodb.net/test?retryWrites=true&w=majority'
MongoClient.connect(url, function (err, client) {
  if (err) {
    console.log('Không kết nối với CSDL. Error:', err);
  } else {
    console.log('Kết nối thành công', url);
    var csdl = "Ban_Dien_thoai";
    var db = client.db(csdl)
    var Bang_Dien_thoai = db.collection("Dien_thoai")
    // Đọc tất cả các điện thoại 
    /*
    Bang_Dien_thoai.find({}).toArray((loi, Danh_sach_Dien_thoai)=> {
      if (loi) {
        console.log(loi)
      } else {
        console.log(Danh_sach_Dien_thoai)
      }
    })
    */
    

    // Lọc ra các điện thoại theo nhóm IPHONE
    /*
    var Dieu_kien = {
      "Nhom_Dien_thoai.Ma_so": "ANDROID"
    }

    Bang_Dien_thoai.find(Dieu_kien).toArray(function (loi, Danh_sach_Dien_thoai) {
      if (loi) {
        console.log(loi)
      } else {
        console.log(Danh_sach_Dien_thoai.length)
      }
    })
    */
        
    // // Lấy theo Ma_so findOne
    
    var Dieu_kien = {
      "Ma_so": "IPHONE_18"
    }

    Bang_Dien_thoai.findOne(Dieu_kien, function (err, Dien_thoai) {
      if (err) {
        console.log(err)
      } else {
        console.log(Dien_thoai)
      }
    })
    
///////////////////////////////////////////////////////////////
    // Lấy theo Don_gia ban >15000000 va  thuộc nhóm Android
    // var Dieu_kien={
    //   $and:[
    //       {"Don_gia_Ban":{$gt:15000000}},
    //       {"Nhom_Dien_thoai.Ma_so":"ANDROID"}
    //     ]
    // }

    // Lấy theo Don_gia >10 triệu và nhỏ hơn 20 triệu 
    /*
    var Dieu_kien={
      $and:[
        {"Don_gia_Ban":{$gt:10000000}},
        {"Don_gia_Ban":{$lt:20000000}}
      ]
    }
    */
    // Lay don gia ban lon 10 trieu
    /*
    var Dieu_kien={
      "Don_gia_Ban":{$gt:10000000}
    }

    Bang_Dien_thoai.find(Dieu_kien).toArray(function (loi, Danh_sach_Dien_thoai) {
      if (loi) {
        console.log(loi)
      } else {
        console.log(Danh_sach_Dien_thoai)
      }
    })
    */
    // Tìm gần đúng
    /*
    var Dieu_kien={
      //"Ten":/S/  //like '%P%' // Có chứa
      //"Ten":/^S/ // like 'P%'   // Bắt đầu
      //"Ten":/128GB$/  // like '%B' // Kết thúc
    }
    

    Bang_Dien_thoai.find(Dieu_kien).toArray(function (err, Danh_sach_Dien_thoai) {
      // Lấy toàn bộ danh sách
      if (err) {
        console.log(err)
      } else {
        console.log(Danh_sach_Dien_thoai)
      }
    })
    */

    // Đọc Điện thoại có Đơn giá Bán lớn nhất chỉ lấy 5 dòng đầu thuộc Nhóm IPHONE
    /*
    var Sap_xep={
      "Don_gia_Ban":-1
    }
    var Dieu_kien={
      "Nhom_Dien_thoai.Ma_so":"IPHONE"
    }

    Bang_Dien_thoai.find(Dieu_kien).sort(Sap_xep).limit(5).skip(0).toArray(function (err, Danh_sach_Dien_thoai) {
      if (err) {
        console.log(err)
      } else {
        console.log(Danh_sach_Dien_thoai)
      }
    })

    */



  }
});