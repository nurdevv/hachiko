import React from 'react';

const Wallet = () => {
    return (
            <div className="pages-content">
                <h2 className="pages-title">Wallet</h2>
                <div className="pouch">
                    <div className="balance">10.3 ton</div>
                    <div className="wallet-address">
                        <span>wqwer32e3rty</span>
                        <button className="delete-address">X</button>
                    </div>
                </div>

                <div className="main-btns">
                    <span className="depozit">DEPOZIT</span>
                    <span className="withdraw">WITHDRAW</span>
                </div>
            </div>
    );
};

export default Wallet;