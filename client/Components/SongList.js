import React , {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
// import '../style/style.css';

class SongList extends Component{
   

    renderSong(){
        return this.props.data.songs.map((song,index)=>{
            return(
                <li key={index} className="collection-item">
                    {song.title}
                </li>
            )
        })
    }
    render(){
        var styles = {
            fontWeight:'bold',
            textAlign:'center'
        };
        if(this.props.data.loading){
            return(
                <div style={styles}>loading...</div>
            )
        }
        return(
            <ul className="collection">
                {this.renderSong()}
            </ul>
        );
    }
}

const query=gql`
    {
        songs{
            title
        }
    }
`

export default  graphql(query)(SongList);