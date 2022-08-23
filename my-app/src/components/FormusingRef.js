import React, { useRef,useState } from 'react';
const FormUsingRef=()=>{
    const fname=useRef('');
    const lname=useRef('');
    const [suc,setsuc]=useState('');   
    const submission=(e)=>{
        e.preventDefault();
        setsuc(fname.current.value  + lname.current.value);
        fname.current.focus();
        //lname.current.focus();

    }
    return <div className='Container'>
        <h1 className="h1">Login Form with useref</h1>
        {(suc)? <p>Hello { fname.current.value}  {lname.current.value}</p>:''}
    <div className='Form-control'>
        <form onSubmit={submission}>
        <label for="f1">First Name</label>
        <input type="text" className='Form-input'id="f1" ref={fname} />
        <label for="f2">Last Name</label>
        <input type="text" className='Form-input' id="f2" ref={lname} />
        <button type="submit" className='Btn'>Submit</button>
        </form>
    </div></div>

}
export default FormUsingRef;