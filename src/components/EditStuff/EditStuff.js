import React from 'react';

import './EditStuff.scss';

class EditScat extends React.Component {
  render() {
    const editId = this.props.match.params.id;
    return (
      <div className="EditSStuff">
        <h2>EditStuff</h2>
        <h3>The editId is {editId}</h3>
    </div>
    );
  }
}

export default EditScat;
