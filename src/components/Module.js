import React, { useEffect, useState } from "react";
import axios from 'axios';

import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import CalendarFilter from "./CalendarFilter";

const products = [
    {
        id: 1,
        productImage:
            "https://uploads-ssl.webflow.com/6260849a6eab2a733e282630/62684e1d39396d3fbff45d13_iphone-13-order-image-dashboardly-webflow-template.jpg",
        category: "smartphone",
        productName: "iPhone 13 Pro Max",
        productPrice: "$1,099.00",
        totalSales: 90,
        salesAmount: 98910,
        inStock: 24,
        dateAdded: "10 minutes ago",
        orderid: '2937',
        customerName: 'John Doe',
        customerEmail: 'john@doe.com',
        saleDate: 'Oct 12, 2022',
        orderStatue: 'shipping'
    },
    {
        id: 5,
        productImage:
            "https://assets.website-files.com/6260849a6eab2a733e282630/62684e1d07b07a61c66edff7_google-pixel-6-order-image-dashboardly-webflow-template.jpg",
        category: "smartphone",
        productName: "Google Pixel 6",
        productPrice: "$599.00",
        totalSales: 90,
        salesAmount: 98910,
        inStock: 24,
        dateAdded: "10 minutes ago",
        orderid: '2937',
        customerName: 'John Doe',
        customerEmail: 'john@doe.com',
        saleDate: 'Oct 12, 2022',
        orderStatue: 'shipping'
    },
    {
        id: 98,
        productImage:
            "https://assets.website-files.com/6260849a6eab2a733e282630/62684e1d3d9b166c4e55ec33_ipad-air-order-image-dashboardly-webflow-template.jpg",
        category: "tablet",
        productName: "iPad Air",
        productPrice: "$799",
        totalSales: 35,
        salesAmount: 27965,
        inStock: 8,
        dateAdded: "10 minutes ago",
        orderid: '2937',
        customerName: 'John Doe',
        customerEmail: 'john@doe.com',
        saleDate: 'Oct 12, 2022',
        orderStatue: 'Delivered'
    },
    {
        id: 13,
        productImage:
            "https://assets.website-files.com/6260849a6eab2a733e282630/62684e1d9542e7865fb874d4_samsung-galaxy-s21-order-image-dashboardly-webflow-template.jpg",
        category: "smartphone",
        productName: "Samsung Galaxy S21",
        productPrice: "$849",
        totalSales: 20,
        salesAmount: 15980,
        inStock: 49,
        dateAdded: "10 minutes ago",
        orderid: '5713',
        customerName: 'Andy Smith',
        customerEmail: 'AndySmith@doe.com',
        saleDate: 'Aug 24, 2022',
        orderStatue: 'Delayed'
    },
];

export function Module() {
    // const [loading, setLoading] = React.useState(true);


    return (
        <div className="module h-100 mt-auto">
            <div className="module__title-wrapper">
                <p className="text__200">Total Sales</p>
                <div className="module--flex">
                    <h3 className="h3 mr-12">$299,498.00</h3>
                    <div className="module--flex">
                        <p className="text__300 color-green-300 mr-12 module--up-trend">
                            28.5%
                        </p>
                        <FaLongArrowAltUp size={18} className="module--up-trend" />
                    </div>
                </div>
            </div>
            <div className="module__divider mb-auto"></div>
            <div className="module__date-wrapper mt-auto">
                <img
                    src="https://uploads-ssl.webflow.com/6260849a6eab2a733e282630/62684e1d8a36c6133db906c5_products-top-graph-dashboardly-webflow-template.png"
                    alt="module__image"
                    className="module__image"
                />
            </div>
        </div>
    );
}

