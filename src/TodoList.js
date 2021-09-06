import React , { Component , Fragment} from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
    //构造函数，最先执行
    constructor(props){
        super(props);
        //定义数据，要定义在状态里面
        this.state={
            inputValue:'',
            list:[]
        }
				this.handleInputChange=this.handleInputChange.bind(this);
				this.handleButtonClick=this.handleButtonClick.bind(this);
    }

    render(){
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容:</label>
                    <input 
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
		getTodoItem(){
			return this.state.list.map((item,index)=> {
				return (
					<TodoItem 
						key={index}
						content={item} 
						index={index}
						handleItemDelete={this.handleItemDelete.bind(this)}
						//注意this的指向,用bind把传给子组件的时候this指向改变为指向父组件
					/>
				)
		})
		}
    handleInputChange(e){
        // console.log(e.target.value);
				// 旧版
        // this.setState({
        //     inputValue:e.target.value
        // })
				//新版，可以作为一个函数返回对象
				const value =e.target.value;
				this.setState(() => ({
						inputValue : value
				}))

    }
    handleButtonClick(e){
        //新增，用户点击提交，形成新的数组
				//prevState = 修改之前的数据 ,在这里就等价于this.state.list
        // this.setState({
        //     list:[...this.state.list,this.state.inputValue],
        //     inputValue:''
        // })
				this.setState((prevState)=>({
					list:[...prevState.list,prevState.inputValue],
					inputValue:''
				}))
    }
    handleItemDelete(index){
        // console.log(index)
        
        //immutable
        //state 不允许我们做任何改变
        //所以最好不要用 this.state.list.splice(index,1)

        
				//list:list 可以直接省略为list
				this.setState(()=>{
					const list = [...this.state.list];
					list.splice(index,1);
					return {list}
				})
        // this.setState({
        //     list:list
        // })
    }
}

export default TodoList;