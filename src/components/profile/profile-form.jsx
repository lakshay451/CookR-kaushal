import React from "react";

function ProfileForm(props){
    return <div className="col-md-6">
    <label className="labels">{props.title}</label>
    <input disabled={props.disabled} onChange={(event)=>props.onChange(event)} type="text" className="form-control" placeholder={props.placeholder} value={props.value} name={props.name} />
    </div>
}

export default ProfileForm;