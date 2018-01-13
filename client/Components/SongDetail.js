import React ,{Component } from 'react';
import {graphql} from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricsList from './LyricsList';

class SongDetail extends Component{

  

    render(){
        
        var styles = {
            fontWeight:'bold',
            textAlign:'center',
        };
        if(this.props.data.loading){
            return(
                <div style={styles}>loading...</div>
            )
        }
        return (
            <div>
                <h3>{this.props.data.song.title}</h3>
                {/* {console.log(this.props.data.song)} */}
                <LyricsList lyrics={this.props.data.song.lyrics}/>
                <LyricCreate id={this.props.params.id}></LyricCreate>
            </div>
        )
    }
}

export default graphql(fetchSong,{
    options:(props)=>{return {variables:{id:props.params.id}}}
})(SongDetail);