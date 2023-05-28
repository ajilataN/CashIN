import { Component } from "react";
import Helmet from "react-helmet";

class Approved extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  QSetViewInParent = (obj) => {
    this.props.QViewFromChild(obj);
  };

  QSetView = (obj) => {
    this.setState({
      currentPage: obj.page
    });
  };

  QIDFromChild = (obj) => {};
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Helmet bodyAttributes={{ style: "background-color: #D4D4CE" }} />

        <p
          style={{
            fontSize: "20px",
            backgroundColor: "D4D4CE",
            textAlign: "center",
            marginTop: "50px"
          }}
        >
          Payment successful!
        </p>
      </div>
    );
  }
}

export default Approved;
