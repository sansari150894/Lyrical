import React , {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import fetchSongs from '../queries/fetchSongs';
class SongList extends Component{
   
    onDeleteSong(id){
        this.props.mutate({
            variables:{
                id:id
            },
        }).then(()=>this.props.data.refetch())
   }

    renderSong(){
        return this.props.data.songs.map(({title,id})=>{
            return(
                <li key={id} className="collection-item">
                    <Link
                        to={`/song/${id}`}
                    >
                        {title}
                    </Link>
                    <i
                    className='material-icons'
                    onClick={()=>this.onDeleteSong(id)}
                    >
                    delete
                    </i>
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
                    to='songs/new'
                    className='btn-floating btn-large green right'
                >
                <i className='material-icons'>add</i>
                </Link>
            </div>
            
           
        );
    }
}

const mutation =gql`
    mutation DeleteSong($id:ID){
        deleteSong(id:$id){
            id
        }
    }
`


export default graphql(mutation)
(graphql(fetchSongs)(SongList));