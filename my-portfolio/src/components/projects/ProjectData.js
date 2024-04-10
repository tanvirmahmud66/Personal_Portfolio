import Landing_csbox from '../../assets/Project/csbox/Landing.png'
import Assignment_csbox from '../../assets/Project/csbox/Assignment.png'
import AssginmentExpand_csbox from '../../assets/Project/csbox/AssignmentExpand.png'
import CreateSession_csbox from '../../assets/Project/csbox/Create_session.png'
import createAssignment_csbox from '../../assets/Project/csbox/createAssignment.png'
import CreatePost_csbox from '../../assets/Project/csbox/CreatePost.png'
import DeleteAssignment_csbox from '../../assets/Project/csbox/DeleteAssignment.png'
import DeleteSession_csbox from '../../assets/Project/csbox/DeleteSession.png'
import Edit_session_csbox from '../../assets/Project/csbox/Edit_session.png'
import EditAssignment_csbox from '../../assets/Project/csbox/EditAssignment.png'
import files_csbox from '../../assets/Project/csbox/files.png'
import filesUpload_csbox from '../../assets/Project/csbox/filesUpload.png'
import ForgetPassword_csbox from '../../assets/Project/csbox/Forget_password.png'
import Homepage_csbox from '../../assets/Project/csbox/Homepage.png'
import LeaveSession_csbox from '../../assets/Project/csbox/LeaveSession.png'
import Settings1_csbox from '../../assets/Project/csbox/Settings1.png'
import Settings2_csbox from '../../assets/Project/csbox/Settings2.png'
import SingleSession_csbox from '../../assets/Project/csbox/SignleSession.png'
import Signup_csbox from '../../assets/Project/csbox/Signup.png'
import SingleSession2_csbox from '../../assets/Project/csbox/SingleSessoin2.png'

import Landing_appsmanager from '../../assets/Project/appsmanager/1.png'
import Weather_appsmanager from '../../assets/Project/appsmanager/2.png'
import Quiz1_appsmanager from '../../assets/Project/appsmanager/3.png'
import Quiz2_appsmanager from '../../assets/Project/appsmanager/4.png'
import Quiz3_appsmanager from '../../assets/Project/appsmanager/5.png'
import Quiz4_appsmanager from '../../assets/Project/appsmanager/6.png'
import Quiz5_appsmanager from '../../assets/Project/appsmanager/7.png'

import pic1_auth from '../../assets/Project/social_auth_dj/1.png'
import pic2_auth from '../../assets/Project/social_auth_dj/2.png'
import pic3_auth from '../../assets/Project/social_auth_dj/3.png'
import pic4_auth from '../../assets/Project/social_auth_dj/4.png'

import ss_1 from '../../assets/Project/awa/ss_1.png'
import ss_2 from '../../assets/Project/awa/ss_2.png'
import ss_3 from '../../assets/Project/awa/ss_3.png'
import ss_4 from '../../assets/Project/awa/ss_4.png'
import ss_5 from '../../assets/Project/awa/ss_5.png'
import ss_6 from '../../assets/Project/awa/ss_6.png'
import ss_7 from '../../assets/Project/awa/ss_7.png'
import ss_8 from '../../assets/Project/awa/ss_8.png'
import ss_9 from '../../assets/Project/awa/ss_9.png'
import ss_10 from '../../assets/Project/awa/ss_10.png'
import ss_11 from '../../assets/Project/awa/ss_11.png'
import ss_12 from '../../assets/Project/awa/ss_12.png'
import ss_13 from '../../assets/Project/awa/ss_13.png'
import ss_14 from '../../assets/Project/awa/ss_14.png'
import ss_15 from '../../assets/Project/awa/ss_15.png'
import ss_16 from '../../assets/Project/awa/ss_16.png'
import ss_17 from '../../assets/Project/awa/ss_17.png'

import amarshop1 from '../../assets/Project/amarshop/1_amarshop.png'
import amarshop2 from '../../assets/Project/amarshop/2_amarshop.png'
import amarshop3 from '../../assets/Project/amarshop/3_amarshop.png'
import amarshop4 from '../../assets/Project/amarshop/4_amarshop.png'




const projects = [
    {
        id:1,
        name:"Amar Shop",
        project_name:"Amar Shop",
        description:"Amar Shop is a single level inventory Management System admin dashboard.",
        thumbnail:amarshop1,
        frontend:['Django Template Engine', 'Bootstrap','Chart.js'],
        backend:["Django", "MVT","Postgresql"],
        screenShots:[amarshop1,amarshop2,amarshop3,amarshop4],
        projectLink:'https://amarshop-v1.onrender.com/admin-panel/'
    },
    {
        id:2,
        name:"AWA Software House",
        project_name:"AWA Software House",
        description:"AWA Software House is a software firm official Landing Template website with React.",
        thumbnail:ss_1,
        frontend:['React', 'Tailwind', 'Netlify'],
        backend:[],
        screenShots:[ss_1,ss_2,ss_3,ss_4,ss_5,ss_6,ss_7,ss_8,ss_9,ss_10,ss_11,ss_12,ss_13,ss_14,ss_15,ss_16,ss_17],
        projectLink:'https://awasoftwarehouse.netlify.app'
    },
    {
        id:3,
        name:"csbox",
        project_name:"csbox - Virtual Learnin Platform",
        description:"CSBox is a cutting-edge virtual learning platform revolutionizing online education.",
        thumbnail:Landing_csbox,
        frontend:['Javascript', 'React', 'Bootstrap', 'Netlify'],
        backend:['Python','Django','Rest-Framework','Rest APIs', 'Pythonanywhere'],
        screenShots:[Landing_csbox,Signup_csbox, ForgetPassword_csbox,Homepage_csbox, CreateSession_csbox,Settings1_csbox, Edit_session_csbox,DeleteSession_csbox,Settings2_csbox,LeaveSession_csbox,SingleSession_csbox,SingleSession2_csbox,CreatePost_csbox,files_csbox,filesUpload_csbox,Assignment_csbox,createAssignment_csbox,EditAssignment_csbox,DeleteAssignment_csbox,AssginmentExpand_csbox],
        projectLink:'https://csbox.netlify.app'
    },
    {
        id:4,
        name:"appsmanager",
        project_name:"Apps Manager",
        description:"Task Manager, Weather app, Quiz app.",
        thumbnail:Landing_appsmanager,
        frontend:['React', 'Tailwind', 'Netlify'],
        backend:['Django','Rest-Framework','Pythonanywhere'],
        screenShots:[Landing_appsmanager,Weather_appsmanager,Quiz1_appsmanager,Quiz2_appsmanager,Quiz3_appsmanager,Quiz4_appsmanager,Quiz5_appsmanager],
        projectLink:'https://appsmanager.netlify.app'
    },
    {
        id:5,
        name:"AuthWithSocialLogin",
        project_name:"Django Auth & Social Login",
        description:"Django Production Level Authentication with Google and Facebook Login with Custom user",
        thumbnail:pic1_auth,
        frontend:['React', 'Tailwind'],
        backend:['Django', 'djoser','Oauth2','SSO','JWT','DRF',],
        screenShots:[pic1_auth,pic2_auth,pic3_auth,pic4_auth],
        projectLink:'https://github.com/tanvirmahmud66/Auth_with_Social.git'
    }
]

export default projects;