import React from 'react'
import { Name } from './Users/Name'

export const List = ({person}) => {
   return <section>
    { person.map((({ first_name, last_name,address},index)=>{
     return < Name  first_name={first_name} last_name={last_name} address={address} />
    }))}
   </section>
}
