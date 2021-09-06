import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        const {content}=this.props;
        return (
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }

    handleClick(){
        const {handleItemDelete,index} = this.props
        handleItemDelete(index)
    }
}

//prototype限制父组件给子组件传值的类型
TodoItem.prototype = {
    //做校验
    content : PropTypes.string,
    handleItemDelete:PropTypes.func,
    index:PropTypes.number
}

//defaultProps 设置默认值
TodoItem.defaultProps={
    
}

export  default TodoItem   