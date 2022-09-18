import React from "react";
import Loading from "../components/Loading";
import { Module } from "../components/Module";

export default function Dashboard(props) {
    const [loading, setLoading] = React.useState(false);
    return loading ? (
        <Loading />
    ) : (
        <div className='dashboard'>
            <div className="section-heading grid dashboard">
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
            <div className="reports-container flex--between">
                <div className="module report-detail-item">
                    <img src="https://assets.website-files.com/6260849a6eab2a733e282630/6268143665890fb78a8d9d8c_pageviews-icon-dashboardly-webflow-template.svg"
                        alt=""
                        className="report-detail-icon" />
                    <div>
                        <p className="text__200--medium">Pageviews</p>
                        <div className="flex">
                            <h4 className="h4 mr-6">50.8k</h4>
                            <div className="flex--center flex-end">
                                <div className="text__100--green">25.5%</div>
                                <div className="trending-arrow-icon">&rarr;</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="module report-detail-item">
                    <img src="https://assets.website-files.com/6260849a6eab2a733e282630/6268143665890fb78a8d9d8c_pageviews-icon-dashboardly-webflow-template.svg" alt="" className="report-detail-icon" />
                    <div>
                        <p className="text__200--medium">Pageviews</p>
                        <div className="flex">
                            <h4 className="h4 mr-6">50.8k</h4>
                            <div className="flex--center flex-end">
                                <div className="text__100--green">25.5%</div>
                                <div className="trending-arrow-icon">&rarr;</div>
                            </div>
                        </div>
                    </div>
                </div>                <div className="module report-detail-item">
                    <img src="https://assets.website-files.com/6260849a6eab2a733e282630/6268143665890fb78a8d9d8c_pageviews-icon-dashboardly-webflow-template.svg" alt="" className="report-detail-icon" />
                    <div>
                        <p className="text__200--medium">Pageviews</p>
                        <div className="flex">
                            <h4 className="h4 mr-6">50.8k</h4>
                            <div className="flex--center flex-end">
                                <div className="text__100--green">25.5%</div>
                                <div className="trending-arrow-icon">&rarr;</div>
                            </div>
                        </div>
                    </div>
                </div>                <div className="module report-detail-item">
                    <img src="https://assets.website-files.com/6260849a6eab2a733e282630/6268143665890fb78a8d9d8c_pageviews-icon-dashboardly-webflow-template.svg" alt="" className="report-detail-icon" />
                    <div>
                        <p className="text__200--medium">Pageviews</p>
                        <div className="flex">
                            <h4 className="h4 mr-6">50.8k</h4>
                            <div className="flex--center flex-end">
                                <div className="text__100--green">25.5%</div>
                                <div className="trending-arrow-icon">&rarr;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
