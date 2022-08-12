import logo from './styles/img/attorneyster-logo.svg';
import icon1 from './styles/img/small-separator.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
        <div className="dashboard-main">
          <div className="sidebar-spacer"> </div>
          <div className="dashboard-content">
            <nav className="dashboard-nav-main-container">Navigation</nav>
            <div className="dashboard-main-content">
                <div className="container-default">
                  <div className="MG-Bottom-32">
                    <div className="grid-2-column">
                      <div className="empty">
                        <h1 className="heading-h4-size">
                          Dashboard
                        </h1>                          
                        <p className="text-400">
                            September 1, 2022
                          </p>
                      </div>
                      <div className="empty">
                        <div className="dropdown-wrapper">
                          <div className="dropdown-toggle">
                            <p className="text-200">Last 30 days</p>
                          </div>
                          <div className="dropdown-column-wrapper">
                            <div className="empty">
                              <div className="grid-1-column">
                                <a href="/" className="dropdown-link">1</a>
                                <a href="/" className="dropdown-link">2</a>
                                <a href="/" className="dropdown-link">3</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid-2-column">
                  <div className="module">
                      <div className="empty">
                        <p className="text-200">Total Sales</p>
                        <div className="flex">
                          <h3 className="heading-h3-size">$299,498.00</h3>
                          <p className="color-green-300">28.5%</p>
                          <i className="icon">icon</i>
                        </div>
                        <div className="divider"></div>
                        <img src="https://uploads-ssl.webflow.com/6260849a6eab2a733e282630/62684e1d8a36c6133db906c5_products-top-graph-dashboardly-webflow-template.png" alt="dashboard img" />
                      </div>
                    </div>
                    <div className="module">
                      <div className="grid-2-column">
                        <p className="text-300">Recent Orders</p>
                        <a href="/" className="text-300">See All</a>

                      </div>
                      <div className="divider"></div>
                      <div className="flex">
                      <img src="https://uploads-ssl.webflow.com/6260849a6eab2a733e282630/62684e1d39396d3fbff45d13_iphone-13-order-image-dashboardly-webflow-template.jpg" alt="product img" />
                        <div className="recent-orders-product-image">
                          <div className="MG-right-16px">
                            <div className="MG-bottom-6px">
                              <p className="text-200">Iphone 13 Pro Max</p>
                            </div>
                              <p className="text-200">10 Minutes Ago</p>

                          </div>
                          <div className="MG-left-auto">
                            <p className="text-200">$1,099.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="divider"></div>
                      <div className="flex">
                        <img src="https://uploads-ssl.webflow.com/6260849a6eab2a733e282630/62684e1d39396d3fbff45d13_iphone-13-order-image-dashboardly-webflow-template.jpg" alt="product img" />
                        <div className="recent-orders-product-image">
                          <div className="MG-right-16px">
                            <div className="MG-bottom-6px">
                              <p className="text-200">Iphone 13 Pro Max</p>
                            </div>
                              <p className="text-200">10 Minutes Ago</p>

                          </div>
                          <div className="MG-left-auto">
                            <p className="text-200">$1,099.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="module"></div>
                  <div className="grid-2-column"></div>
                </div>
            </div>
            <footer className="footer">Footer</footer>
          </div>
        </div>
    </div>
  );
}

export default App;
