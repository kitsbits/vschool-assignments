 import React from "react";
 import EditFormComponent from "./Component";
 import {connect} from "react-redux";
 import {editTodo} from "../../../redux/actions";

 class EditFormContainer extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             title: props.todo.title,
             description: props.todo.description
         }
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleChange(event) {
         event.persist();
         const name = event.target.name;
         const newValue = event.target.value;
         this.setState(prevState => {
             return {
                 ...prevState,
                 [name]: newValue
             };
         });
     }

     handleSubmit(event) {
         event.preventDefault();
         this.props.editTodo(this.props.todo._id, this.state);
     }

     render() {
         return (
             <EditFormComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                inputs={this.state}/>
         )
     }
 }

 export default connect(null, {editTodo})(EditFormContainer);
