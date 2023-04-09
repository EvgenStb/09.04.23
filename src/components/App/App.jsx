import { Header } from 'components';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CountrySearch, Home, Country } from 'pages';

export const App = () => {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/country" element={<CountrySearch />} />
          <Route path="/country/:countryId" element={<Country />} />
        </Route>
        <Route path='*' element = {<Navigate to="/" replace={true}/>} />
      </Routes>
    </div>
  );
};
