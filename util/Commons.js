'use strict';

function returnImageNameFromRepoTag(repoTags) {

    let resultObj = {}

    for (let repoTag of repoTags) {
        console.log(repoTag+" ----------------- ")
        let res = repoTag.split("/")
        console.log(res);
        if (res.length == 2)
            res =  res[1].split(":")[0]
        else
            res = res[0].split(":")[0]
        console.log(res+" display ")
        if(resultObj[res]==null)
            resultObj[res] = true;

    }
    let list = createListFromObj(resultObj)
    return list.join(" & ")

}

function createListFromObj(obj){
    let list = []

    for(let o in obj){
        list.push(o);
    }
    return list;
}


function isNone(repoTag) {

    if (repoTag === "<none>:<none>")
        return true;
    return false;
}

function convertBytesToHumanReadableFormat(bytes, decimals) {
    if (bytes == 0) return '0 Bytes';
    let k = 1000,
        dm = decimals || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}


module.exports = {
    returnImageNameFromRepoTag: returnImageNameFromRepoTag,
    isNone: isNone,
    convertBytesToHumanReadableFormat: convertBytesToHumanReadableFormat
}