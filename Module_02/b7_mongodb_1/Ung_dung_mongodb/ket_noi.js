var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

console.log(mongodb)
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url,{useNewUrlParser:true},function (err, client) {
  if (err) {
    console.log('Không kết nối với CSDL. Error:', err);
  } else {
    console.log('Kết nối thành công', url);
    client.close() // Đóng kết nối
    
  }
});