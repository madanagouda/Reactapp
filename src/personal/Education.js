import React from "react";

function Education(props){
    console.log(props.name);
    if(props.status===true){
        return (
            <div>
                <h3>Hi {props.name}. How are You.</h3>
            </div>
        );
    }else{
        return (
            <div>
                
            </div>
        );
    }
    
}

export default Education;