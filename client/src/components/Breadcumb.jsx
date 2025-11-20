import React from 'react'

const Breadcumb = ({title}) => {
  return (
    <ol class="breadcrumb justify-content-left">
        <li class="breadcrumb-item">
            <a href="/">Accueil</a>
        </li>
        <li class="breadcrumb-item active">{title}</li>
    </ol>
  )
}

export default Breadcumb
