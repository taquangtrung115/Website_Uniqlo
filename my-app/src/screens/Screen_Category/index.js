import React, { Component } from 'react';

import Category_Product_Container from '../../containers/Category_Container/index';
import Banner from '../../components/Banner/index';

class index extends Component {
    render() {
        var {match,location}=this.props;
        return (
            <div >
               
              
                <Category_Product_Container match={match} location={location}/>
              
            </div>
        );
    }
}

export default index;