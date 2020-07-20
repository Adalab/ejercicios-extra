import React from 'react';
import { Link } from 'react-router-dom';

class EmailReader extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteEmail = this.handleDeleteEmail.bind(this);
  }

  componentDidMount() {
    this.props.handleReadEmail(this.props.id);
  }

  handleDeleteEmail() {
    this.props.handleDeleteEmail(this.props.id);
  }

  render() {
    return (
      <div>
        <div className="col2 mt-1 pt-1">
          <div>
            <h2 className="title--meidum">{this.props.subject}</h2>
            <h3 className="title--small">
              <span className="text--bold display-inline-block mr-1">{this.props.fromName}</span>
              <span className="text-normal display-inline-block">
                &lt;{this.props.fromEmail}&gt;
              </span>
            </h3>
          </div>
          <div className="text-align-right">
            <Link className="fas fa-times-circle form__btn" to="/" />
            <Link className="fas fa-trash form__btn" to="/" onClick={this.handleDeleteEmail} />
          </div>
        </div>

        <p>{this.props.body}</p>

        <div className="mt-1">
          <button className="form__btn">
            <span className="fas fa-reply mr-1"></span>
            Responder
          </button>

          <button className="form__btn">
            <span className="fas fa-reply-all mr-1"></span>
            Responder a todos
          </button>

          <button className="form__btn">
            <span className="fas fa-share mr-1"></span>
            Reenviar a todos
          </button>
        </div>
      </div>
    );
  }
}

export default EmailReader;