export function ModuleOrders2() {
    return (
        <div className="module module__orders w-100">
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
                <div className="module--flex">
                    <img
                        src={products[0].productImage}
                        alt="product img"
                        className="module__order-image"
                    />
                    <div className="module--flex-apart w-100">
                        <div className="mr-16">
                            <div className="mr-6">
                                <p className="text__200--bold bold">
                                    {products[0].productName}
                                </p>
                            </div>
                            <p className="text__200">{products[0].dateAdded}</p>
                        </div>
                        <div className="MG-left-auto">
                            <p className="text__200--green">{products[0].productPrice}</p>
                        </div>
                    </div>
                </div>
                <div className="module__divider"></div>
            </div>
            <div className="module__date-wrapper">
                <div className="module--flex">
                    <img
                        src={products[1].productImage}
                        alt="product img"
                        className="module__order-image"
                    />
                    <div className="module--flex-apart w-100">
                        <div className="mr-16">
                            <div className="mr-6">
                                <p className="text__200--bold bold">
                                    {products[1].productName}
                                </p>
                            </div>
                            <p className="text__200">{products[1].dateAdded}</p>
                        </div>
                        <div className="MG-left-auto">
                            <p className="text__200--green">{products[1].productPrice}</p>
                        </div>
                    </div>
                </div>
                <div className="module__divider"></div>
            </div>
            <div className="module__date-wrapper">
                <div className="module--flex">
                    <img
                        src={products[2].productImage}
                        alt="product img"
                        className="module__order-image"
                    />
                    <div className="module--flex-apart w-100">
                        <div className="mr-16">
                            <div className="mr-6">
                                <p className="text__200--bold bold">
                                    {products[2].productName}
                                </p>
                            </div>
                            <p className="text__200">{products[2].dateAdded}</p>
                        </div>
                        <div className="MG-left-auto">
                            <p className="text__200--green">{products[2].productPrice}</p>
                        </div>
                    </div>
                </div>
                <div className="module__divider"></div>
            </div>
            <div className="module__date-wrapper">
                <div className="module--flex">
                    <img
                        src={products[3].productImage}
                        alt="product img"
                        className="module__order-image mr-16"
                    />
                    <div className="module--flex-apart w-100">
                        <div className="mr-16">
                            <div className="mr-6">
                                <p className="text__200--bold bold">
                                    {products[3].productName}
                                </p>
                            </div>
                            <p className="text__200">{products[3].dateAdded}</p>
                        </div>
                        <div className="MG-left-auto">
                            <p className="text__200--green">{products[3].productPrice}</p>
                        </div>
                    </div>
                </div>
                <div className="module__divider"></div>
            </div>
        </div>
    );
}






export function ModuleCategory() {
    return (
        <div className="module h-100 mt-auto">
            <div className="module__title-wrapper">
                <p className="text__200--bold">Popular categories</p>
            </div>
            <div className="module__divider mb-auto"></div>
            <div className="module__date-wrapper mt-auto">
                <img
                    src="https://uploads-ssl.webflow.com/6260849a6eab2a733e282630/62686614c2cc43652f039dc6_popular-categories-circle-graph-dashboardly-webflow-ecommerce-template.png"
                    alt="module__image"
                    className="module__image"
                />
            </div>
        </div>
    );
}

export function ModuleOrderStatus() {
    const [loading, setLoading] = React.useState(true);


    let orderStatus = () => {
        return products.map(e => {
            return (
                <>
                    <div key={e.id} className="grid module--flex">
                        <div className="w-100">
                            <div className="col-1-of-3 flex mr-16">
                                <img
                                    src='https://uploads-ssl.webflow.com/6260849a6eab2a733e282630/62684e1d1461f57deedace54_order-status-icon-dashboardly-webflow-template.svg'
                                    alt="product img"
                                    className="module__order-image"
                                />
                                <div className="module--flex-apart">
                                    <div className="mr-16">
                                        <div className="mr-6">
                                            <p className="text__200--bold bold">
                                                {`Order #${e.orderid}`}
                                            </p>
                                        </div>
                                        <p className="text__200">{e.productPrice}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-of-3">
                                <div className="module--flex-apart">
                                    <div className="mr-16">
                                        <div className="mr-16">
                                            <p className="text__200--bold bold">
                                                {e.customerName}
                                            </p>
                                        </div>
                                        <p className="text__200">{e.customerEmail}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-of-3">
                                <div className="flex">
                                    <p className="badge__secondary--gray mr-12">{e.saleDate}</p>
                                    <p className="badge__secondary--blue">{e.orderStatue}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="module__divider"></div>
                </>
            )
        })
    }
    return (
        <div className="module module__orders w-100">
            <div className="module__title-wrapper module--flex-apart">
                <p className="text__200--bold">Order status</p>
                <div className="module--flex">
                    <div className="module--flex">
                        <CalendarFilter />
                    </div>
                </div>
            </div>
            <div className="module__divider"></div>
            <div className="module__date-wrapper">
                {orderStatus()}
            </div>
        </div>
    );
}