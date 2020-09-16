import React from 'react';

class UpdateLicense extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : props.data
        }
    }

    updatingValues(event){
        this.state.data[event.target.name] = event.target.value;
        this.setState({});
    }

    handleUpdate(event){
        event.preventDefault();
        fetch(`http://localhost:3000/${this.state.data._id}`, {
            method : 'PATCH',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(this.state.data)
        })
        this.props.switchUpdate();
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
                                <input className="form-control" name="enseigne" value={this.state.data.enseigne} onChange={this.updatingValues.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="siret">Siret</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="siret" value={this.state.data.siret} onChange={this.updatingValues.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="telephone">Telephone</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="telephone" value={this.state.data.telephone} onChange={this.updatingValues.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="adresse">Adresse</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="adresse" value={this.state.data.adresse} onChange={this.updatingValues.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="code_postal">Code postal</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="code_postal" value={this.state.data.code_postal} onChange={this.updatingValues.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="ville">ville</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="ville" value={this.state.data.ville} onChange={this.updatingValues.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="paye">Paye</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="paye" value={this.state.data.paye} onChange={this.updatingValues.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="nombre_postrs">Nombre postrs</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="nombre_postrs" value={this.state.data.nombre_postrs} onChange={this.updatingValues.bind(this)}></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="duree_utulisation">Duree utulisation</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="duree_utulisation" value={this.state.data.duree_utulisation} onChange={this.updatingValues.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="client_email">Client email</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="client_email" value={this.state.data.client_email} onChange={this.updatingValues.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="client_pwd">Client email</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="client_pwd" value={this.state.data.client_pwd} onChange={this.updatingValues.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="licence">Licence</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="licence" value={this.state.data.licence} onChange={this.updatingValues.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="code_licence">Code licence</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="code_licence" value={this.state.data.code_licence} onChange={this.updatingValues.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="etat">Etat</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="etat" value={this.state.data.etat} onChange={this.updatingValues.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="site">Site</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="site" value={this.state.data.site} onChange={this.updatingValues.bind(this)}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className='col-md-3'>
                                <label htmlFor="exercice">Exercice</label>
                            </div>
                            <div className='col-md'>
                                <input className="form-control" name="exercice" value={this.state.data.exercice} onChange={this.updatingValues.bind(this)}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md">
                                <button type="submit" className="btn btn-success" onClick={this.handleUpdate.bind(this)}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default UpdateLicense;