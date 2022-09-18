import React from "react";
import Loading from "../components/Loading";
import { Module } from "../components/Module";

export default function Dashboard(props) {
    const [loading, setLoading] = React.useState(false);
    return loading ? (
        <Loading />
    ) : (
        <div>
            <div className="grid dashboard">
                <div className="row w-100">
                    <div className="col-1-of-2">
                        <h1 className="h4">Dashboard</h1>
                        <p className="text__400">August 13, 2022</p>
                    </div>
                    <div className="col-1-of-2">
                        <div className="dropdown-wrapper">
                            <div className="dropdown-toggle dashboard__btn-wrapper--right">
                                <button className=" btn btn--primary">+ Create Report</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="reports-container">reports container</div>
            <Module className="graph-large" />
            <div className="grid">
                <div className="row">
                    <div className="col-1-of-3">Col</div>
                    <div className="col-1-of-3">Col</div>
                    <div className="col-1-of-3">Col</div>
                </div>
            </div>
            <div className="grid">
                <div className="row">
                    <div className="col-1-of-2">col</div>
                    <div className="col-1-of-2">col</div>
                </div>
            </div>
        </div>
    );
}
