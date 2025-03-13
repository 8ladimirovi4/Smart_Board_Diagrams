import Layout from 'components/layout/Layout';
import GlobalStyles from 'styles/GlobalStyles';
import 'styles/output.css';
import PrimeReact from 'primereact/api';
import PageNotFound from 'pages/404/PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scheme1 from 'pages/scheme1/Scheme1';
import Scheme2 from 'pages/scheme2/Scheme2';
// import Scheme3 from 'pages/scheme3/Scheme3';
import Scheme4 from 'pages/scheme4/Scheme4';
import Scheme5 from 'pages/scheme5/Scheme5';
import Scheme6 from 'pages/scheme6/Scheme6';
import { useEffect } from 'react';
import WebixScheme from 'pages/scheme6/WebixScheme';

const App = () => {
  PrimeReact.zIndex = {
    modal: 1100, // dialog, sidebar
    overlay: 1000, // dropdown, overlaypanel
    menu: 1000, // overlay menus
    tooltip: 1100, // tooltip
    toast: 1200, // toast
  };
  const getMessage = () => {
    const webixLicenseMEssage = document.querySelector('.webix_message_area')
    if(webixLicenseMEssage)  webixLicenseMEssage.outerHTML = '<div></div>'

    if(!webixLicenseMEssage) setTimeout(getMessage, 1000)
  }

  useEffect(() => {
      getMessage()
  },[])

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Scheme1/>} />
          {/* <Route path="/scheme2" element={<Scheme2/>} /> */}
          {/* <Route path="/scheme3" element={<Scheme3/>} /> */}
          <Route path="/scheme4" element={<Scheme4/>} />
          <Route path="/scheme5" element={<Scheme5/>} />
          <Route path="/scheme6" element={<Scheme6/>} />
          <Route path="/scheme6/scheme" element={<WebixScheme/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
