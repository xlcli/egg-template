import React from 'react';

import CusLayout from '../../components/Layout';

import './index.css';

const Home = props => {
  console.log(props.name);
  return <div>
    <CusLayout />
  </div>;
}

export default Home;