import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './components/Home';
import LearnPage from './components/LearnPage';
import LessonPages from './components/LessonPages';
import TutorialPage from './components/TutorialPage';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import MyProfile from './components/MyProfile';
import UpdateProfile from './components/UpdateProfile';
import AboutUs from './components/AboutUs';
import ForgetPass from './components/ForgetPass';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/learnPage",
            element: <LearnPage></LearnPage>
        },
        {
            path: "/lesson/:lesson_no",
            element: <PrivateRoute><LessonPages></LessonPages></PrivateRoute>,
            loader:()=>fetch("/data.json")
        },
        {
            path: "/tutorialPage",
            element: <PrivateRoute><TutorialPage></TutorialPage></PrivateRoute>,
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
          path:"/myProfile",
          element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path:"/update-profile",
        element:<UpdateProfile></UpdateProfile>

      },
      {
        path:"/AboutUs",
        element:<AboutUs></AboutUs>

      },
      {
        path:"/forget-password",
        element:<ForgetPass></ForgetPass>
      },

        

      ]
    },
  ]);

export default router