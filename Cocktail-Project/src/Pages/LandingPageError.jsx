import React from 'react'
import { useRouteError } from 'react-router'

const LandingPageError = () => {
    const error = useRouteError();
    return <h2>Something went wrong....</h2>
}

export default LandingPageError