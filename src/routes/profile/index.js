const ProfileRouter = require('express').Router()

ProfileRouter.route('/post')
    .get(require('./post.view'))
    

    ProfileRouter.route('/profile')
    .get(require('./profile.view'))

    ProfileRouter.route('/user')
    .get(require('./user.view'))

module.exports = ProfileRouter