import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Viewposts({ info }) {
  const [post, setPost] = useState([]);


  useEffect(() => {
    axios.get('https://temp-app-instaclone.herokuapp.com/render').then(res => {
      console.log(res.data)
      setPost(res.data);
    })

  }, [])


  return (
    <div className="home">
      {
        post.map((info,i) => {
          return (
            <div className='card_container' id={i}>
              <div className="header">
                <div className="detail">
                  <h4>{info.author}</h4>
                  <p>{info.location}</p>
                </div>
                <div className='dot'>...</div>
              </div>

              <div className="mid_img">
                <img src={info.file} alt="" />
              </div>

              <div className="footer">
                <div className="icon_date">

                  <div className="icon">
                    <img src="https://cdn-icons-png.flaticon.com/128/2938/2938590.png" alt="heart" />
                    <img src="https://cdn-icons-png.flaticon.com/128/786/786205.png" alt="arrow" />
                  </div>
                  <div className="date">{info.date}</div>
                </div>
                <div className="like">10</div>
                <div className="disc">{info.discription}</div>
              </div>
            </div>
          )
        })
      }
    </div>

  )
}
