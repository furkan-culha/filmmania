const bodyParser = (req) => {
 return new Promise((resolve,reject) => {
    try {
// client tan gelen veriyi tuttuğumuz değişken
let body = ""

// clienttan her body parçası geldiğinde elimizdeki body değişkenine ekle
req.on("data", (chunk) => {
    // body devamına chunk ekle
    body += chunk
})

// veri aktarma işlemi bittiğinde json verisini js formatına çevir
req.on("end", () => {
    resolve(JSON.parse(body))
})
    } catch (error) {
        reject(error)
    }

 })

}

module.exports = bodyParser