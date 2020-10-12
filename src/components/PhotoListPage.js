import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/photoActions";
import Pagination from "./Pagination";
import BaseComponent from "./BaseComponent";
import PhotoCard from "./PhotoCard";
export class PhotoListPage extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      allphotos: this.props.photos,
      currentPhotos: [],
      currentPage: null,
      totalPages: null
    };
  }

  componentDidMount() {
    this.props.actions.loadPhotos();
  }

componentWillReceiveProps(newProps) {   
    debugger 
    this.setState({  allphotos:newProps.photos});
 }

  onPageChanged = data => {
    const { allphotos } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentPhotos = allphotos.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentPhotos, totalPages });
  };

  render() {
    const {
      allphotos,
      currentPhotos,
      currentPage,
      totalPages,
    } = this.state;
    const totalPhotos = allphotos.length;

    if (totalPhotos === 0) return null;

    const headerClass = [
      "text-dark py-2 pr-4 m-0",
      currentPage ? "border-gray border-right" : "",
    ]
      .join(" ")
      .trim();

    return (
      <div className="container mb-5">
        <div className="row d-flex flex-row py-5">
          <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
            <div className=" ml-5 pr-5 align-items-center">
              <Pagination
                totalRecords={totalPhotos}
                pageLimit={18}
                pageNeighbours={1}
                onPageChanged={this.onPageChanged}
              />
            </div> 
            <br/>
              <h2 className={headerClass}>
                <strong className="text-secondary">
                  {totalPhotos}
                </strong>{" "}
                Photos 
              </h2>
               
              {currentPage &&
                <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                  Page <span className="font-weight-bold">{currentPage}</span> /{" "}
                  <span className="font-weight-bold">{totalPages}</span>
                </span>}
            </div>
           
          </div>
          <div>
          { currentPhotos.map(photo => <PhotoCard key={photo.id} photo={photo} />) }

          </div>
        
        
        </div>
      </div>
    
    );
  }
  
}
PhotoListPage.propTypes = {
  actions: PropTypes.object,
  photos: PropTypes.array,
  history: PropTypes.object,
};

export function mapStateToProps(state) {
  debugger;
  return {
    photos: state.photos,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoListPage);
