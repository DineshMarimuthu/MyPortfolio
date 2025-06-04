import React from 'react'

import {Routes, Route} from 'react-router-dom'
import MyPage from '../components/MyPage'

const RootRouter = () => {
 
    return (
    <Routes>
        <Route path="/" element={<MyPage/>}/>
    </Routes>

  );
 
  
}

export default RootRouter;
