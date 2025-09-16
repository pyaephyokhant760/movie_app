import React, { useEffect } from 'react'
import Movies from './Movies';
import { api, api_key } from '../api';
import { useDispatch } from 'react-redux';
import { fetchMovie } from '../redux/action/movies';

const Home = () => {

  const dispatch = useDispatch()

  const getMovie = async () => {
    const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
    dispatch(fetchMovie(res.data.results))

    // console.log(res.data.results);
    
  }
  useEffect(()=> {
    getMovie()
  },[])
  return (
   <div>
    <Movies/>
   </div>
  )
}

export default Home