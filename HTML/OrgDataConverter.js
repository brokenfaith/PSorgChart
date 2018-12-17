//#File: OrgDataConverter.js
var fs = require('fs');

var data_set = [];

delete data_set[0];

 
/**
 * OrgDataConverter Class - A library designed to load OrgData from a JSON file into an OrgChart compatible data set.
 * @access public
 * @version 0.0.1
 */
var OrgDataConverter = (function(file,deleteroot = true) {
    data_set = JSON.parse(fs.readFileSync(file, 'utf8'));
    
    if(deleteroot)
        delete data_set[0];
    
    return {
        RunData: (function() {
        var lastCount = 9999999;

        while(Object.keys(data_set).length < lastCount && Object.keys(data_set).length > 0) {
            lastCount = Object.keys(data_set).length;
            ConvertJSONToOrg();
        }
        
        return dataset;
        }),
        
        GetLeftover: (function() {
            return data_set;
        })
    }
});

/*
Internal Processing Functions and Variables
*/

var dataset = [];
function filterItems(query) {
    return dataset.filter(function(el) {
        return el.objId.indexOf(query) > -1;
    })[0]
};

function KeyToData(key, data_set, parentcode) {
    if(dataset.length > 0) {
        var obj = data_set[key];
        var name = obj[1];
        var title = obj[6]
        var parentset = filterItems(obj[3]);
        
        if(parentset != null) {
            var id = parentset.id;

            delete data_set[key];
            var newObj = { id: parseInt(key), parentId:id, Name: name, objId:obj[0], Title: title}

            dataset.push(newObj);
        }
    }
    else
    {
        var obj = data_set[key];
        var name = obj[1];
        var title = obj[6]

        if( obj[3] == parentcode) {

            delete data_set[key];
            var newObj = { id: parseInt(key), parentId:null, Name: name, objId:obj[0], Title: title}
        
            dataset.push(newObj);
        
            return obj[0];
        }
    }
    
    return false;
};

var parentval = "Blank";
var parentvalId = null;

function ConvertJSONToOrg() {
    for(var key in data_set) {
        var keyData = KeyToData(key, data_set, parentval);
        if(keyData != false)
            parentval = keyData;
    }
};


module.exports = OrgDataConverter;
/*
var x = OrgDataConverter('DataSet.json');
console.log(x.RunData());*/