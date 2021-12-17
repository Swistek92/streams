import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import {connect} from "react-redux"
import {fetchStream, delateStream} from "../../actions"
import{Link} from "react-router-dom"


class StreamDelate extends React.Component{
componentDidMount() {
  this.props.fetchStream(
    this.props.match.params.id
    )
}

renderActions() {
const {id} = this.props.match.params;

  return (
    <React.Fragment>
        <button
          onClick={() => this.props.delateStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
  );
}

renderContent(){
  if(!this.props.stream){
    return "are you sure you want delete this stream? "
  } else 
  return `are you sure you want delete this stream with title: ${this.props.stream.title} `
}
  render () {
    


  return(
      <Modal 
      title="Delete Stream"
      content={this.renderContent()}
      actions={this.renderActions()}
      onDismiss={()=> history.push('/')}
        />

    
   )
  }
}

const mapStateToProps= (state, ownProps)=> {
  return { stream: state.streams[ownProps.match.params.id]}
}

export default connect(
  mapStateToProps, 
  { fetchStream, delateStream }
  )(StreamDelate)