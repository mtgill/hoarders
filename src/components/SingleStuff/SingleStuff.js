import React from 'react';

import './SingleStuff.scss';

class SingleStuff extends React.Component {
  render() {
    const singleId = this.props.match.params.id;
    return (
      <div className="SingleStuff">
        <h2>Single Stuff</h2>
        <h3>The singleId is {singleId}</h3>
    </div>
    );
  }
}

export default SingleStuff;
