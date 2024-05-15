import React from 'react';

import Menu from '../components/Menu';

import dog from '../assets/images/hachii.svg'

const Home = () => {
    return (
                <div className="main">
                    <div className="main-dog">
                        <img className='dog' src={dog} alt=""/>
                    </div>
                </div>
    );
};

export default Home;