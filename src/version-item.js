import React from 'react';
import ReactDOM from 'react-dom';

export default class VersionItem extends React.Component {
  render() {
    const createdAt = new Date(Date.parse(this.props.createdAt));
    const createdAtStr =
      `${createdAt.getFullYear()} /\
      ${createdAt.getMonth()} /\
      ${createdAt.getDate()}\
      ${createdAt.getHours()}:${createdAt.getMinutes()}:${createdAt.getSeconds()}`;

    return <div className="versionItem">
      <div className="versionName">{this.props.children}</div>
      <div className="createdAt">{createdAtStr}</div>
      <div className="download">
        <a className="download-ios downloadBtn" href="{this.props.ios}">
          <i className="fa fa-apple" />
        </a>
        <a className="download-android downloadBtn" href="{this.props.android}">
          <i className="fa fa-android" />
        </a>
        <a className="download-server downloadBtn" href="{this.props.server}">
          <i className="fa fa-server" />
        </a>
      </div>
    </div>
  };
}