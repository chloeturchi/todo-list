import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const logout = props => {
  return <Redirect to="/" />;
};

export default logout