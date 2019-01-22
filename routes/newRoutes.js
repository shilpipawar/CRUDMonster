// var connection = require("../config/connection");
// var budget = require("../models/budget.js");


// module.exports = function(app) {

// app.get("/", function(req, res) {
//     var sqlQuery = "SELECT  distinct(C.name), SUM(E.amount) AS total from expense E inner join category C on E.category_id = C.id inner join users U on E.users_id = U.id where U.userName = 'johnD' group by C.name";
//     connection.query(sqlQuery, function(error, results, fields) {
//         if(error) throw error;
//         console.log("newRoutes!!!!!!!!!!!")
//         console.log(results);

//         res.render("maintable", {
//             results: results 
//         })
//     })
// })


// }