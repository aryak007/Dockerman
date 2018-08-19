const express = require('express');
const router = express.Router();

const ImagesController = require('./controllers/Images-controller.js')

router.route('/getImagesInfo')
	.get(ImagesController.listImagesInfo)

router.route('/deleteImage/:commitId')
    .delete(ImagesController.removeDockerImage)

router.route('/deleteTag/:tagName')
	.delete(ImagesController.removeImageTag)

router.route('/tagImage/')
	.post(ImagesController.newTagForImage)

router.route('/pushImageToRepository/:imageName')
	.post(ImagesController.pushImage)

router.route('/getParentIdList')
	.get(ImagesController.getParentIdList)
module.exports = router;
