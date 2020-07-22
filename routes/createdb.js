const nano = require("nano")

exports.create = function(req, res) {
    nano.bind.create(req.body.dbname, function() {
        res.send("Error creating the Database");
        return;
    });
};