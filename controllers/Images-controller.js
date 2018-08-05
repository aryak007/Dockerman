'use strict';
var Commons = require('../util/Commons.js')
const fs = require('fs');
const { exec } = require('child_process');


function listImagesInfo(req, res) {
    // exec('curl --unix-socket /var/run/docker.sock http:/v1.24/images/json', (err, stdout, stderr) => {
    //   if (err) {
    //     console.log(err+" "+`${stdout}`);
    //     res.send(`stderr`+' '+err);
    //     return;
    //   }
    //   var imageInfo = [];
    //   var imagesRawData = []
    //   imagesRawData = JSON.parse(`${stdout}`)
    //   imagesRawData.forEach(function(imageData) {


    //         var imageRepoTags = imageData.RepoTags;
    //         //console.log(imageRepoTags+" image repo tags");
    //         if(imageRepoTags!=null && !Commons.isNone(imageRepoTags[0]))
    //         {
    //             var displayName = Commons.returnImageNameFromRepoTag(imageRepoTags[0]);
    //             var fullName = imageRepoTags[0]
    //             var commitId = imageData.Id
    //             var size = Commons.convertBytesToHumanReadableFormat(imageData.Size);
    //             var runningContainers = imageData.Containers;
    //             //var date = Commons.getFormattedCreatedDateFromTimeStamp(imageData.Created);

    //             //console.log(imageRepoTags)
    //             imageInfo.push({
    //                 imageRepoTags:imageRepoTags,
    //                 commitId:commitId,
    //                 displayName:displayName,
    //                 fullName:fullName,
    //                 size:size,
    //                 runningContainers:runningContainers
    //             })
    //         }
    //     })
    //   res.json(imageInfo)
    // });
    fs.readFile("./data/dummy.json",function(err,imageInfo){
        if(err)
          throw err;
        res.json(JSON.parse(imageInfo))
    })

}

function removeDockerImage(req,res){
   var commitId = req.params.commitId
    // console.log("-------------Removing image with "+commitId+" ------------")
    // exec('docker rmi '+commitId+' -f', (err, stdout, stderr) => {
    //     if (err) {
    //     console.log(err);
    //     res.send(`stderr`+' '+err);
    //     return;
    //   }
    //   console.log(commitId)
    //   res.json(commitId+" deleted")
    // });
    res.json(commitId+" dummy commit id deleted")
}

function removeImageTag(req,res){
     var tagName = req.params.tagName
    // console.log("-------------Removing "+tagName+" ------------")
    // exec('docker rmi '+tagName, (err, stdout, stderr) => {
    //     if (err) {
    //     console.log(err);
    //     res.send(`stderr`+' '+err);
    //     return;
    //   }
    //   //console.log(commitId)
    //   res.json(tagName+" deleted")
    // });
    res.json(tagName+" dummy tagName deleted")

}

function newTagForImage(req,res)
{
    var tagName = req.body.tagName
    tagName = tagName.toLowerCase();
    var imageName = req.body.imageName
    console.log("ImageName "+imageName)

    console.log("-------------Tagging image "+imageName+" with "+tagName+" ------------")
    // exec('docker tag '+imageName+' '+tagName, (err, stdout, stderr) => {
    //     if (err) {
    //     console.log(err);
    //     res.send(`stderr`+' '+err);
    //     return;
    //   }
    //   //console.log(commitId)
    //   res.json(imageName+" tagged with "+tagName)
    // });
    res.json(imageName+" tagged with "+tagName)
}

function pushImage(req,res)
{
    var imageName = req.params.imageName
    
    // exec('docker push '+imageName, (err, stdout, stderr) => {
    //     if (err) {
    //     console.log(err);
    //     res.json(`stderr`+' '+err);
    //     return;
    //   }
    //   console.log(commitId)
    //   res.json(imageName+ " pushed to repository")
    // });
    res.json(imageName+ " pushed to repository")
}



module.exports = {
    listImagesInfo:listImagesInfo,
    removeDockerImage: removeDockerImage,
    removeImageTag:removeImageTag,
    newTagForImage: newTagForImage,
    pushImage: pushImage
}




