/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import qs from 'querystring';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
 

 

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ecomexpressId:  '',
            name:   '',
            number:'',
            fromaddress: '',
            toaddress: '',
            date: '',
    
        };
        this.addNew = this.addNew.bind(this);
        this.mynotes = this.mynotes.bind(this);
     
        
    }
    
    async componentDidMount() {
        const { location } = this.props;
        const { search } = location;
        const queryParams = qs.parse(search.slice(1));
        if (queryParams.admissionsId); {
            const { data } = await axios.get(`http://localhost:4000/notepad/${queryParams. ecomexpressId,name,number, fromaddress,  toaddress,  date}`);
            this.setState({
                ecomexpressId:   data.value.ecomexpressId,
                name:   data.value.name,
                number:data.value.number,
                fromaddress:data.value,request,
                toaddress:data.value.toaddress,
                date:data.value.date

            });
        }
    }
   
   async mynotes(){

    const { history } = this.props;
        history.push('/Display');
    }

  async addNew() {
    
    const {ecomexpressId,name,number, fromaddress,  toaddress,  date} = this.state;
    await axios.post('http://localhost:4000/ecomexpress', { ecomexpressId,name,number, fromaddress,  toaddress,  date});
    
};


    render() {

        return (
            <div>
                 <AppBar position="static">
                    <Toolbar>   
                    
                   
                 
                    <Typography variant="h6" >
                    ecomexpress
                     </Typography>
                    
                  </Toolbar>
              </AppBar>
           
                 <input
                    type="text"
                    placeholder=" name"
                    onChange={(event) => this.setState((prev) => ({
                        
                        name: event.target.value,
                    }))}
                />
                      <textarea
                    placeholder="fromaddress"
                    rows="10"
                    cols="70"
                    onChange={(event) => this.setState((prev) => ({
                        fromaddress: event.target.value,
                        
                    }))}
                />
                 <textarea
                    placeholder="toaddress"
                    rows="10"
                    cols="70"
                    onChange={(event) => this.setState((prev) => ({
                        toaddress: event.target.value,
                        
                    }))}
                />
                  <input
                    type="text"
                    placeholder=" number"
                    onChange={(event) => this.setState((prev) => ({
                        
                        number: event.target.value,
                    }))}
                />
                  <input
                    type="text"
                    placeholder=" date"
                    onChange={(event) => this.setState((prev) => ({
                        
                        date: event.target.value,
                    }))}
                />
                
                
                <button type="button" onClick={this.addNew}>save parcel address</button>
                <button type="button" onClick={this.mynotes}>saved </button>
             
            </div>
        );
    }
}


export default withRouter(home);
