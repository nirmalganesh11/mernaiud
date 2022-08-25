import React, {useEffect,useState,useRef} from 'react'
import Rating from '../../components/Rating'
import {useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Input,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Progress,
  SlideFade


} from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Lorem
} from '@chakra-ui/react'

import {listProductDetails,createproductReview} from '../../actions/productActions'
import {IoLogoFacebook,AiFillTwitterCircle,AiFillInstagram,AiFillShop,MdDoNotDisturb}  from "react-icons/all"
import { Image,Select,Button, FormControl, FormLabel, Textarea } from "@chakra-ui/react"
import HashLoader from "react-spinners/HashLoader";
import {PRODUCT_CREATE_RESET, PRODUCT_CREATE_REVIEW_RESET} from '../../constants/productConstants'
import  './product.css'
import { Link } from 'react-router-dom'
const Productpage = ({history,match}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

   const [qty, setQty] = useState(1)
   const [rating, setrating] = useState(0)
   const [comment,setcomment] = useState('')
  
   const imgs = document.querySelectorAll('.img-select a');
   const imgShowcase = useRef(null);
   const imgBtns = [...imgs];
   let imgId = 1;
   const dispatch = useDispatch()
   const productDetails = useSelector(state => state.productDetails)
   const {loading,error,product} = productDetails
   const userLogin = useSelector(state => state.userLogin)
   const {userInfo} = userLogin
   const productReviewCreate = useSelector(state => state.productReviewCreate)
   const {success:successProductReview,error:errorProductReview,} = productReviewCreate
   const { isOpenThis, onToggle } = useDisclosure()
  


 imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});



function slideImage(){
  const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    imgShowcase.current.style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}


useEffect(()=>{
  if(successProductReview){
    alert('Review Submitted!')
    setrating(0)
    setcomment('')
    dispatch({type : PRODUCT_CREATE_REVIEW_RESET})

  }
  dispatch(listProductDetails(match.params.id))

}
,[dispatch,match,successProductReview])

