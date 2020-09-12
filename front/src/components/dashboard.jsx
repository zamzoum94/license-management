import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useRouteMatch } from 'react-router-dom';

// icons
import { faLightbulb, faWindowClose } from '@fortawesome/free-solid-svg-icons'

export default class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : []
        };
    }

    componentDidMount(){
        fetch('http://localhost:3000')
        .then(res =>{
            return res.json()
        })
        .then(docs =>{
            this.setState({
                data : docs.body
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }

    removeLicense(id){
        fetch(`http://localhost:3000/${id}`, {
            method : 'Delete' 
        })
        .then(res => fetch('http://localhost:3000'))
        .then(res => res.json())
        .then(docs => {
            this.setState({
                data : docs.body
            })
        })
        .catch(err => {
            alert('not working');
        })
    }

    render(){
        return(
            <div>
                <h2>Dashboard</h2>
                <table>
                    <tr>
                        <th> Enseigne </th>
                        <th> Siret </th>
                        <th> Paye </th>
                        <th> Telephone </th>
                        <th> License </th>
                        <th> Etat </th>
                        <th> Site </th>
                        <th> Action </th>
                    </tr>
                    {this.state.data.map((element, key) => {
                        return (
                            <tr key={ key }>
                                <td> { element.enseigne } </td>
                                <td> { element.siret } </td>
                                <td> { element.paye } </td>
                                <td> { element.telephone } </td>
                                <td> { element.license } </td>
                                <td> { element.etat }</td>
                                <td> { element.site }</td>
                                <td>
                                    <Link to= {`licence/${element._id}`}><button><FontAwesomeIcon icon={faLightbulb} /></button></Link>
                                    <button onClick= { () => {this.removeLicense(element._id) }}><FontAwesomeIcon icon={faWindowClose} /></button>
                                </td>
                            </tr>)
                    })}
                </table>
            </div>
        )
    }
}