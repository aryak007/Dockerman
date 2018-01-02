'use strict';

function returnImageNameFromRepoTag(repoTag){
    var res = repoTag.split("/")

    if(res.length==2)
        return res[1].split(":")[0]
    return res[0].split(":")[0]
}

function isNone(repoTag){
    
    if(repoTag==="<none>:<none>")
        return true;
    return false;
}

function convertBytesToHumanReadableFormat(bytes,decimals) {
   if(bytes == 0) return '0 Bytes';
   var k = 1000,
       dm = decimals || 2,
       sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
       i = Math.floor(Math.log(bytes) / Math.log(k));
   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}



module.exports = {
    returnImageNameFromRepoTag:returnImageNameFromRepoTag,
    isNone:isNone,
    convertBytesToHumanReadableFormat:convertBytesToHumanReadableFormat
}