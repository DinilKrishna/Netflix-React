import React, {useState, useEffect} from 'react'
import axios from '../../axios'
import './RowPost.css'
import { APIKey, ImageURL } from '../../Constants/constants'

function RowPost({ title }) {
    const [movies, setMovies] = useState([])
  useEffect(()=>{
    axios.get(`discover/tv?api_key=${APIKey}&with_nertworks=213`).then((response)=>{
        console.log(response.data);    
        setMovies(response.data.results)
    }).catch(err=>{
        alert('Network Error')
    })
  }, [])  
  return (
    <div className='row'>
        <h1 className='ml-5'>{title}</h1>
        <div className="posters">
            {movies.map((obj)=>
                <img className='poster' src={`${ImageURL+obj.backdrop_path}`} alt="" /> 
            )}
        </div>
    </div>
  )
}

export default RowPost