const express = require('express');
const router = express.Router();

const ImagesController = require('./controllers/Images-controller.js')

router.route('/getImagesInfo')
	.get(ImagesController.listImagesInfo)

router.route('/deleteImage/:commitId')
    .delete(ImagesController.removeDockerImage)

router.route('/deleteTag/:tagName')
	.delete(ImagesController.removeImageTag)

router.route('/tagImage/:imageName/:tagName')
	.post(ImagesController.newTagForImage)

router.route('/pushImageToRepository/:imageName')
	.post(ImagesController.pushImage)

module.exports = router;
