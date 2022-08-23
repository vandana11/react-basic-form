import React,{useState} from 'react';
const Form=()=>{
    const [fname,setfname]=useState('');
    const [lname,setlname]=useState('');
    const [suc,setsuc]=useState('');
    const changeFname=(e)=>{
        setfname(e.target.value);
    }
    const changeLname=(e)=>{
        setlname(e.target.value);
    }
    const submission=(e)=>{
        e.preventDefault();
        setsuc(fname  + lname);
    }
    return <div className='Container'>
        <h1 className="h1">Login Form</h1>
        {(suc)? <p>hii { fname}  {lname}</p>:''}
    <div className='Form-control'>
        <form onSubmit={submission}>
        <label for="f1">First Name</label>
        <input type="text" className='Form-input'id="f1" value={fname} onChange={changeFname}/>
        <label for="f2">Last Name</label>
        <input type="text" className='Form-input' id="f2" value={lname} onChange={changeLname}/>
        <button type="submit" className='Btn'>Submit</button>
        </form>
    </div></div>
}
export default Form;