import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component {
  render() {
    return <div className="footer">
      <div className="logo"><img src="logo.png" /></div>
      <p className="caption">Inspired by <a href="https://mcversions.net/">Minecrafts Version</a>.</p>
    </div>;
  }
}
