import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { Container } from "react-bootstrap"
import "./App.css"
import { Header } from "./components/page/Header"
import { HomePage } from "./screens/HomePage"

export const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
