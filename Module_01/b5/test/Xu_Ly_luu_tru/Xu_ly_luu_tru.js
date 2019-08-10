var Duong_dan_du_lieu = "Luu_tru"
var File = require("fs")

function Doc_du_lieu_cua_hang(){
    var Duong_dan= Duong_dan_du_lieu + `//Cua_hang.json`
    var Chuoi_Json = File.readFileSync(Duong_dan, "UTF-8") //xu ly dong bo
    var Cua_hang = JSON.parse(Chuoi_Json)
    return Cua_hang
}

function Doc_du_lieu_Hoc_Vien()
{
    var Duong_dan=Duong_dan_du_lieu + "//Hoc_vien.json"
    var Chuoi_json = File.readFileSync(Duong_dan)
    var Hoc_vien = JSON.parse(Chuoi_json)
    return Hoc_vien
}

function Doc_du_lieu_HD0001()
{
    var Duong_dan=Duong_dan_du_lieu + "//HD0001.json"
    var Chuoi_json = File.readFileSync(Duong_dan)
    var HD = JSON.parse(Chuoi_json)
    return HD
}

class Xu_ly_luu_tru{
    Doc_du_lieu(){
        var du_lieu = {}
        du_lieu.Cua_hang = Doc_du_lieu_cua_hang()
        du_lieu.Hoc_vien = Doc_du_lieu_Hoc_Vien()
        du_lieu.Hd = Doc_du_lieu_HD0001()
        return du_lieu
    }
}

var Xu_ly = new Xu_ly_luu_tru
module.exports = Xu_ly