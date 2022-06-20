import { Component } from "react";
import queen from './queen.png';
class ImageComponent extends Component {
    render(){
        return <img src={this.props.src} alt={this.props.alt}/>
    }
}
export default ImageComponent