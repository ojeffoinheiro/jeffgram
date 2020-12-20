import React from 'react';

import Header from '~/components/Header'
import Stories from '~/components/Stories'
import Posts from '~/components/Posts'
import Tabbar from '~/components/Tabbar';

const Main = () => {
  return(
    <React.Fragment>
      <Header />
      <Stories />
      <Posts />
      <Tabbar />
    </React.Fragment>
  );
};

export default Main;
