import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Suspense, lazy } from 'react';
import Loader from './components/Loader';

const Dashboard = lazy(()=> import('./pages/Dashboard'));
const Products = lazy(()=> import('./pages/Products'));
const Transaction = lazy(()=> import('./pages/Transaction'));
const Customers = lazy(()=> import('./pages/Customers'));
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/Product" element={<Products/>}/>
        <Route path="/admin/customer" element={<Customers/>}/>
        <Route path="/admin/transaction" element={<Transaction/>}/>
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
