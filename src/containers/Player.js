import { Redirect } from 'react-router-dom';
import React, {useEffect} from 'react';
import {connect} from 'react-redux'

import '../assets/styles/components/Player.scss';
import {getVideoSource } from '../actions'
import NotFound from './NotFound';

const Player = (props) => {
    const {history, playing, getVideoSource,match: {params: {id}}} = props;
    const hasPlaying = Object.keys(playing).length > 0;

    useEffect(()=>{
        console.log("aquí", id)
        getVideoSource(id)
    },[])

    return hasPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source 
                    source={playing.source}
                    type="video/mp4"
                />
            </video>
            <div className="Player-back">
                <button type="button" onClick={()=>history.push(`/`)}>Regresar</button>
            </div>
        </div>
      ):(
          <NotFound />
      );
}
 
const mapStateToProps = state => ({
    playing: state.playing
})

const mapDispatchToProps = {
    getVideoSource
}

export default connect(mapStateToProps,mapDispatchToProps )(Player);