var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var fs = require('fs');

module.exports = function(app){
    app.get("/", function(req, res){
        res.render("home");
    })

    app.post('/submit_file', upload.single('file'), function(req, res){
        res.send({size: req.file.size});
        fs.unlinkSync(req.file.path);
    })
}