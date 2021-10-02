import React, { useState } from 'react';

const UseStateImplementation = () => {
    const [form, setForm] = useState({
        name:'', password: '', email: ''
    });

    const handleInput = e => {
        setForm({
            ...form, [e.target.name]: e.target.value
        });
    }

    return <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems:'center' }}>
        <h1>Use State Implementation</h1>
        <input name="name" type="text" placeholder="Name" value={form.name} style={{ width: '40%', marginTop:'12px' }} onChange={e => handleInput(e)}></input>
        <input name="email" type="email" placeholder="Email"  value={form.email} style={{ width: '40%', marginTop:'12px' }} onChange={e => handleInput(e)}></input>
        <input name="password" type="password" placeholder="Password" value={form.password} style={{ width: '40%', marginTop:'12px' }} onChange={e => handleInput(e)}></input>
    </div>
}

export default UseStateImplementation;