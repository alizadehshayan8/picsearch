import React from "react";
import unsplash from "../api/unsplash";
import Search from "./Search";
import ImageList from "./imageList";




class App extends React.Component {


    state = { images: [] }

    onSearchSubmit = async (term) => {

        const response = await unsplash.get('/search/photos', {
            params: { query: term }

        });

        this.setState({ images: response.data.results })
    }

    render() {


        return (
            <div className='ui contaner' style={{ margin: '10px' }}>
                <Search onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
};


export default App;