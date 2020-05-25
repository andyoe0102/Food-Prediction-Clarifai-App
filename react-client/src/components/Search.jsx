import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            foodname:'',
            foodurl:'',
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.props.search);
        this.props.search({name: this.state.foodname, url:this.state.foodurl})

        this.setState({
            foodname:'',
            foodurl:''
        })
    }

    render() {
        return (
            <div className='search'>
                <div className="search-bar">
                    <form className="form">
                        <div className="form-row align-items-center">
                            <div className="col-5">
                                <label className="sr-only" for="inlineFormInputName">FoodName</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Food Name</div>
                                    </div>
                                    <input type="text" name="foodname" className="form-control" id="inlineFormInputGroupUsername"
                                    value = {this.state.foodname}
                                    onChange={e => this.handleChange(e)}/>
                                </div>
                            </div>

                            <div className="col-5">
                                <label className="sr-only" for="inlineFormInputGroupUsername">URL</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">URL</div>
                                    </div>
                                    <input type="text" name="foodurl" className="form-control" id="inlineFormInputGroupUsername"
                                    value = {this.state.foodurl}
                                    onChange={e => this.handleChange(e)}/>
                                </div>
                            </div>

                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary" onClick={(e) => { this.onSubmit(e) }}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }



};

export default Search;

