const sqlite3  = require('sqlite3').verbose();
const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

var db = new sqlite3.Database('./usdadb_new.sqlite3');
var PlantSchema = new Schema({});
mongoose.connect('mongodb://localhost/plants');


//screw it just get it all
db.each("SELECT *   from usda" , function(err,row)  {
    if(err){
	console.log("error getting count" , err);
    }
    var plants = mongoose.model('plants',PlantSchema);
    plants.collection.insert(row);
});

// Begin learning how to use sqlite3 lib here ;)

// console.log( count);
// var i = 0;
// var j = 500;
// console.log( i);

// while(i < count){
//     console.log( "in here");
//     db.each("SELECT * from usda limit " + i.toString() + "," + j.toString(), function(err,row)  {
// 	if(err){
// 	    console.log("error getting count" , err);
// 	}
// 	console.log("i", i);
// 	console.log("j", j );
// 	if(!count){
// 	    console.log("Count was not retrieved from the db exiting");
// 	    process.exit(0);
// 	}
    
//     });
//     i = j;
//     j += 5000;
    
// }





//     // console.log("dd");
//     // console.log("In the while loop");
//     // db.all("SELECT * FROM usda LIMIT " + inc1 + " , " + inc2, function(err,rows) {
//     // 	if(err){
//     // 	    console.log("There was an error", err);
//     // 	}
//     // 	console.log(rows);
//     // 	inc1 = inc2;
//     // 	inc2 += 5000;
//     // });


// /** Get data from sqlite convert it into json structure and push to mongo **/
// function main(){
    
//     var count ;//= getCount();
//     var inc1 = 0;
//     var inc2 = 5000 ;
// //    getCnt();
    
//     db.close();
//     console.log("Exiting Program");
//     process.exit(0);

// }


