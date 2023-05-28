import { Component } from "react";
import Helmet from "react-helmet";
import axios from "axios";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);
class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  QSetViewInParent = (obj) => {
    console.log(this.props);
    this.props.QIDFromChild(obj);
  };

  QSetView = (obj) => {
    this.setState({
      currentPage: obj.page
    });
  };

  render() {
    return (
      <div>
        <Helmet bodyAttributes={{ style: "background-color: #D4D4CE" }} />

        <input
          placeholder="€"
          style={{
            padding: "10px",
            textAlign: "center",
            fontSize: "60px",
            maxWidth: "120px",
            margin: "auto",
            backgroundColor: "#e7e7e4"
          }}
          className="form-control"
          rows="3"
        ></input>

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
          placeholder="Phone number"
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
            let a = await axios.post("http://localhost:3000/api/sendSms");
            console.log(a);

            this.QSetViewInParent({ page: "Authenticate" });
          }}
        >
          Request
        </button>
      </div>
    );
  }
}
export default HomeView;
