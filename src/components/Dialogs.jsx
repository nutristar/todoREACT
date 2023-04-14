import React from "react";
import { NavLink } from "react-router-dom";
import './cmpnnt.css';

function Dialogs(props){

  const DialogItems = (props) => {
      return (
        <React.Fragment>
          <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
          <br />
        </React.Fragment>
      );
    };

  const DiaItemRender= props.DialogsList.map(fordst=>{return(<DialogItems id={fordst.id} name={fordst.name}  />)});

  return(<div className="dialogs">
      <div className="users">
          {DiaItemRender}
      </div> 

      <div className="messages"> tratata tri rubla  tri kota kak dela?</div>

      </div>)};

export default Dialogs;

