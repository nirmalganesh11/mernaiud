import React from 'react'
import { Link } from 'react-router-dom'

const Cardscg = ({title}) => {
    return (

        <div className="cardscg">
            <h1>{title}</h1>
            <Link to ={`/Universities/?cg=${title}`} className="ShopNowcg">See List now</Link>
        </div>
    )
}

export default Cardscg
