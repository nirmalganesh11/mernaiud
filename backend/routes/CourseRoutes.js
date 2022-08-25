import express from 'express'
const router = express.Router()
import getCourses from '../controlers/courseController.js'
import { protect,admin } from '../middleware/authMiddleware.js'


router.route('/').get(getCourses)


export default router