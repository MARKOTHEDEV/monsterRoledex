import './search-box.styles.css'

export const SearchBox=props=>(
    <input className="search" type="search" 
    placeholder="Enter your Search" 
    onChange={props.onChange}/>

)