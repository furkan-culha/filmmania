const handleNotFound = (req, res) => {
    // 404 Durum kodu gönder ve mesajı bas
    res.statusCode = 404;

    // yanıtın içeriğini belirle
    res.write(JSON.stringify({ success: false, message:"Aradiginiz kaynak bulunamadı"}));
    return res.end("Aradiginiz sayfa bulunamadi (404)");
}


module.exports = handleNotFound;