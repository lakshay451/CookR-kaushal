import React from "react";
import ProfileForm from "./profile-form";

function Body() {

    const emptyDetail = {
        fname: "",
        lname: "",
        username: "",
        address1: "",
        address2: "",
        postalcode: "",
        mobile: "",
        country: "India",
        state: "",
    }
    const [detail, updateDetail] = React.useState(emptyDetail);
    React.useEffect(() => {
        const username = JSON.parse(localStorage.getItem('user')).username;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("username", username);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded
        };
        fetch("http://localhost:4000/getProfile", requestOptions)
            .then(response => response.text())
            .then(result => {
                const obtainedDetail = JSON.parse(result);
                if (obtainedDetail != 'Error') {
                    //console.log('fetch');
                    updateDetail(obtainedDetail);
                }
            })
            .catch(error => console.log('error', error));
    }, []);


    function submitChanges() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("fname", detail.fname);
        urlencoded.append("lname", detail.lname);
        urlencoded.append("username", detail.username);
        urlencoded.append("postalcode", detail.postalcode);
        urlencoded.append("mobile", detail.mobile);
        urlencoded.append("country", detail.country);
        urlencoded.append("state", detail.state);
        urlencoded.append("address1", detail.address1);
        urlencoded.append("address2", detail.address2);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
        };

        fetch("http://localhost:4000/profile", requestOptions)
            .then(response => response)
            .then(result => {
                if(result.status==200){
                    window.location.reload();
                }
            })
            .catch(error => console.log('error', error));
    }


    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        updateDetail(prevValue => ({
            ...prevValue,
            [name]: value
        }));
        //console.log(detail);
    }

    return <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
            <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">{detail.fname}</span><span className="text-black-50">{detail.username}</span><span> </span></div>
            </div>
            <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="text-right">Profile Settings</h4>
                    </div>
                    <div className="row mt-2">
                        <ProfileForm title="Name" placeholder="Name" name="fname" value={detail.fname} onChange={handleChange} />
                        <ProfileForm title="Surname" placeholder="Surname" name="lname" value={detail.lname} onChange={handleChange} />

                    </div>
                    <div className="row mt-3">
                        <ProfileForm title="Mobile Number" placeholder="+91 987654321" name="mobile" value={detail.mobile} onChange={handleChange} />
                        <ProfileForm title="Address Line 1" placeholder="Z 111" name="address1" value={detail.address1} onChange={handleChange} />
                        <ProfileForm title="Address Line 2" placeholder="example colony" name="address2" value={detail.address2} onChange={handleChange} />
                        <ProfileForm title="Postcode" placeholder="111111" name="postalcode" value={detail.postalcode} onChange={handleChange} />
                        <ProfileForm title="Email ID" placeholder="example@gmail.com" name="username" disabled={true} value={detail.username} onChange={handleChange} />

                    </div>
                    <div className="row mt-3">
                        <ProfileForm title="Country" placeholder="India" name="country" value={detail.country} onChange={handleChange} />
                        <ProfileForm title="State" placeholder="Delhi" name="state" value={detail.state} onChange={handleChange} />
                    </div>
                    <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={submitChanges}>Save Profile</button></div>
                </div>
            </div>

        </div>
    </div>
}

export default Body;