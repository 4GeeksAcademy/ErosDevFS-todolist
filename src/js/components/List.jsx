import React from "react";

function List({data, onDelete}) {

 
    
    return (
        <ul id="list" className="list-group">
            {data.map((element, index)=> 
                <li key={index} className="list-group-item list-item d-flex align-items-center fs-4 fw-light ps-5 pt-3 pb-3">{element} <button onClick={()=> onDelete(index)} type="button" className="btn-close close-btn ms-auto fs-6" aria-label="Close"></button></li>    
            )}
            
        </ul>
    )
    
}

export default List