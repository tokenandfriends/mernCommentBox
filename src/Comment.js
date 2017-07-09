import React, { Component } from 'react';
import style from './css/style';
import marked from 'marked';

class Comment extends Component {
  rawMarkup(){
    let rawMarkup = marked(this.props.children.toString());
    return {_html: rawMarkup};
  }
  render(){
    return(
      <div style={style.comment}>
        <h3>{this.props.author}</h3>
        {/*<span dangerouslySetInnerHTML={this.rawMarkup()}></span>*/}
      </div>
    );
  }
}

export default Comment;