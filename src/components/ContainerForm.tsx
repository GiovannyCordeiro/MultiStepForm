import React from 'react'
import classes from "./ContainerForm.module.css";

interface ContainerForm{
  children?: JSX.Element | JSX.Element[];
}

export default function ContainerForm(props:ContainerForm) {
  return (
    <div className={classes.container_form}>
      {props.children}
    </div>
  )
}