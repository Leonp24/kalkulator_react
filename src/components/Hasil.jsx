import React from "react";

class Hasil extends React.Component{
    render() 
    {
        let {hasil} = this.props;
        return (
            <div className="result">
                <p>{hasil}</p>
            </div>
        )
    }
}

export default Hasil;