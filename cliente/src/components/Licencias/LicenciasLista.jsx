
import React from 'react';
import { deleteLicencia, restoreLicencia } from '../helpers';
import {Table, Checkbox, Button, Icon} from 'react-materialize';

export default function LicenciasLista(props){
  const {licencias} = props;

  const deleteButton = licencia => {
    return(
      <Button
        floating
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
    <Table>
      <thead>
        <tr>
          <th colSpan={2}>Lista de licencias vigentes</th>
        </tr>
      </thead>
      <tbody>
          {licencias.map(licencia =>(
            <tr key = {licencia.id}>
              <td>
              <Checkbox
                filledIn
                id = {licencia.id}
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