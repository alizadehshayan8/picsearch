import React from "react";


class Imagecard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }


    componentDidMount() {
        this.imageRef.current.addEventListener("load",this.setspans);
    }


    setspans = () => {

        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10)

        this.setState({spans})

    }


    render() {
        const {desciption, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imageRef}
                    alt={desciption}
                    src={urls.regular} />
            </div>
        )
    };
};


export default Imagecard;