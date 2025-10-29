import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Products from './pages/Products';
function App(){
  const [user, setUser] = useState(null);
  useEffect(()=>{ const raw = localStorage.getItem('ecocycle_user'); if(raw) setUser(JSON.parse(raw)); },[]);
  const onLogout = ()=>{ localStorage.removeItem('ecocycle_token'); localStorage.removeItem('ecocycle_user'); setUser(null); window.location='/'; }
  return (<div><header><div className='container'><nav><Link to='/'>EcoCycle</Link> | <Link to='/products'>Products</Link> {user? <><Link to='/dashboard'>Dashboard</Link> {user.role==='admin' && <Link to='/admin'>Admin</Link>} <button onClick={onLogout} className='button'>Logout</button></>: <><Link to='/login'>Login</Link> <Link to='/register'>Register</Link></>}</nav></div></header><div className='container'><Routes><Route path='/' element={<Home/>}/><Route path='/login' element={<Login onAuth={setUser}/>}/><Route path='/register' element={<Register onAuth={setUser}/>}/><Route path='/dashboard' element={<Dashboard user={user}/>}/><Route path='/admin' element={<Admin user={user}/>}/><Route path='/products' element={<Products user={user}/>}/></Routes></div></div>);
}
export default App;
