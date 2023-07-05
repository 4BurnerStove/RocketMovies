import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
// import { SignIn } from './pages/SignIn'
// import { SignUp } from './pages/SignUp'
import { Profile } from '../pages/Profile'
import { CreateMovie } from '../pages/CreateMovie'
import { Moviepreview } from '../pages/Moviepreview'


export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/createmovie' element={<CreateMovie/>}/>
      <Route path='/moviepreview/:id' element={<Moviepreview/>}/>
    </Routes>
  )
}