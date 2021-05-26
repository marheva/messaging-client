import React, { Fragment } from 'react';
import Wrapper from '../Components/CustomComponents/Wrapper';
import Root from '../Components/Root';
import GlobalStyle from '../styles/GlobalStyles';
import '../i18n'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper className="App">
        <Root />
      </Wrapper>
    </Fragment>
  );
}

export default App;
