//************** Xử lý Lưu trữ ***********

var Duong_dan_Du_lieu=`../Du_lieu_Luu_tru`

function Doc_Du_lieu_TXT(){
    var Tap_tin=`Ho_ten.txt`
    var Dia_chi_Xu_ly=`${Duong_dan_Du_lieu}/${Tap_tin}`
    var Xu_ly_HTTP=new XMLHttpRequest()
    Xu_ly_HTTP.open(`GET`,`${Dia_chi_Xu_ly}`,false) // Đồng bộ
    Xu_ly_HTTP.send()
    var Chuoi_ket_qua=Xu_ly_HTTP.responseText.trim() // Nội dung trả về
    return Chuoi_ket_qua
}


function Doc_Du_Lieu_Json()
{
    var Tap_tin=`DL_CH.json`
    var Duong_dan=`${Duong_dan_Du_lieu}/${Tap_tin}`
    var Xu_ly_Http= new XMLHttpRequest()
    Xu_ly_Http.open(`GET`,`${Duong_dan}`,false)
    Xu_ly_Http.send();
    var KQ=Xu_ly_Http.responseText.trim();
    return KQ;
}

var duong_dan_chinh=`../Du_lieu_Luu_tru`
function DL_Json()
{
    var Tep_tin=`Hoc_Vien.json`
    var Duong_dan=`${duong_dan_chinh}/${Tep_tin}`
    var request = new XMLHttpRequest();
    request.open(`GET`,`${Duong_dan}`,false)
    request.send();
    var KQ= request.responseText.trim()
    return KQ;
}