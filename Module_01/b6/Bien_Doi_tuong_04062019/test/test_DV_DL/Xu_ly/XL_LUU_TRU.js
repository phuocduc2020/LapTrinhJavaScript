var File = require("fs")
var Duong_dan_xu_ly = "Du_lieu_Luu_tru"

function Doc_du_lieu_cua_hang()
{
    var duong_dan = Duong_dan_xu_ly + "//Cua_hang.json"
    var Doc_chuoi = File.readFileSync(duong_dan,"UTF-8")
    var Cua_hang = JSON.parse(Doc_chuoi)
    return Cua_hang
}

function Doc_du_lieu_html()
{
    var file = "index.html"
    var doc_du_lieu = File.readFileSync(file,"UTF-8")
    return doc_du_lieu
}

class XL_Luu_tru{
    Doc_Cua_hang()
    {
        var du_lieu = {}
        du_lieu.cua_hang = Doc_du_lieu_cua_hang()
        return du_lieu
    }
    Doc_Html()
    {
        return Doc_du_lieu_html()
    }

    Ghi_cua_hang(doi_tuong)
    {
        var kq = "ok"
        try {
            var duong_dan = Duong_dan_xu_ly + "//" + "Cua_hang.json"
            var chuoi = JSON.stringify(doi_tuong,null,"\t")
            File.writeFileSync(duong_dan,chuoi,"UTF-8")
        } catch (Loi) {
            kq = Loi
        }
        return kq
    }
}

var xu_ly = new XL_Luu_tru
module.exports = xu_ly