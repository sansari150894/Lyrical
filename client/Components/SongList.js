import React , {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';

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
            textAlign:'center',
        };
        if(this.props.data.loading){
            return(
                <div style={styles}>loading...</div>
            )
        }
        return(
            <div>
                 <ul className="collection">
                    {this.renderSong()}
                </ul>
                <Link
                    to='song/new'
                    className='btn-floating btn-large red right'
                >
                <i className='material-icons'>add</i>
                </Link>
            </div>
            
           
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