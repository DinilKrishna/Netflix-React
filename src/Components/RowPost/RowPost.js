import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import './RowPost.css';
import Youtube from 'react-youtube';
import { ImageURL, APIKey } from '../../Constants/constants';

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState('');
    const [showVideo, setShowVideo] = useState(false); // State to control video visibility

    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setMovies(response.data.results);
        }).catch(err => {
            alert('Network Error');
        });
    }, [props.url]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleMovie = (id) => {
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${APIKey}&language=en-US`).then(response => {
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0].key); // Extract video key
                setShowVideo(true); // Show video player
            } else {
                console.log('Array Empty');
            }
        });
    };

    const handleCloseVideo = () => {
        setShowVideo(false); // Hide video player
        setUrlId(''); // Clear video key
    };

    return (
        <div className='row'>
            <h1 className='ml-5'>{props.title}</h1>
            <div className="posters">
                {movies && movies.length > 0 ? (
                    movies.map((obj) =>
                        <img
                            onClick={() => handleMovie(obj.id)}
                            key={obj.id}
                            className='poster rounded-md'
                            src={`${ImageURL + obj.backdrop_path}`}
                            alt={obj.title || 'Movie Poster'}
                        />
                    )
                ) : (
                    <p>No movies found</p>
                )}
            </div>
            {showVideo && (
                <div className='video-container'>
                    <button className='close-btn' onClick={handleCloseVideo}>x</button>
                    <Youtube opts={opts} videoId={urlId} />
                </div>
            )}
        </div>
    );
}

export default RowPost;
