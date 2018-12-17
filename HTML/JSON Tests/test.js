
var OrgDataConverter = require("../OrgDataConverter.js");
var dataManager = OrgDataConverter('../DataSet.json')
var data = dataManager.RunData();

console.log("Output Generated")
for(var key in data) {
    var obj = data[key];
    console.log(obj);
}

var data_set = dataManager.GetLeftover();
console.log("These rows errored");

for(var key in data_set) {
    var obj = data_set[key];
    console.log("");console.log("");
   console.log(key + ": " + obj[1])
   console.log(obj[3] + ": " + obj[2]);
}




