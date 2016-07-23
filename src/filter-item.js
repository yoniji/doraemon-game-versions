import React from 'react';
import ReactDOM from 'react-dom';
import VersionItem from './version-item';


export default class FilterItem extends React.Component {
  render() {
    const versionNodes = this.props.versions.map((versionData) => {
      return <VersionItem
        key={versionData.id}
        ios={versionData.ios}
        android={versionData.android}
        server={versionData.server}
        createdAt={versionData.createdAt}>
        {versionData.versionName}
      </VersionItem>;
    });

    return <div className="filterItem">
      <h2 className="filterName">
        {this.props.title}
      </h2>
      <ul className="versionList">
        {versionNodes}
      </ul>
    </div>;
  }
};
