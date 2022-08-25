import React, {Component} from 'react';
import Newss from './components/newss';
import data from './data.json'
class App extends Component {
	render() {
	    return (
            <Newss newss={this.state.newss} />
        )
	}
	
	state = {
        newss: data
    };

    componentDidMount() {
        fetch("http://api.mediastack.com/v1/news?access_key=9574f2d9690d371b0ee5e3163b3bf106&languages=en&categories=sports,health,business")
            .then(res => res.json())
            .then((res) => {
                this.setState({ newss: res.data })
            })  
            .catch(console.log)
    }
}

export default App;