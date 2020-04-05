import React from 'react';

class HeaderComponent extends React.Component {
    
  
    render() {
      return (
       <div className="element">
            {this.props.comEx}           
       </div>

      );
    }
}

export default HeaderComponent; 