const submithanlder = () =>{
  dispatch(createproductReview(match.params.id,
    {
      rating,
      comment

    }
  ))
}
  //Handler of button add to cart
  const addToCartHandler = () =>{
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }
    return (
      <>
      <Helmet>
      <title>{product.name}</title>
      </Helmet>
        <div className = 'productpage'>
          {loading ?  <div className='loading-product'>
                          <HashLoader   color={"#1e1e2c"}  loading={loading} size={50} />
                     </div>  : error ?  <h2>{error} </h2>  : 

     <div className = "card-wrapper">
      <div className = "card">
        <div className = "product-imgs">
        <div className = "img-display">
            <div ref={imgShowcase}  className = "img-showcase">
              {product.images.map(i => (
              <Image src= {i} />  
              ))}


              

             
            </div>
          </div>
          <div className = "img-select">
            <div className = "img-item">
              <a href = "#" data-id = "1">
                <Image  objectFit="cover" boxSize = '200px' src = {product.images[0]} alt = "shoe image"/>


              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "2">
                <Image  objectFit="cover" boxSize = '200px' src = {product.images[1]} alt = "shoe image"/>

              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "3">
                <Image  objectFit="cover"  boxSize = '200px' src = {product.images[2]} alt = "shoe image"/>
                
              </a>
            </div>
        
          </div>
        </div>
 
        <div className = "product-content">
          <h2 className = "product-title">{product.name} </h2>
          {/*<Link to = {product.link} className = "product-link">visit college link</Link> */}
          <a href={product.link} className="product-link">
          Visit College Link
        </a>
              <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              />
         {/* <div className = "product-price">
            <p className = "last-price">Old Price: <span>${product.price + product.price * 0.5}</span></p>
            <p className = "new-price">New Price: <span>${product.price} (5%)</span></p>
              </div> */}
              
          
              <Accordion allowToggle>
              {/* <AccordionItem>
                <h2>
                  <AccordionButton  _expanded={{ bg: 'tomato', color: 'white' }}>
                    <Box flex='1' textAlign='left'>
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
            </AccordionItem> */}

              <AccordionItem>
                <h2>
                  <AccordionButton  _expanded={{ bg: 'tomato', color: 'white' }}>
                    <Box flex='1' textAlign='left'>
                      About this College
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
               {product.description}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          <div className = "product-detail">
          <br />
          <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Show Courses
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Seats Available</DrawerHeader>
          {product.sizes.map(size =>(
            <option value={size}>{size}</option>

))}
         {/* <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody> */}
         

          {/* <ul>
          <li>Courses</li> <Select  className='select-product' placeholder="See courses">
            {product.sizes.map(size =>(
                                 <option value={size}>{size}</option>

            ))}
           </Select>
            </ul> */}
            
           
          {/* <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose} color={'blue'}>
              Cancel
            </Button> 
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter> */}
          </DrawerContent> 
      </Drawer>
      <br/>
      <br />
    

          
            
            {/* <div>
           <ul>
             <li>Courses</li> <Select  className='select-product' placeholder="See courses">
               {product.sizes.map(size =>(
                                    <option value={size}>{size}</option>

               ))}
                                </Select>
           </ul>
               </div> */}
               <br />
               <h1>Placement Percentage</h1>
               <Progress colorScheme='green' height='32px' value={product.placementPercentage} />
               <Stat>
  <StatLabel>Rating</StatLabel>
  <StatNumber>{product.rating}</StatNumber>
</Stat>
<Stat>
<StatLabel>Student Intake</StatLabel>
<StatNumber>{product.StudentIntake}</StatNumber>
</Stat>
<Stat>
<StatLabel>Total Faculty</StatLabel>
<StatNumber>{product.TotalFaculty}</StatNumber>
</Stat>
<Stat>
<StatLabel>Nirf</StatLabel>
<StatNumber>{product.Nirf}</StatNumber>     
</Stat>
<Stat>
<StatLabel>Business Today</StatLabel>
<StatNumber>{product.BussToday}</StatNumber>     
</Stat>
<Stat>
<StatLabel>The Week</StatLabel>
<StatNumber>{product.TheWeek}</StatNumber>     
</Stat>
<Stat>
<StatLabel>OutLook</StatLabel>
<StatNumber>{product.Outlook}</StatNumber>     
</Stat>


            <ul>

              <li>Seats: <span>{product.countInStock > 0 ? 'Currently Seats Available' :  'No Admissions Available'}</span></li>
              {/*<li>Category: <span>{product.category.map(cg =>' | ' + cg + ' | ')}</span></li> */}
              <li>Location: <span>{product.location}</span></li>
              {/* <div>
                <ul> <li>Qty :</li>
             {product.countInStock > 0 ?
              <Select as='select' size="md" maxW={20}  value={qty} className='select-product' onChange={(e) => setQty(e.target.value)} >
                {[...Array(product.countInStock).keys()].map((x) => (              
                                    <option key={x+1} value={x+1}>
                                      {x+1}
                                    </option> ))}
                                    
                                </Select>
              :  <span style={{display:'flex'}}><MdDoNotDisturb   size='26'/>   OUT OF STOCK  </span>
              }
                </ul>
            </div> */}
            </ul>
          </div>
               <div className = "purchase-info">
            <Button onClick={addToCartHandler} type = "button"  className = "btn-shop" disabled={product.countInStock === 0}> <AiFillShop size='24' />Apply Now </Button>
          </div>
        </div>
      </div>
      {/* 
      <div className = "social-links">
      <p>Share On: </p>
      <Link className = 'social' to = "#">
        <i> <IoLogoFacebook size='20'/></i>
      </Link>
      <Link className = 'social' href = "#">
        <i><AiFillTwitterCircle size='20'/></i>
      </Link>
      <Link  className = 'social' href = "#">
        <i><AiFillInstagram size='20'/> </i>
      </Link>
    </div>
            */}
      
    </div>
    }
      <div className ='REVIEWS'>
        <h1>Reviews :</h1>
        {product.reviews.length === 0 && <h2>NO REVIEWS</h2>}
        <div>
          {product.reviews.map(review =>(
            <div className='review'>
              <h4>{review.name}</h4>
              <div className = 'Ratingreview'>
              <Rating value={review.rating}/>

              </div>
              <p className ='commentreview'>{review.comment}</p>
              <p className ='datereview'>{review.createdAt.substring(0,10)}</p>

            </div>

          ))}
              <div className ='createreview'>
              <h1>Create New Review :</h1>
              {errorProductReview && <h2>{errorProductReview}</h2>}
              {userInfo ? (
              <FormControl>
              <FormLabel>Rating :</FormLabel>
              <Select onChange = {(e)=> setrating(e.target.value)} >
              <option value='1'>1 POOR</option>
              <option value='2'>2 FAIR</option>
              <option value='3'>3 GOOD</option>
              <option value='4'>4 VERY GOOD</option>
              <option value='5'>5 EXCELLENT</option>
              </Select>
              <FormLabel>Comment :</FormLabel>
              <Textarea onChange = {(e)=> setcomment(e.target.value)} placeholder = 'Leave Comment here :'/>
              <Button colorScheme ='blue' onClick = {submithanlder}>Submit</Button>
            </FormControl>
            
              ) :
              <>
              Please <Link to = '/login'>Sign In</Link> To write a review.
              </>
              
              }

              </div>
        </div>
      </div>
        </div>
        </>

    )
    
}

export default Productpage
