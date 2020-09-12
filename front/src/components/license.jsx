import React from 'react';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Route, Switch } from 'react-router-dom';

import CurrentLicense from './currentlicense';
import UpdateLicense from './updatelicense';

const style = {
    backgroundColor : 'white',
    border : 'none'
}

export default class License extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : {},
            updating : false
        }
        this.id = props.match.params.id;
    }

    componentDidMount(){
        fetch(`http://localhost:3000/${this.id}`)
        .then(res => res.json())
        .then(doc => {
            this.setState({
                data : doc.body
            });
        })
    }

    switchUpdate(){
        this.setState(state => ({
            updating : !state.updating
        }))
    }

    render(){
        return(
            <div>
                <h2>License</h2>
                <button style={style} onClick = { this.switchUpdate.bind(this) }>
                    { this.state.updating === false ? 
                    <FontAwesomeIcon icon={faEdit} size='2x'></FontAwesomeIcon> 
                    : 
                    '' 
                    }  
                </button>
                <Switch>
                    { this.state.updating === false ? 
                    <CurrentLicense data={ this.state.data }/>
                    :
                    <UpdateLicense  data={ this.state.data } switchUpdate ={this.switchUpdate.bind(this)}/>
                    }
                </Switch>
            </div>
        )
    }
}
