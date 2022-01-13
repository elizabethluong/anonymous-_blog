import React from 'react';

export const Header = () => {

    const headerStyle = {
      width: "100%",
      padding: "2%",
      backgroundColor: "#c9d7ff",
      color: "black",
      textAlign: "center",
    };

    return(
        <div style={headerStyle}>
            <h1>Annonymous Blog</h1>
        </div>
    )
}