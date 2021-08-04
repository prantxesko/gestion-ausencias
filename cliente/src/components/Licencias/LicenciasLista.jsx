
import React from 'react';
import { deleteLicencia, restoreLicencia } from '../helpers';
import {Table, Checkbox, Button, Icon, Col, Row} from 'react-materialize';
import { AutoInit } from 'materialize-css';

export default function LicenciasLista(props){
  const {licencias} = props;

  const deleteButton = licencia => {
    return(
      <Button
        floating
        small
        className = {!licencia.eliminada ? "red" : ""}
        icon={<Icon id= {licencia.id} >{licencia.eliminada ? 'restore_from_trash' : 'delete'}</Icon>}
        onClick = {handleDeleteButton}
      ></Button>
    )
  }
  
  const handleDeleteButton = async e => {
    console.log(e.target)
    try{
      if(e.target.innerText === 'delete'){
        await deleteLicencia(e.target.id);
      }else{
        await restoreLicencia(e.target.id);
      }
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
                {deleteButton(licencia)}
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
  console.log(licencia.id)
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
      <Button
        floating
        small
        className = {!licencia.eliminada ? "red" : ""}
        icon={<Icon id= {licencia.id} >{licencia.eliminada ? 'restore_from_trash' : 'delete'}</Icon>}
        
      ></Button>
  </div>
  )
}