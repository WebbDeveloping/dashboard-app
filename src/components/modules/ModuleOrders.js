import React, { useEffect, useState } from "react";
export default function ModuleOrders(props) {

    const [tasks,setTasks]=useState([])
    const [products,setProducts]=useState([])

    const getTasks=()=>{
    //   fetch('https://jsonplaceholder.typicode.com/todos')
      fetch('https://fakestoreapi.com/carts?limit=5')
        .then(response => response.json())
        .then(json =>{
          let allTasks=json;
          allTasks=allTasks.filter((currentTask)=>{
            return currentTask.id<=10 && {id:currentTask.id,title:currentTask.title}
        })
        })
      }

    useEffect(()=>{
      getTasks();
    },[])
    useEffect(()=>{
      console.log(tasks)
    },[tasks])
    const handleChange=(id)=>{
      let temp=tasks;
      temp=temp.map((t)=>{
        if(t.id===id)
        t.completed=!t.completed
        return t;
      })
      setTasks(temp)
      console.log(id)
    }

    return (
            <div className="module module__orders">
                <div className="module__title-wrapper module--flex-apart">
                    <p className="text__200--bold">Recent Orders</p>
                    <div className="module--flex">
                        <div className="module--flex">
                            <p className="text__300--blue mr-12">See All</p>
                        </div>
                    </div>
                </div>
                <div className="module__divider"></div>
                <div className="module__date-wrapper">
                    {/* {listOrders()} */}
                </div>
            </div>
    );
}