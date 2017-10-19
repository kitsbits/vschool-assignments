import React from "react";
import MemeComponent from "./Component";
import Meme from "./Meme";
import {connect} from "react-redux";

class MemeContainer extends React.Component {
    constructor() {
        super();
        this.genMemes = this.genMemes.bind(this);
    }

    genMemes() {
        return this.props.memes.map((meme, i) => {
            return <Meme
                    meme={meme}
                    key={meme.imgURL + i}/>
        })
    }

    render() {
        return (
            <MemeComponent genMemes={this.genMemes}/>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {})(MemeContainer);
