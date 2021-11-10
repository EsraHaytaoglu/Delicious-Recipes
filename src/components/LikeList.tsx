import React from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '../store'




function LikeList() {
    const favId = useSelector((state:AppState)=> state.favList.data)
    
    
    console.log(favId , "idd");
    
    return (
        <div>
            
        </div>
    )
}

export default LikeList
