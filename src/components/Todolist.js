import React, { Component} from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodoList extends Component {
    render(){
        const TODOS = this.props.TODOS.map((item)=>{
            return(
                <Todo{ ...item }/>
            );
        });
        return(
            <div>
                <ul>
                    {TODOS}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        TODOS: state.todoList
    };
}
export default connect(mapStateToProps)(TodoList);