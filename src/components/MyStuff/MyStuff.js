import React from 'react';

import { Link } from 'react-router-dom';

import './MyStuff.scss';

class NewScat extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345';
    this.props.history.push(`/edit/${orderId}`);
  };

  render() {
    const singleLink = '/scat/12345';
    return (
      <div className="MyStuff">
        <h2>My Stuff</h2>
        <button className="btn btn-warning" onClick={this.editEvent}>Edit the stuff!</button>
        <Link to={singleLink}>View Single</Link>
    </div>
    );
  }
}

export default NewScat;
