import React, {Component} from 'react';
// import ErrorIndicator from '../error-indicator';
import SwapiService from "../../services/swapi-service";
import Row from '../row';

import {PlanetList,PlanetDetails} from '../sw-components';

export default class PlanetPage extends Component{

    swapiService = new SwapiService();

    state = {
        selectedItem: null
    };   

    onItemSelected = (selectedItem)=> {
        this.setState({selectedItem});
    };

    render () {

        // if(this.state.hasError) {
        //     return <ErrorIndicator />;
        // }

        const {selectedItem} = this.state;

        return (            
            <Row 
            left={<PlanetList onItemSelected={this.onItemSelected}/>}
            right={<PlanetDetails itemId={selectedItem} />}/>
        );
    }
}