import React, { useEffect, useState } from "react";
import axios from 'axios';

import CalendarFilter from "../components/CalendarFilter";
import { Module, ModuleCategory, ModuleOrders2, ModuleOrderStatus } from "../components/Module";
import ModuleAllProducts from "../components/modules/ModuleAllProducts";
import ModuleOrders from "../components/modules/ModuleOrders";
import Loading from "../components/Loading";

export default function Products(props) {
    const [loading, setLoading] = React.useState(true);
    const [isShown, setIsShown] = React.useState(false);

    function toggleShown(){
        // console.log()
        setIsShown(prevShown => !prevShown)
    }
    

    const [cart, setCart] = useState([]);
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);


    const getUsers = async () => {
     await axios.get(`https://fakestoreapi.com/users`).then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => console.log("error", err));
    };

    const getCarts = async () => {
       await axios.get(`https://fakestoreapi.com/carts`).then((res) => {
          setCart(res.data);
          setLoading(false);
        })
        .catch((err) => console.log("error", err));
      };

      const getProducts = async () => {
       await axios.get(`https://fakestoreapi.com/products`).then((res) => {
          setProducts(res.data);
          setLoading(false);
        })
        .catch((err) => console.log("error", err));
      };

      useEffect(() => {
        // getUsers( prevSquare => {
        //     return prevSquare.map((square)=>{
        //        return square.id === id ? {...square, on: !square.on} : square
        //     })
        // });
        getProducts();
        getCarts();
      }, []);

// console.log(cart, users, products)
    return loading ? (
    <Loading />
  ) : ( 
        <div className="">
            <div className="grid products">
                <div className="row w-100">
                    <div className="col-1-of-2">
                        <h1 className="h4">Dashboard</h1>
                        <p className="text__400">August 13, 2022</p>
                    </div>
                    <div className="col-1-of-2">
                        <div className="dropdown-wrapper">
                            <div className="dropdown-toggle ml-auto">
                                <CalendarFilter  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="row">
                    <div className="col-2-of-4">
                        <Module products={products} carts={cart} users={users} />
                    </div>
                    <div className="col-2-of-4">
                        <ModuleOrders products={products} carts={cart} users={users} />
                    </div>
                </div>
            </div>
            <div className="products__grid-1-col">
                <div className="row">
                    <div className="">
                        <ModuleAllProducts products={products}  />
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="row">
                    <div className="col-1-of-4">
                        <ModuleCategory />
                    </div>
                    <div className="col-3-of-4">
                        <ModuleOrderStatus />
                    </div>
                </div>
            </div>
        </div>
    );
}
