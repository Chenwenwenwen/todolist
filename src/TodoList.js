import React , { Component , Fragment} from 'react';

class TodoList extends Component {
    //构造函数，最先执行
    constructor(props){
        super(props);
        //定义数据，要定义在状态里面
        this.state={
            inputValue:'',
            list:[]
        }
    }

    render(){
        return (
            <Fragment>
                <div>
                    <input 
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleButtonClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=> {
                            return <li key={index} onClick={this.handleItemDelete.bind(this,index)}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e){
        // console.log(e.target.value);
        this.setState({
            inputValue:e.target.value
        })
    }
    handleButtonClick(e){
        //新增，用户点击提交，形成新的数组
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    handleItemDelete(index){
        // console.log(index)
        
        //immutable
        //state 不允许我们做任何改变
        //所以最好不要用 this.state.list.splice(index,1)

        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
}

export default TodoList;