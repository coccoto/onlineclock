import React from 'react'
import ReactDom from 'react-dom'
// scripts
import App from '@/scripts/index'
// styles
import '@/styles/default.sass'

ReactDom.render (
    <App></App>,
    document.getElementById('app')
)