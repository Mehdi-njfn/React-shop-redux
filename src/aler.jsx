
import React from 'react';
import 'onsenui/css/onsen-css-components.css';
import { AlertDialog, Button } from 'react-onsenui';


const Aler = () => {
  return (
    <div style={{
      display: 'block', width: 500, paddingLeft: 30
    }}>
      <h6>ReactJS Onsen-UI AlertDialog Component</h6>
      <AlertDialog isOpen={true}>
        <div className="alert-dialog-title">
          Confirm!!
        </div>
        <div className="alert-dialog-content">
          Do you sure want to exit?
        </div>
        <div className="alert-dialog-footer">
          <Button className="alert-dialog-button">
            YES
          </Button>
          <Button className="alert-dialog-button">
            NO
          </Button>
        </div>
      </AlertDialog>
    </div>
  )
    ;
}

export default Aler;