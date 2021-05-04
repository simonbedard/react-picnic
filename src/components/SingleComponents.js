import React from 'react'
import { useParams } from 'react-router-dom'

import MyFirstReactComponents from "./MyFirstReactComponents"
import SimpleCounter from "./SimpleCounter"
import Error from "./Error"

export default function SingleComponents() {
    const { name } = useParams()
    const routes = {
        'my-first-component': <MyFirstReactComponents />,
        'simple-counter': <SimpleCounter />
       }
       

    return routes[name] || <Error />
  
}
