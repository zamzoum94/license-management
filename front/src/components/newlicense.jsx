import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';

class NewLicence extends React.Component{
    constructor(props){
        super(props);
        this.state = {  }
    }

    handleInput(event){
        this.state[event.target.name] = event.target.value;
    }

    handleSubmit(event){
        let history = useHistory();
        event.preventDefault();
        fetch('http://localhost:3000/', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : this.state
        })
        .then(res => res.json())
        .then(doc =>{
            history.push('/');
        })
        .catch(err =>{
            alert('failed');
        })
    }

    render(){
        return(
            <form>
                <div className='row'>
                    <div className='col-md-5'>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="enseigne">Enseigne</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="enseigne" onChange={this.handleInput.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="siret">Siret</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="siret" onChange={this.handleInput.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="telephone">Telephone</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="telephone" onChange={this.handleInput.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="adresse">Adresse</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="adresse" onChange={this.handleInput.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="code_postal">Code postal</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="code_postal" onChange={this.handleInput.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="ville">ville</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="ville" onChange={this.handleInput.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="paye">Paye</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="paye" onChange={this.handleInput.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="nombre_postrs">Nombre postrs</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="nombre_postrs" onChange={this.handleInput.bind(this)}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <button onClick={ this.handleSubmit.bind(this) } type="submit" className="btn btn-primary">Submit</button>
                                <button onClick={ this.state = {} } type="reset" className="btn btn-danger ml-3">Reset</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="duree_utulisation">Duree utulisation</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="duree_utulisation"  onChange={this.handleInput.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="client_email">Client email</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="client_email" onChange={this.handleInput.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="client_pwd">Client email</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="client_pwd" onChange={this.handleInput.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="licence">Licence</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="licence" onChange={this.handleInput.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="code_licence">Code licence</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="code_licence" onChange={this.handleInput.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="etat">Etat</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="etat" onChange={this.handleInput.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="site">Site</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="site" onChange={this.handleInput.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="exercice">Exercice</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="exercice" onChange={this.handleInput.bind(this)}></input>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default NewLicence;