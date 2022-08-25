import React,{useState,useEffect} from 'react'
import Slider from '../components/Slider'
import Cardscg from '../components/Cardscg'
import CgDiv from '../components/CgDiv'
import ProductsCModified from '../components/ProductsC'
import { Helmet } from 'react-helmet';
import { Link,Route } from 'react-router-dom'

import Search from '../components/Search'

const Home = () => {
 
    return (
        <>
        <Helmet>
            <title>AIUD</title>
        </Helmet>
             <div>
             <br/>
             <br />
             <br />
             <Route render = {({history}) => <Search  history = {history}/> }/> 
                <Slider/>
                 <div className="cards">
                         <Cardscg title='UG'/>
                         <Cardscg title='PG'/>
                         <Cardscg title='PHD'/>
                         <Cardscg title='IIT'/>
                         <Cardscg title='NIT'/>
                         <Cardscg title='IIIT'/>              
                 </div>
                <CgDiv/>
                
                <ProductsCModified/>
        </div>
        </>
    )
}

export default Home
