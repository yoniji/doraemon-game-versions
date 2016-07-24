import React from 'react';
import ReactDOM from 'react-dom';
import VersionItem from './version-item';


export default class FilterItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      expanded: false
    };
  }

  render() {
    let className = this.state.expanded?'expanded':'';

    const hiddenVersionsCount = this.props.versions.length - 2;
    if (hiddenVersionsCount > 0) {
      className += ' showMoreBtn';
    }

    let moreBtnText;
    if (this.state.expanded) {
      moreBtnText = `Hide Older Versions (${hiddenVersionsCount})`;
    } else {
      moreBtnText = `Show Older Versions (${hiddenVersionsCount})`;
    }



    const versionNodes = this.props.versions.map((versionData) => {
      const {id, versionName, ...others} = versionData;

      return <VersionItem
        key={id}
        {...others}>
        {versionName}
      </VersionItem>;
    });

    return <div className={'filterItem ' + className}>
      <h2 className="filterName">
        {this.props.title}
      </h2>
      <ul className="versionList">
        {versionNodes}
      </ul>
      <div className="filterList-more" onClick={this.handleClick.bind(this)}>
        {moreBtnText}
      </div>
    </div>;
  }

  handleClick() {
    this.setState({expanded: !this.state.expanded});
  }
};
