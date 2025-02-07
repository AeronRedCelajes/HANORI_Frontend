import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeComponents } from "./components/HomeComponent"
import { SignInComponent } from "./components/SignInComponent"
import { PlaygroundComponent } from './components/student/PlaygroundComponent'
import { DashboardComponent } from './components/student/DashboardComponent'
import { SignUpComponent } from './components/SignUpComponent'
import { ClassManagementComponent } from './components/student/ClassManagementComponent'
import { CodingAssessmentComponent } from './components/student/CodingAssessmentComponent'
import { ProfileComponent } from './components/student/ProfileComponent'


import { DashboardComponent as TeacherDashboard } from './components/teacher/DashboardComponent';
import { ClassManagementComponent as TeacherClassManagement } from './components/teacher/ClassManagementComponent';
import NavigationBar from './components/teacher/AMNavigationBarComponent'
import ActivitySettingsComponent from './components/teacher/ActivitySettingsComponent'
import ActivityItemsComponent from './components/teacher/ActivityItemsComponent'
import LeaderboardComponent from './components/teacher/LeaderboardComponent'

function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<HomeComponents/>} />
          <Route path='/home' element={<HomeComponents/>}/>
          <Route path='/signin' element={<SignInComponent/>} />
          <Route path='/signup' element={<SignUpComponent/>} />

          {/* STUDENT
          <Route path='/login' element={<DashboardComponent/>}/>
          <Route path='/sandbox' element={<PlaygroundComponent/>}/>
          <Route path='/dashboard' element={<DashboardComponent/>}/>
          <Route path='/profile' element={<ProfileComponent/>}/>
          <Route path='/class' element={<ClassManagementComponent/>}/>
          <Route path='/assessment' element={<CodingAssessmentComponent/>}/> */}

          {/* TEACHER */}
          <Route path='/navigationbar' element={<NavigationBar/>} />
          <Route path='/login' element={<TeacherDashboard/>}/>
          <Route path='/dashboard' element={<TeacherDashboard/>}/>
          <Route path='/class' element={<TeacherClassManagement/>}/>
          <Route path='/leaderboard' element={<LeaderboardComponent/>}/>
          <Route path='/items' element={<ActivityItemsComponent/>}/>
          <Route path='/settings' element={<ActivitySettingsComponent/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
