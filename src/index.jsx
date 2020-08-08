import React from 'react'
import ReactDom from 'react-dom'
import App from '@/app/index'
// styles
import '@/app/styles/default.sass'

ReactDom.render (
    <App></App>,
    document.getElementById('app')
)