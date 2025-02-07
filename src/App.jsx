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
import NavigationBar from './components/teacher/AMNavigationBarComponent'
import ActivitySettingsComponent from './components/teacher/ActivitySettingsComponent'
import ActivityItemsComponent from './components/teacher/ActivityItemsComponent'
import LeaderboardComponent from './components/teacher/LeaderboardComponent'
import ClassRecord from './components/teacher/CMClassRecordComponent'

import CMNavigationBarComponent from './components/teacher/CMNavigationBarComponent';
import { CMActivitiesComponent } from './components/teacher/CMActivitiesComponent';
import { CMBulletinComponent } from './components/teacher/CMBulletinComponent';

import { PlaygroundComponent as TeacherPlayground} from './components/teacher/PlaygroundComponent';
import { ProfileComponent as TeacherProfile } from './components/teacher/ProfileComponent';
import { BulletinComponent } from './components/BulletinComponent';
import { TCHRCodingAssessmentComponent } from './components/teacher/TCHRCodingAssessmentComponent';
import { CreateActivityComponent } from './components/teacher/AMCreateNewActivityComponent';

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

          TEACHER
          <Route path='/dashboard' element={<TeacherDashboard/>}/>
          <Route path='/sandbox' element={<TeacherPlayground/>}/>
          <Route path='/profile' element={<TeacherProfile/>}/>

          ACTIVITY MANAGEMENT
          <Route path='/navigationbar' element={<NavigationBar/>} />
          <Route path='/login' element={<TeacherDashboard/>}/>
          <Route path='/leaderboard' element={<LeaderboardComponent/>}/>
          <Route path='/items' element={<ActivityItemsComponent/>}/>
          <Route path='/settings' element={<ActivitySettingsComponent/>}/>

          CLASS MANAGEMENT
          <Route path='/cmNavigationBar' element={<CMNavigationBarComponent/>} />
          <Route path='/classrecord' element={<ClassRecord/>}/>
          <Route path='/activities' element={<CMActivitiesComponent/>}/>
          <Route path='/teacher-bulletin' element={<CMBulletinComponent/>}/>

          CREATE NEW ACTIVITY
          <Route path='/tchr-coding-assessment' element={<TCHRCodingAssessmentComponent/>}/>
          <Route path='/create-new-activity' element={<CreateActivityComponent/>}/>
          
        </Routes>
    </Router>
    </>
  )
}

export default App
