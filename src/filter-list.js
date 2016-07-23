import React from 'react';
import ReactDOM from 'react-dom';
import FilterItem from './filter-item';


export default class FilterList extends React.Component {
  render() {
    const filterNodes = this.props.data.map((filterData) => {
      return <FilterItem
        title={filterData.filterName}
        key={filterData.id}
        versions={filterData.versions} />;
    });

    return <div className="filterList">
        {filterNodes}
    </div>;
  }
};
