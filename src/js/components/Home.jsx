import React, { useState } from "react";

//include images into your bundle
import List from "./List";

//create your first component
const Home = () => {
	const [list, setList] = useState(["Wash my hands", "Make the bed", "Eat"])
	const [ inputValue, setInputValue ] = useState('');

	const addElement = (word)=>{
		setList([...list, word])
	}

	const delElement = (indexToDelete)=>{
		setList(list.filter((_, index) => index !== indexToDelete));
	}



	const keyEnter = (e) => {

    	if (e.key === 'Enter') {
      		if(inputValue === "") {
				alert("this input cannot be empty")
			} else{
				addElement(inputValue)
			}
    	}

  	};

	return (
		<>
			<h1 className="text-center fw-light" style={{fontSize: "100px"}}>todos</h1>
			<div className="card mx-auto stacked-card" style={{width: "40rem"}}>
				<input onKeyDown={keyEnter}  type="text" className="form-control ps-5 pt-3 pb-3 fs-4 fw-light" onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder="What needs to be done?"></input>
				<List onDelete={delElement}  data={list} />
				<div className="card-footer p-2 fw-light text-secondary" style={{backgroundColor: "white"}}>
					{`${list.length} items left`}
				</div>
			</div>
			
		</>
	);
};

export default Home;