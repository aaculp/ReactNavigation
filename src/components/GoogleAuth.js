import React, { Component } from 'react'

export default class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "750806491404-3nukkblpnrv0vjoo7t1e0ocnct1v29i3.apps.googleusercontent.com",
                scope: "email"
            })
        })
    }

    render() {
        return (
            <div>
                Google Auth
            </div>
        )
    }
}
