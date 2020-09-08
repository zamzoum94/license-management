import React from 'react';

export default class Home extends React.Component {
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
            console.log('State: ',this.state)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    render(){
        return(
            <div className='container'>
                <div className='row'>
                    {this.state.data.map((element, key) =>{
                        return(
                        <div className='col-md-4' key={key}>
                            {element.name}
                        </div>)
                    })}
                </div>  
            </div>
        )
    }
}