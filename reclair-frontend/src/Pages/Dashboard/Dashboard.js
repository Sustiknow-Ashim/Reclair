import React from 'react';

const Dashboard = () => {
    return (
        <div><h1 className='font-bold text-xl text-center text-orange-300'>Sales Overview</h1>
        <div className='grid md:grid-cols-4  lg:grid-cols-4 gap-4'>
              

            <div className="card w-96 bg-base-100 shadow-xl">
            
  <div className="card-body">
    <h2 className="card-title ">Total Sales</h2>
    <p>850</p>
   
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Revenue</h2>
    <p>18550</p>
    
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Cost</h2>
    <p>15550</p>
    
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Profit</h2>
    <p>35500</p>
    
  </div>
</div>

        </div>
        <div><h1 className='font-bold text-xl text-center py-5 text-orange-300'>Purchase Overview</h1>
        <div className='grid md:grid-cols-4  lg:grid-cols-4 gap-4'>
              

              <div className="card w-96 bg-base-100 shadow-xl">
              
    <div className="card-body">
      <h2 className="card-title ">No Of Purchase</h2>
      <p>50</p>
     
    </div>
  </div>
  <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Cancel Orders</h2>
      <p>05</p>
      
    </div>
  </div>
  <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Cost</h2>
      <p>1055</p>
      
    </div>
  </div>
  <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Returns</h2>
      <p>07</p>
      
    </div>
  </div>
  
  
          </div>
          <div><h1 className='font-bold text-xl text-center py-5 text-orange-300'>Inventory Summary</h1>

          <div className='grid md:grid-cols-4  lg:grid-cols-4 gap-4'>
              

              <div className="card w-96 bg-base-100 shadow-xl">
              
    <div className="card-body">
      <h2 className="card-title ">No Of Purchase</h2>
      <p>50</p>
     
    </div>
  </div>
 
  <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Returns</h2>
      <p>07</p>
      
    </div>
  </div>
  
  
          </div>
          <div className='text-center'><h1 className='font-bold text-xl text-center py-5 text-orange-300'>Products Details</h1>
          <div className='grid md:grid-cols-4  lg:grid-cols-4 gap-4'>
              

              <div className="card w-96 bg-base-100 shadow-xl">
              
    <div className="card-body">
      <h2 className="card-title ">Low stock items</h2>
      <p>05</p>
     
    </div>
  </div>
              <div className="card w-96 bg-base-100 shadow-xl">
              
    <div className="card-body">
      <h2 className="card-title ">Item groups</h2>
      <p>10</p>
     
    </div>
  </div>
 
  <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">No Of Items</h2>
      <p>105</p>
      
    </div>
  </div>
  
  </div>
  <div className='text-center'>
  <h1 className='font-bold text-xl text-center py-5 text-orange-300'>No Of Users</h1>
  <div className="stats shadow ">
  
 
  
  <div className="stat place-items-center">
    <div className="stat-title">Total Customers</div>
    <div className="stat-value text-secondary">500</div>
   
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Total Users</div>
    <div className="stat-value">100</div>
   
  </div>
  
</div>
  </div>
          </div>
          </div>
          </div>
        </div>
    );
};

export default Dashboard;