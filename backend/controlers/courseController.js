import asyncHandler from 'express-async-handler'

import Course from '../models/courseSchema.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getCourses = asyncHandler(async (req, res) => {
    // const Cg = req.query.Cg
    // const filter = req.query.filter
    // const from = req.query.from
    // const to = req.query.to
    // const keyword = req.query.keyword ? {
    //     name : {
    //         $regex : req.query.keyword,
    //         $options : 'i'
    //     }
    // } : {}
    // console.log(req.query.keyword)
    const Courses =  await Course.find();
    res.json(Courses);
    // if(Cg){
   
    // }
    // else if(filter){
    //     switch (filter) {
    //         case 'Rating':
    //             const productsbyrating =  await Product.find({}).sort('-rating').exec();
    //             res.json(productsbyrating)

    //             break;
    //         case 'date':
    //             const productsbydate =  await Product.find({}).sort('createdAt').exec();
    //             res.json(productsbydate)
    //                 break;
    //         case 'highprice':
    //             const productsbyhighprice =  await Product.find({}).sort('price');
    //             res.json(productsbyhighprice)

    //                 break;
    //         case 'lowprice':
    //             const productsbylowprice =  await Product.find({}).sort('-price').exec();
    //             res.json(productsbylowprice)
    //                 break;
        
    //         default:
    //             break;
    //     }
    // }else if(from && to){
    //     const productbyprice =  await Product.find({price:{$lte:to},price:{$gte:from}});
    //     res.json(productbyprice)

    // }else{
    //     const products =  await Product.find({...keyword});
    //     res.json(products)
    // }
})

export default {getCourses }