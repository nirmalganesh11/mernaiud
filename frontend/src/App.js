import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About/About'
import Shop from './pages/Shop'
import Contactus from './pages/Contactus/Contactus'
import Productpage from './pages/Product/Productpage'
import Cartpage from './pages/Cart/Cartpage'
import Footer from './pages/Footer/Footer'
import LoginScreen from './pages/Login/LoginScreen'
import React, {useState,useEffect} from 'react'
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react" 
import ScrollIntoView from "./components/Scrollintoview";
import HashLoader from "react-spinners/HashLoader";
import RegisterScreen from './components/RegisterScreen'
import ProfileScreen from './components/ProfileScreen'
import Checkout from "./pages/checkout/Checkout";
import Placeorder from './pages/placeorder/Placeorder'
import Order from './pages/Order/Order'
import Users from './pages/Userslist/Users'
import NotFoundPage from './components/Notfoundpage'
import Edituser from './pages/Useredit/Edituser'
import Products from './pages/products/products'
import Editproduct from './pages/Editproduct/Editproduct'
import Orders from './pages/Orders/Orders'
import SecondNav from './components/SecondNav'
//import Appy from './components/CompareModule/Components/App'
import Appy from './components/comparemodule/components/ProductComparison'
import News from './components/TotalTry/App'
import ShopCourse from './pages/ShopCourse'
import ProductPageModified from './pages/Product/CourseProductPage'
//import news from './NewsModule/app'
//import HomePage from './ReviewSystem/components/HomePage.js'
//import EditPage from './ReviewSystem/src/components/EditPage'
import Apple from './components/ranking/App'

import leaderboard from './components/leaderboard/App'
//import ProfilePage from './components/profilepage/ProfilePage'
import review from './components/reviewapp/App'
import uploadfiles from './components/uploadmodule/components/App'
import FilesList from './components/uploadmodule/components/FilesList'
import Result from './components/results/result'
import BarChart from './components/chart/chart'
import GenerateCertificate from './components/certgeneratemodule/certgen'


 const App = () => { 
  const  [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout( ()=> {
      setLoading(false)
    },3000)

  }, [])

  return (
    <div className = 'main'>
<ChakraProvider>
       <Router>
         <ScrollIntoView>
         {loading ?   
            <div className='loading'>
                 <HashLoader   color={"#1e1e2c"}  loading={loading} size={40} />
            </div>
          :
         <>
                 <SecondNav/>
                 <Switch>              
                 <Route path="/" exact component={Home}/>
                 <Route path="/generatecert" component={GenerateCertificate} />
                 <Route path="/news" exact component={News}/>
                 <Route  path="/files" component={uploadfiles}/>
                 <Route  path="/list" component={FilesList}/>
                 <Route path="/compare" exact component={Appy}/>
                 <Route path="/about" component={About}/>
                 <Route path='/chart' component={BarChart} />
                 <Route path="/results" component={Result}/>
                 <Route path="/universities" component={Shop}/>
                 <Route path="/leaderboard" component={leaderboard}/>
                 <Route path="/profilepage" component={leaderboard}/>
                 <Route path="/recomended" component={Apple}/>
                 <Route path="/courses" component={ShopCourse}/>
                 <Route path="/contactus" component={Contactus}/>
                 <Route path="/product/:id" component={Productpage}/>
                 <Route path="/course/:id" component={ProductPageModified}/>
                 <Route path="/cart/:id?" component={Cartpage}/>
                 <Route path="/login" component={LoginScreen}/>
                 <Route path="/register" component={RegisterScreen}/>
                 <Route path="/profile" component={ProfileScreen}/>
                 <Route path="/shipping" component={Checkout}/>
                 <Route path="/placeorder" component={Placeorder}/>
                 <Route path="/order/:id" component={Order}/>
                 <Route path="/admin/userlist" component={Users}/>
                 <Route path="/admin/productlist" component={Products}/>
                 <Route path="/admin/orderlist" component={Orders}/>
                 <Route path="/search/:keyword" component={Shop}/>
                 <Route path="/admin/user/:id/edit" component={Edituser}/>
                 <Route path="/admin/product/:id/edit" component={Editproduct}/>
                 <Route component={NotFoundPage} />
                 </Switch>
                 <Footer/>
          </>
         }
        </ScrollIntoView>
      </Router>
   </ChakraProvider>
    </div>
     
    
  )
}
export default App;
