import React from "react";

class Search extends React.Component {



    state = { term: '' }

    onImputSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state.term)
        this.props.onSubmit(this.state.term)
    }
    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onImputSubmit} className='ui form'>
                    <div className='field'>
                        <label value={this.state.term}>image search</label>
                        
                        <input type='text' onChange={e => this.setState({ term: e.target.value })}></input>
                    </div>

                </form>

            </div>
        )
    }
}


export default Search;