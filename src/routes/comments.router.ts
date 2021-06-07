import { Router } from 'express'
import * as controller from '../controllers/post.controller'

const router = Router({ mergeParams: true })

router.route('/').get(controller.getPosts)
router.route('/:commentId').get(controller.readPost)

export default router
