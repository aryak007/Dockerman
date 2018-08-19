'use strict';
let Commons = require('../util/Commons.js')
const { exec } = require('child_process');

let imageInfo = [];
let imagesRawData = []
let parentIdMap = {};

function listImagesInfo(req, res) {
    exec('curl --unix-socket /var/run/docker.sock http:/v1.24/images/json', (err, stdout, stderr) => {
        if (err) {
            console.log(err + " " + `${stdout}`);
            res.send(`stderr` + ' ' + err);
            return;
        }

        imagesRawData = JSON.parse(`${stdout}`)
        imagesRawData.forEach(function (imageData) {


            let imageRepoTags = imageData.RepoTags;
            //console.log(imageRepoTags+" image repo tags");
            if (imageRepoTags != null && !Commons.isNone(imageRepoTags[0])) {
                let displayName = Commons.returnImageNameFromRepoTag(imageRepoTags);
                let fullName = imageRepoTags[0]
                let commitId = imageData.Id
                let size = Commons.convertBytesToHumanReadableFormat(imageData.Size);
                let runningContainers = imageData.Containers;
                let parentId = imageData.ParentId;

                //let date = Commons.getFormattedCreatedDateFromTimeStamp(imageData.Created);

                //console.log(imageRepoTags)
                // if (parentId != "") {

                //     if (parentIdMap[parentId] != null) {
                //         //console.log(parentIdMap[parentId])

                //         let temp = parentIdMap[parentId];
                //         temp.push(displayName)
                //         //console.log(parentIdMap+"-------------");
                //         parentIdMap[parentId] = temp;

                //     }
                //     else {
                //         parentIdMap[parentId] = [displayName];
                //     }
                // }
                let totalTags = imageRepoTags.length
                imageInfo.push({
                    imageRepoTags: imageRepoTags,
                    totalTags:totalTags,
                    commitId: commitId,
                    displayName: displayName,
                    fullName: fullName,
                    size: size,
                    runningContainers: runningContainers
                })
            }
        })
        // console.log(parentIdMap)
        // imageInfo.push({
        //     "parentIdMap": parentIdMap
        // })
        //console.log(imageInfo)
        res.send(imageInfo)
    });

}

function getParentIdList(req, res) {
    if (parentIdMap != [])
        return parentIdMap
    listImagesInfo(req, res)
    return parentIdMap
}

function removeDockerImage(req, res) {
    let commitId = req.params.commitId

    console.log("-------------Removing image with " + commitId + " ------------")

    // if(parentIdMap[commitId]!=null){
    //     res.json(commitId+" has dependant child images "+parentIdMap[commitId])
    // }

    //Parent Map Id logic will go here!!!
    exec('docker rmi ' + commitId + ' -f', (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            res.send(`stderr` + ' ' + err);
            return;
        }
        console.log(commitId)
        res.json(commitId + " deleted")
    });
}

function removeImageTag(req, res) {
    let tagName = req.params.tagName



    console.log("-------------Removing " + tagName + " ------------")
    exec('docker rmi ' + tagName, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            res.send(`stderr` + ' ' + err);
            return;
        }
        //console.log(commitId)
        res.json(tagName + " deleted")
    });
}

function storeCommits(req, res) {

}

function newTagForImage(req, res) {
    let tagName = req.body.tagName
    tagName = tagName.toLowerCase();
    let imageName = req.body.imageName
    console.log("ImageName " + imageName)

    console.log("-------------Tagging image " + imageName + " with " + tagName + " ------------")
    exec('docker tag ' + imageName + ' ' + tagName, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            res.send(`stderr` + ' ' + err);
            return;
        }
        //console.log(commitId)
        res.json(imageName + " tagged with " + tagName)
    });
}

function pushImage(req, res) {
    let imageName = req.params.imageName

    exec('docker push ' + imageName, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            res.json(`stderr` + ' ' + err);
            return;
        }
        console.log(commitId)
        res.json(imageName + " pushed to repository")
    });
}



module.exports = {
    listImagesInfo: listImagesInfo,
    removeDockerImage: removeDockerImage,
    removeImageTag: removeImageTag,
    newTagForImage: newTagForImage,
    pushImage: pushImage,
    getParentIdList: getParentIdList
}



