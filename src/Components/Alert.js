import React from 'react'

export default function Alert(props) {
    const capatilise=(word)=>{
        const c=word.toLowerCase();
        return c.charAt(0).toUpperCase() + c.slice(1); //Slice method eliminates the word at the passed index
    }
  return (
    props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capatilise(props.alert.type)}</strong>:{props.alert.msg}
        </div>
    </div>
  )
}
