import React from 'react';

import x from '../assets/images/X.svg'
import deposit from '../assets/images/deposit.svg'
import withdraw from '../assets/images/withdraw.svg'


const Wallet = () => {
    return (
        <div className="pages-content">
            <h2 className="pages-title">Wallet</h2>
            <div className="pouch">
                <div className="balance">10.3 ton</div>
                <div className="wallet-address">
                    <span>wqwer32e3rty</span>
                    <div className="delete-address"><img src={x} alt="Delete wallet"/></div>
                </div>
            </div>
            <div className="wallet-btn"><img src={deposit} alt="deposit"/></div>
            <div className="wallet-btn2"><img src={withdraw} alt="withdraw"/></div>
        </div>
    );
};

export default Wallet;