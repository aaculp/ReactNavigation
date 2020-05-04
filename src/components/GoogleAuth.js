import React, { Component } from "react";

export default class GoogleAuth extends Component {
  state = {
    isSignedIn: null
  };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "750806491404-3nukkblpnrv0vjoo7t1e0ocnct1v29i3.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if were signed in</div>;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.signOut}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui green google button" onClick={this.signIn}>
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }

  signIn = () => {
    this.setState({ isSignedIn: this.auth.signIn() });
    console.log(this.state.isSignedIn);
  };

  signOut = () => {
    this.setState({ isSignedIn: this.auth.signOut() });
    console.log(this.state.isSignedIn);
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
