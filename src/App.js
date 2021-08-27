import { Component  } from "react"
import { CardList } from './component/card-list/card-list'
import { SearchBox } from "./component/SearchBox/SearchBox";
import './App.css'

class App extends Component{

    constructor(){
        super();
        this.state = {
            "monsters":[
             
            ],
            searchField:"",
        }
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users/').then(data=>data.json())
        .then(Monsterdata=>{
            this.setState({monsters:Monsterdata})
        })
    }
    handleChange=(e)=>(
        this.setState({searchField:e.target.value})
    )
    render(){
        const handlesFilter=()=>this.state.monsters.filter(monster=>monster.name.includes(this.state. searchField))
        // console.log(handlesFilter())
        return (
            <div style={{textAlign:"center"}}>
                <h1>Marko Roledex</h1>
                <SearchBox onChange={this.handleChange} />
                < CardList monsters={handlesFilter()} />
            </div>
        )
    }
}

export default App

/*
Task App
Create A Delete
Create State -- to create New Task
Edit State -- edit New Task
Home State

*/