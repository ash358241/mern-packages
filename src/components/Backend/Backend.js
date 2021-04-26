import React from 'react';

const Backend = () => {
    return (
        <div>
            <h1 className="mt-5">All The Essential Back-End Packages You Need To Install: </h1>
            <hr style={{backgroundColor: 'black', width:'95%', marginLeft: '0'}}/>

            <div className="shadow p-3 mb-5 bg-body rounded">
                <h3>Express MongoDB Body-Parser Cors</h3>
                <p>npm install express mongodb body-parser cors</p>
            </div>

            <div className="shadow p-3 mb-5 bg-body rounded">
                <h3>Nodemon</h3>
                <p>npm install nodemon --save-dev</p>
            </div>

            <div className="shadow p-3 bg-body rounded">
                <h3>Dotenv</h3>
                <p>npm install dotenv</p>
            </div>
        </div>
    );
};

export default Backend;