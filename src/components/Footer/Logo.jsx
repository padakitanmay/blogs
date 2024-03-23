import React from "react";

function Logo({ width = "10px" }) {
    return (
        <div>
            <img
                src='public\icon.png'
                className={`${width}`}
            />
        </div>
    );
}

export default Logo;
