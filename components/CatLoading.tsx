import React from 'react';

const CatLoading = () => {
    return (
        <div className="loading-cat ">
            <div className="cat-body dark:before:bg-[#121212]"></div>
            <div className="cat-animation-mask dark:bg-[#121212] dark:before:bg-[#121212] dark:after:bg-[#121212]"></div>
            <div className="cat-head dark:bg-[#121212]">
                <div className="cat-face"></div>
                <div className="cat-ear"></div>
                <div className="cat-hand"></div>
                <div className="cat-eye"></div>
                <div className="cat-eye-light"></div>
                <div className="cat-mouth"></div>
                <div className="cat-beard left"></div>
                <div className="cat-beard right"></div>
            </div>
            <div className="cat-foot dark:bg-[#121212]">
                <div className="cat-belly"></div>
                <div className="cat-leg"></div>
                <div className="cat-tail"></div>
            </div>
        </div>
    );
}

export default CatLoading