import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
export default function CreatePost() {

    const navigate = useNavigate();


    const [data, setData] = useState({
        file: '',
        author: '',
        location: '',
        discription: ''
    })
    
   
    
    const onsubmitHandel = async (e) => {
      e.preventDefault()
      
      const postData = new FormData()
      

      for ( var key in data ) {
        postData.append(key, data[key]);
      }
      axios.post('https://temp-app-instaclone.herokuapp.com/update', postData,{})
      .then(res => console.log(res))
      .catch(e => console.log(e));

      navigate('/main/view')
      

    }

  return (
    <div className='form_container'>
      <form onSubmit={onsubmitHandel} method='#'>
        <div className="single_col">
        <input type="file" name="file" id="file" onChange={e => {
            // const file = e.target.files[0];
            setData(data => ({...data,file:e.target.files[0]}))
        }} />
        </div>
        <div className="double_col">
            <input type="text" name="author" id="author" placeholder='author' value={data.author} onChange={e => setData(data => ({...data,author:e.target.value}))}/>
            <input type="text" name="location" id="location" placeholder='location'value={data.location} onChange={e => setData(data => ({...data,location:e.target.value}))}/>
        </div>
        <div className="single_col disc">
            <input type="text" name="discription" id="discription" placeholder='discription'value={data.discription} onChange={e => setData(data => ({...data,discription:e.target.value}))}/>
        </div>
        <div className="form_footer">
            <button type='submit'>upload</button>
        </div>    
      </form>
    </div>
  )
}
