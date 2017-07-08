import React, { Component } from 'react';
import style from './css/style';

class CommentForm extends Component{
  constructor(props){
    super(props);
    //handle some click events in the comment form.
    this.state={author: '', text: ''};
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleAuthorChange(e){
    this.setState({ author : e.target.value});
  }
  handleTextChange(e){
    this.setState({ text: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(`${this.state.author} said "${this.state.text}"`);
  }

  render(){
    return(
      <form style={style.commentForm} onSubmit={this.handleSubmit}>
        <input 
        type='text' 
        placeholder='Your Name' 
        style={style.commentFormAuthor} 
        value={this.state.author}
        onChange={this.handleAuthorChange}/>

        <input 
        type='text'
        placeholder='Say Something'
        style={style.commentFormText}
        value={this.state.text}
        onChange={this.handleTextChange}/>

        <input
        type='submit'
        style={style.commentFormPost}
        value='post'/>
      </form>
    );
  }
}

export default CommentForm;