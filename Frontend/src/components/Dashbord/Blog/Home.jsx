import React from "react";
import Dashbord from "../Dashbord";
const Home = () => {
  return (
    <>
      <Dashbord />
      <div className="main">
      <div className="topbar">
        <div className="search">
          <label>
            <input type="text" placeholder="Search here" />
            <ion-icon name="search-outline"></ion-icon>
          </label>
        </div>

        <div className="user">
          <img src="assets/imgs/customer01.jpg" alt="" />
        </div>
      </div>

      <div className="cardBox">
        <div className="card">
          <div>
            <div className="numbers">1,504</div>
            <div className="cardName">Daily Views</div>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">80</div>
            <div className="cardName">Total Blogs</div>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">284</div>
            <div className="cardName">Comments</div>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">**</div>
            <div className="cardName">Demo</div>
          </div>
        </div>
      </div>

      <div className="details">
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>Recent Blogs</h2>
            <a href="#" className="btn">
              View All
            </a>
          </div>

          <table>
            <thead>
              <tr>
                <td>Title</td>
                <td>Status</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Star Refrigerator</td>

                <td>
                  <span className="status delivered">Delivered</span>
                </td>
              </tr>

              <tr>
                <td>Star Refrigerator</td>

                <td>
                  <span className="status delivered">Delivered</span>
                </td>
              </tr>
              <tr>
                <td>Star Refrigerator</td>

                <td>
                  <span className="status delivered">Delivered</span>
                </td>
              </tr>
              <tr>
                <td>Star Refrigerator</td>

                <td>
                  <span className="status delivered">Delivered</span>
                </td>
              </tr>
              <tr>
                <td>Star Refrigerator</td>

                <td>
                  <span className="status delivered">Delivered</span>
                </td>
              </tr>
              <tr>
                <td>Star Refrigerator</td>

                <td>
                  <span className="status delivered">Delivered</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
