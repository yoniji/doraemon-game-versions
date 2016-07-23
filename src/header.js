import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
  render() {
    return <div className="header">
      <h1><i className="fa fa-pied-piper" /> Doraemon Game Versions</h1>
      <p className="caption">This is a small project designed to make obtaining versions of Doraemon easy and simple.</p>
    </div>;
  }
}
