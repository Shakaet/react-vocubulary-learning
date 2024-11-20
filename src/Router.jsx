import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './components/Home';
import LearnPage from './components/LearnPage';
import LessonPages from './components/LessonPages';
import TutorialPage from './components/TutorialPage';

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
            element: <LessonPages></LessonPages>,
            loader:()=>fetch("/data.json")
        },
        {
            path: "/tutorialPage",
            element: <TutorialPage></TutorialPage>,
        },

      ]
    },
  ]);

export default router