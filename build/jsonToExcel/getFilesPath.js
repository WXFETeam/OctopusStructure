var fs = require("fs");
var path = require("path");

let platform = "web";
let page = 'bizA';
var list = [];
let wrapperCatalog = `${process.cwd()}/biz/${platform}/page/${page}/locales/cn`;

var getFilesPath = (wrapperCatalog, childPath) => {
    let curCatalog = path.join(wrapperCatalog, childPath);
    var arr = fs.readdirSync(curCatalog);
	arr.forEach(function(item){
        var fullpath = path.join(curCatalog, item);
        var relativePath = path.join(childPath, item);
		var stats = fs.statSync(fullpath);
		if(stats.isDirectory()){
			getFilesPath(wrapperCatalog, relativePath);
		}else{
            if(!item.match(/index.ts/)) {
                list.push(relativePath);
            }
		}
    });
    return list;
} 

var res = getFilesPath(wrapperCatalog, "");
console.log(res);