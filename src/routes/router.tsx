import { ErrorPage } from '../components/ErrorPage'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import React from 'react'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
])
