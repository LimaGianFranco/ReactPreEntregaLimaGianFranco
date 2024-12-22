import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center', color: 'white', backgroundColor: '#333' }}>
      <h2>{greeting}</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias porro rem amet rerum hic sequi culpa provident nam 
        facilis quia suscipit, voluptas corrupti, recusandae veritatis autem similique. Earum, nostrum repudiandae..</p>
    </div>
  );
};

export default ItemListContainer;
