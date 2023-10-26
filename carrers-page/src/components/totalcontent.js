import React from 'react';
import { Query } from 'react-apollo';
import DATA_QUERY from './dataquery';
// import Datadisplay from './Displaydata';
import Nav from './Nav';
import Carrres from './Carrres';

function RetrievedData() {

    return (
      <Query query={DATA_QUERY}>
       {({ loading, error, data }) => {
        
          if (loading) return <div>Fetching Data.....</div>
          if (error)   return <div>Error Fetching Data</div>

          var items;

          for(let i in data.assets){
            if(data.assets[i].id === "clo5gs4xr160q0bo8uzki9pb6"){
              items = data.assets[i];
            }
          }

          // console.log(items)
          return (
            <div>
              <Nav/>
              <Carrres key={items.id} product={items} />
            </div>
          )
        }}
      </Query>
    );
  

};
export default RetrievedData;