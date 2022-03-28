import React from 'react';
import './restaurant.css'

function HomeBody(){
    return(
        <body className="home-body">
        <div className="home-body-pic-table">
            <h1>breakfast with passion</h1>
            <button>order</button>
        </div>
        <div className="home-body-desc">
            <p className="desc">We are at Wioślarska 45 in Poznań.
                In Bredsoul  you will find the best
                breakfasts in vegetarian, meat and sweet
                options. Also we invite to try our specials
                made from different type of bread. </p>
        </div>

        <div className="home-body-pic-bread"></div>

        </body>
    )
}
export default HomeBody;