import React, { Component } from 'react';
import Comment from './Comment';
import style from './css/style';

class CommentList extends Component{
  render(){
    //parameter that will be used to insert the data.
    let commentNodes = this.props.data.map(comment => {
      return(
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      )
    })
    return(
      <div style={style.CommentList}>
        {commentNodes}
      </div>
    );
  }
}

export default CommentList;