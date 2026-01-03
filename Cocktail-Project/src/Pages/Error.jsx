import React from 'react'
import {  useRouteError } from 'react-router'

const Error = () => {
        const error = useRouteError();
        if(error.status === 400){
          return (<div>
            Error
          </div>
        );
      }
        return( <div>
          <h1>Something went wrong...</h1>
        </div>
    );
  }

export default Error