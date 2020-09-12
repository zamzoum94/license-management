import React from 'react';

const CurrentLicense = function(props){

    return (
        <div>
            <div className='row'>
                <div className='col-md-2'>
                    Enseigne
                </div>
                <div className='col-md-2'>
                    { props.data.enseigne }
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    Siret
                </div>
                <div className='col-md-2'>
                    { props.data.siret }
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    Code Naf
                </div>
                <div className='col-md-2'>
                    { props.data.code_naf}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    Numero Tva
                </div>
                <div className='col-md-2'>
                    { props.data.numero_tva }
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    Telephone
                </div>
                <div className='col-md-2'>
                    {props.data.telephone}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    Adresse
                </div>
                <div className='col-md-2'>
                    {props.data.adresse}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    Code Postal
                </div>
                <div className='col-md-2'>
                    {props.data.code_postal}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    Ville
                </div>
                <div className='col-md-2'>
                    {props.data.ville}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    Paye
                </div>
                <div className='col-md-2'>
                    {props.data.paye}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    Nombre postes
                </div>
                <div className='col-md-2'>
                    {props.data.nombre_postes}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    Duree utilisation
                </div>
                <div className='col-md-2'>
                    {props.data.duree_utilisation}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    Client email
                </div>
                <div className='col-md-2'>
                    {props.data.client_email}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    Client pwd
                </div>
                <div className='col-md-2'>
                    {props.data.client_pwd}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    Licence
                </div>
                <div className='col-md-2'>
                    {props.data.licence}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    Code licence
                </div>
                <div className='col-md-2'>
                    {props.data.code_licence}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    Etat
                </div>
                <div className='col-md-2'>
                    {props.data.etat}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    Site
                </div>
                <div className='col-md-2'>
                    {props.data.site}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    Exercice
                </div>
                <div className='col-md-2'>
                    {props.data.exercice}
                </div>
            </div>
        </div>
    )
}

export default CurrentLicense;