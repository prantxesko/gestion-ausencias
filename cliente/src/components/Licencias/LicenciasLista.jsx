
import React from 'react';
import { setEstadoLicencia} from '../helpers';
import {Table, Checkbox, Button, Icon, Col, Row} from 'react-materialize';
import { AutoInit } from 'materialize-css';

export default function LicenciasLista(props){
  const {licencias} = props;



  const activateButton = licencia => {
    const iconText = !licencia.activa ? 'toggle_off' : 'toggle_on';
    const iconStyle = !licencia.activa ? {color: 'red'} : {color: '#26a69a'}
    iconStyle.cursor = 'pointer';

    return(
      <Icon
        id= {licencia.id}
        small
        style = {iconStyle}
        onClick = {() => handleActivateButton (licencia)}
      >{iconText}</Icon>
    )
  }
  const handleActivateButton = async licencia => {
    try{
      const estado = licencia.activa ? 'false' : 'true';
      await setEstadoLicencia(licencia.id, estado);
      props.onChange();
    }catch(error){
      console.log(error)
    }

  }
  
 
 
  return(
    <Table className ="striped">
      <thead>
        <tr>
          <th colSpan={2}>Lista de licencias vigentes</th>
        </tr>
      </thead>
      <tbody>
          {licencias.map(licencia =>(
            // <tr key = {licencia.id}>
            //   <td>
            //     <LineaLicencia licencia = {licencia}></LineaLicencia>
            //   </td>
            // </tr>
            <tr key = {licencia.id}>
              <td>
              <Checkbox
                filledIn
                label = ""
                id = {licencia.id}
                value = {licencia.id}
                checked = {false}
                onChange = {e => console.log(e.target.checked)}
              />
              </td>
              <td>
                {licencia.descrip}{(licencia.eliminada ? ' (Eliminada)': '' ) + '\u00A0\u00A0'}
              </td>
              <td>
                {/* {deleteButton(licencia)} */}
                {activateButton(licencia)}
              </td>
              
            </tr>
            ) 
            )}
        </tbody>
    </Table>
  )
}

export function LineaLicencia(props){
  const {licencia} = props;
  const divStyle = {
    display : 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
  const iconText = !licencia.activa ? 'toggle_off' : 'toggle_on';
  const iconStyle = !licencia.activa ? {color: 'red'} : {color: '#26a69a'}
  iconStyle.cursor = 'pointer';
  // console.log(licencia.id)
  return(
  <div style = {divStyle}>
   
     <Checkbox
        filledIn
        id = {licencia.id}
        label = {licencia.id}
        value = {licencia.id}
        checked = {false}
        onChange = {e => console.log(licencia.id, e.target.checked)}
        />
      {licencia.descrip}{(licencia.eliminada ? ' (Eliminada)': '' ) + '\u00A0\u00A0'}
      <Icon
        id= {licencia.id}
        small
        style = {iconStyle}
      >{iconText}</Icon>
  </div>
  )
}