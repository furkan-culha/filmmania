const bodyParser = require("../utils/body-parser")
const validateData = require("../utils/validate-data")
const fs = require("fs")

const handlePut = async (req, res) => { 
// url deki id paramtresine eriş
const id = req.url.split("/")[2]

// istediğin body  bölümündeki veirye eriş
 const body = await bodyParser(req);

// body verisinde ekisk varmı kontrol et
validateData(body,res)

// json dosaysındaki içeriiği al
const movieData = JSON.parse(fs.readFileSync("./data/movies.json","utf-8"))

// güncellenicek elemanın dizideki sıarsını bul
const index = movieData.findIndex((movie) => movie.id === id)

// dizideki ilgili elemanı güncelle
movieData[index] = {
    ...body,
    id,
}

// json dosyasını güncelle
fs.writeFileSync("./data/movies.json", JSON.stringify(movieData), "utf-8")



    // Client'a yanıt gönder
    return res.end(JSON.stringify({
        success: true, 
        message: "Film güncellendi", 
        movie: { ...body, id } 
    }));
}


module.exports = handlePut;