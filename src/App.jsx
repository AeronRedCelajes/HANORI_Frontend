import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignInComponent } from "./components/SignInComponent"
import { HomeComponents } from "./components/HomeComponent"
import { ProfileComponent } from './components/student/ProfileComponent'
import { PlaygroundComponent } from './components/student/PlaygroundComponent'
import { DashboardComponent } from './components/student/DashboardComponent'
import { SignUpComponent } from './components/SignUpComponent'
import { ClassManagementComponent } from './components/student/ClassManagementComponent';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomeComponents/>} />
          <Route path='/signin' element={<SignInComponent/>} />
          <Route path='/signup' element={<SignUpComponent/>} />
          <Route path='/login' element={<DashboardComponent/>}/>
          <Route path='/sandbox' element={<PlaygroundComponent/>}/>
          <Route path='/dashboard' element={<DashboardComponent/>}/>
          <Route path='/profile' element={<ProfileComponent/>}/>
          <Route path='/home' element={<HomeComponents/>}/>
          <Route path='/class' element={<ClassManagementComponent/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
