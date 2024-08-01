class TodoList10 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            input:"",
            todos:[]
        }
    }

    render(){
        return(
            <div className="container mt-4">
                <h1>To-Do-List</h1>
                <div className="input-group">
                    <input type="text" 
                    value={this.state.input}
                    onChange={(e)=>
                        this.setState({
                            input: e.target.value
                        })}
                    className="form-control" 
                    placeholder="Ajouter une tache"/>
                    <button className="btn btn-primary" onClick={()=>{
                        this.setState({todos:[...this.state.todos,this.state.input]})
                    }}>Ajouter</button>
                    <p>{this.state.input}</p>
                </div>
                <ul className="list-group">
                    {this.state.todos.map((todo)=>{
                        return <li>{todo}</li>
                    })}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<TodoList10/>,document.getElementById("root"))