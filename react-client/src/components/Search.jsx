import React from 'react';

const Search = (props) => (
    <div className='search'>
        <div className="search-bar">
            <form className ="form">
                <div className="form-row align-items-center">
                    <div className="col-5">
                        <label className="sr-only" for="inlineFormInputName">FoodName</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">Food Name</div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername"/>
                        </div>
                    </div>

                    <div className="col-5">
                        <label className="sr-only" for="inlineFormInputGroupUsername">URL</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">URL</div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername"/>
                        </div>
                    </div>

                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary" onClick ={(e) =>{props.search(e)}}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

);

export default Search;

