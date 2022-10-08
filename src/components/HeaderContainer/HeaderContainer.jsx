import axios from "axios";
import React from "react";
import Header from "./Header/Header";

class HeaderContainer extends React.Component {

    componentDidMount(){
        let data = [userId, userEmail, userLogin]
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me').then(respons => {
            
            setUserAuthData(respons.data.data)
        })
    }

    render(){
        return(
            <div>
                <Header />
            </div>
        )
    }
}