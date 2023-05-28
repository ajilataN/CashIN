import "./styles.css";
import { Component } from "react";
import HomeView from "./CustomComponents/HomeView";
import Approved from "./CustomComponents/Approved";
import Authenticate from "./CustomComponents/Authenticate";

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      currentPage: "none"
    };
  }

  QSetView = (obj) => {
    this.setState({
      currentPage: obj.page
    });
  };

  QSetViewInParent = (obj) => {
    this.props.QIDFromChild(obj);
  };

  QGetView = (state) => {
    let page = state.currentPage;
    console.log(this.QSetView);
    switch (page) {
      case "Authenticate":
        return <Authenticate QIDFromChild={this.QSetView} />;

      case "HomeView":
        return <HomeView QIDFromChild={this.QSetView} />;

      case "Approved":
        return <Approved QIDFromChild={this.QSetView} />;

      default:
        return <HomeView QIDFromChild={this.QSetView} />;
    }
  };

  render() {
    return (
      <div>
        <h5
          style={{
            marginTop: "35px",
            fontStyle: "normal",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Roboto",
            fontSize: "75px"
          }}
        >
          CashIN
        </h5>

        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          Lekarna Slovenije
        </div>

        <div id="viewer" className="row container">
          {this.QGetView(this.state)}
        </div>
      </div>
    );
  }
}

export default App;
