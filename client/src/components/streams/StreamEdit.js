import _ from 'lodash'
import React from 'react';
import {connect} from 'react-redux'
import { fetchStream, editStream} from "../../actions"
import StreamForm from './StreamForm';

class StreamEdit extends React.Component{
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

onSubmit=(formValues)=>{
  this.props.editStream(this.props.match.params.id, formValues);

}

  render(){

    if(!this.props.stream){
      return <div>Loading..</div>
    }else 
    console.log(this.props.stream )
    return <div>
      <h3> Edit A stream</h3>
      <StreamForm
       initialValues={ _.pick(this.props.stream, 'title', 'description') }
       onSubmit={this.onSubmit}/>
    </div>;
  }
};

const mapStateToProps= (state, ownProps)=>{
  const id = ownProps.match.params.id;
  // console.log(id)
  // console.log(state)
  return{stream: state.streams[id]}; 
}

export default 
connect
(mapStateToProps, {fetchStream, editStream})
(StreamEdit);
