import React, { useEffect, useState } from "react";

const Home = () => {
	
	const [list, setList] = useState([])
	const [newTask, setNewTask] = useState('');

	useEffect(()=>{
		fetch('https://playground.4geeks.com/todo/users/erosdevfs')
		.then(response => response.json())
		.then(data => setList(data.todos))
	}, [])
	

	const addElement = (word) => {
		const requestOptions = {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				"label": word,
				"is_done": false
			})
		}

		fetch('https://playground.4geeks.com/todo/todos/erosdevfs', requestOptions)
			.then(response => response.json())
			

	}


	const keyEnter = (e) => {

		if (e.key === 'Enter') {
			if (newTask === "") {
				alert("this input cannot be empty")
			} else {
				addElement(newTask)
				setNewTask("")
			}
		}

		fetch('https://playground.4geeks.com/todo/users/erosdevfs')
		.then(response => response.json())
		.then(data => setList(data.todos))

	};

	const delElement = (id) => {
		const requestOptions = {
			method: "DELETE",
		}

		fetch(`https://playground.4geeks.com/todo/todos/${id}`, requestOptions)
			.then(response => response.json())
			.then(data => console.log(data.todos));

		fetch('https://playground.4geeks.com/todo/users/erosdevfs')
		.then(response => response.json())
		.then(data => setList(data.todos))
		
	}


	function deleteAll(){
		const requestOptions = {
			method: "DELETE",
		}

		list.map(task=>{
			fetch(`https://playground.4geeks.com/todo/todos/${task.id}`, requestOptions)
			.then(response => response.json())
			.then(data => console.log(data.todos));
		})
		

		fetch('https://playground.4geeks.com/todo/users/erosdevfs')
		.then(response => response.json())
		.then(data => setList(data.todos))
	}


	return (
		<>
			<h1 className="text-center fw-light" style={{ fontSize: "100px" }}>todos</h1>
			<div className="card mx-auto stacked-card" style={{ width: "40rem" }}>
				<input onKeyDown={keyEnter} type="text" className="form-control ps-5 pt-3 pb-3 fs-4 fw-light" onChange={e => setNewTask(e.target.value)} value={newTask} placeholder="What needs to be done?"></input>
				<ul id="list" className="list-group">
					{list.map((task)=> 
						<li key={task.id} className="list-group-item list-item d-flex align-items-center fs-4 fw-light ps-5 pt-3 pb-3">{task.label} <button onClick={()=> delElement(task.id)} type="button" className="btn-close close-btn ms-auto fs-6" aria-label="Close"></button></li>    
					)}
				
        		</ul>
				<div className="card-footer p-2 fw-light text-secondary" style={{ backgroundColor: "white" }}>
					{`${list.length} items left`}
				</div>

			</div>
			<div className="text-center mt-5">
				<button className="btn btn-primary mx-auto" onClick={deleteAll}>Eliminate all tasks</button>

			</div>		
			
		</>
	);
};

export default Home;