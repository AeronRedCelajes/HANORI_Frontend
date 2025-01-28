import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignInComponent } from "./components/SignInComponent"
import { HomeComponents } from "./components/HomeComponent"
import { ProfileComponent } from "./components/ProfileComponent"
import { PlaygroundComponent } from "./components/PlaygroundComponent"
import { DashboardComponent } from './components/DashboardComponent'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomeComponents />} />
          <Route path='/signin' element={<SignInComponent />} />
          <Route path='/login' element={<DashboardComponent/>}/>
          <Route path='/sandbox' element={<PlaygroundComponent/>}/>
          <Route path='/dashboard' element={<DashboardComponent/>}/>
          <Route path='/profile' element={<ProfileComponent/>}/>
          <Route path='/home' element={<HomeComponents/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
