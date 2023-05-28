import { Component } from "react";
import Helmet from "react-helmet";

class Authenticate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  QSetViewInParent = (obj) => {
    this.props.QIDFromChild(obj);
  };

  QSetView = (obj) => {
    this.setState({
      currentPage: obj.page
    });
  };

  QIDFromChild = (obj) => {};

  render() {
    return (
      <div>
        <Helmet bodyAttributes={{ style: "background-color: #D4D4CE" }} />

        <input
          style={{
            padding: "10px",
            textAlign: "center",
            fontSize: "20px",
            maxWidth: "210px",
            margin: "auto",
            marginTop: "30px",
            backgroundColor: "#e7e7e4"
          }}
          type="number"
          pattern="+[0-9]*"
          className="form-control"
          placeholder="OTP"
        />

        <button
          style={{
            width: "100%",
            margin: "auto",
            marginTop: "30px",
            backgroundColor: "#023246"
          }}
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={async () => {
            this.QSetViewInParent({ page: "Approved" });
          }}
        >
          Confirm
        </button>
      </div>
    );
  }
}

export default Authenticate;
