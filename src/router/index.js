import Vue from 'vue'
import Router from 'vue-router'
// import TeacherHome from '@/views/TeacherHome'
// import ClassApplication from '@/views/ClassApplication'
// import ClassEvaluate from '@/views/ClassEvaluate'
// import ClassManagement from '@/views/ClassManagement'
// import ApplicationRecord from '@/views/ApplicationRecord'
// import Photo from '@/views/Photo'
// import StudentList from '@/views/StudentList'
// import TeacherReviews from '@/views/TeacherReviews'
// import ClassRecord from '@/views/ClassRecord'
// import Register from '@/views/Register'
// import Login from '@/views/Login'
// import GrowthRecord from '@/views/GrowthRecord'
// import Set from '@/views/Set'
// import SchoolNews from '@/views/SchoolNews'
// import CourseClassification from '@/views/CourseClassification'
// import Curriculavariable from '@/views/Curriculavariable'
// import CourseSelected from '@/views/CourseSelected'
import StudentHome from '@/views/StudentHome'
// import CourseDetails from '@/views/CourseDetails'
// import CampusInformation from '@/views/CampusInformation'
// import PersonalHomepage from '@/views/PersonalHomepage'
// import RetrievePassword from '@/views/RetrievePassword'
// import ContentDetails from '@/views/ContentDetails'
// import ChangePassword from '@/views/ChangePassword'
// import ChangePersonalInformation from '@/views/ChangePersonalInformation'
// import Message from '@/views/Message'

const TeacherHome = resolve => require(['@/views/TeacherHome'],resolve)
const ClassApplication = resolve => require(['@/views/ClassApplication'],resolve)
const ClassEvaluate = resolve => require(['@/views/ClassEvaluate'],resolve)
const ClassManagement = resolve => require(['@/views/ClassManagement'],resolve)
const ApplicationRecord = resolve => require(['@/views/ApplicationRecord'],resolve)
const Photo = resolve => require(['@/views/Photo'],resolve)
const StudentList = resolve => require(['@/views/StudentList'],resolve)
const TeacherReviews = resolve => require(['@/views/TeacherReviews'],resolve)
const ClassRecord = resolve => require(['@/views/ClassRecord'],resolve)
const Register = resolve => require(['@/views/Register'],resolve)
const Login = resolve => require(['@/views/Login'],resolve)
const GrowthRecord = resolve => require(['@/views/GrowthRecord'],resolve)
const Set = resolve => require(['@/views/Set'],resolve)
const SchoolNews = resolve => require(['@/views/SchoolNews'],resolve)
const CourseClassification = resolve => require(['@/views/CourseClassification'],resolve)
const Curriculavariable = resolve => require(['@/views/Curriculavariable'],resolve)
const CourseSelected = resolve => require(['@/views/CourseSelected'],resolve)
// const StudentHome = resolve => require(['@/views/StudentHome'],resolve)
const CourseDetails = resolve => require(['@/views/CourseDetails'],resolve)
const CampusInformation = resolve => require(['@/views/CampusInformation'],resolve)
const PersonalHomepage = resolve => require(['@/views/PersonalHomepage'],resolve)
const RetrievePassword = resolve => require(['@/views/RetrievePassword'],resolve)
const ContentDetails = resolve => require(['@/views/ContentDetails'],resolve)
const ChangePassword = resolve => require(['@/views/ChangePassword'],resolve)
const ChangePersonalInformation = resolve => require(['@/views/ChangePersonalInformation'],resolve)
const Message = resolve => require(['@/views/Message'],resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/teacherHome',
      name: 'TeacherHome',
      component: TeacherHome
    },
    {
      path: '/application',
      name: 'ClassApplication',
      component: ClassApplication
    },
    {
      path: '/evaluate',
      name: 'ClassEvaluate',
      component: ClassEvaluate
    },
    {
      path: '/management',
      name: 'ClassManagement',
      component: ClassManagement
    },
    {
      path: '/applicationRecord',
      name: 'ApplicationRecord',
      component: ApplicationRecord
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/studentList',
      name: 'StudentList',
      component: StudentList
    },
    {
      path: '/teacherReviews',
      name: 'TeacherReviews',
      component: TeacherReviews
    },
    {
      path: '/record',
      name: 'ClassRecord',
      component: ClassRecord
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/growthRecord',
      name: 'GrowthRecord',
      component: GrowthRecord
    },
    {
      path: '/set',
      name: 'Set',
      component: Set
    },
    {
      path: '/schoolNews',
      name: 'SchoolNews',
      component: SchoolNews
    },
    {
      path: '/courseClassification',
      name: 'CourseClassification',
      component: CourseClassification
    },
    {
      path: '/curriculavariable',
      name: 'Curriculavariable',
      component: Curriculavariable
    },
    {
      path: '/courseSelected',
      name: 'CourseSelected',
      component: CourseSelected
    },
    {
      path: '/studentHome',
      name: 'StudentHome',
      component: StudentHome
    },
    {
      path: '/courseDetails',
      name: 'CourseDetails',
      component: CourseDetails
    },
    {
      path: '/campusInformation',
      name: 'CampusInformation',
      component: CampusInformation
    },
    {
      path: '/personalHomepage',
      name: 'PersonalHomepage',
      component: PersonalHomepage
    },
    {
      path: '/changePassword',
      name: 'ChangePassword',
      component: ChangePassword
    },
    {
      path: '/retrievePassword',
      name: 'RetrievePassword',
      component: RetrievePassword
    },
    {
      path: '/contentDetails',
      name: 'ContentDetails',
      component: ContentDetails
    },
    {
      path: '/changePersonalInformation',
      name: 'ChangePersonalInformation',
      component: ChangePersonalInformation
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
  ]
})
