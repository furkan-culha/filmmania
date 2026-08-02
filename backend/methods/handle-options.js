const handleOptions = (req, res) => {
    //* hangi isteklere izin verdiğimizi söyleyelim
   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");

   //* bodye sahip isteklerde verinin backende iletilmesine izin veren headerı ekle
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

     //* 200 olumlu yanıt gönder
  res.end();
}

module.exports = handleOptions