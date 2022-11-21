import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Posts() {
  const navigate = useNavigate()

  function onClickHandle() {
    // console.log("asdfasdfasdfsa")
    navigate("/main");
  }
  return (
    <div className='main_container'>
      <div className="main_img_cont">
        <img src="../image/main.png" alt="Image" />
      </div>
      <div className="main_button_cont">
        <button onClick={onClickHandle}>Enter</button>
      </div>
    </div>
  )
}
