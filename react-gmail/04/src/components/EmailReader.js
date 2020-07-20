import React from 'react';

class EmailReader extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    console.log('Me han clickado con el evento:', ev);
    console.log('El this es window', this);
    this.forceUpdate();
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
            <a href="/">
              <button className="fas fa-times-circle form__btn"></button>
            </a>
            <a href="/">
              <button className="fas fa-trash form__btn"></button>
            </a>
          </div>
        </div>

        <p>{this.props.body}</p>

        <div className="mt-1">
          <button className="form__btn" onClick={this.handleClick}>
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

// const btn = document.querySelector('.js-form__btn-fake');

// function handleClick (ev) {
//   console.log('Me han clickado')
// }

// btn.addEventListener('click', handleClick);

export default EmailReader;
