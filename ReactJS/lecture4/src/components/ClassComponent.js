import React from 'react';

export class ClassComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log('Constructor Called')
        this.state = {
            promenliva1: 'Prva Vrednost'
        }
    };


    componentDidMount() {
        console.log('Compontent Did Mount')
    }


    smeniVrednost = () => {
        // this.state.promenliva1 = 'Vtora Vrednost';
        // console.log(this.state.promenliva1);
        this.setState({
            promenliva1: 'Vtora Vrednost'

        })
    };

    render() {
        console.log('Component Rendered')
        return (
            <div id='class-component'>
                <h2>Class Component</h2>
                <p>{this.state.promenliva1}</p>
                <button onClick={this.smeniVrednost} > Smeni Vrednost </button>
            </div>
        )
    }
};