import { Section, Container, CountryInfo, Loader } from 'components';
import { GoBack } from 'components/GoBack/GoBack';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [countryInfo, setCountryInfo] = useState(null);
  const { countryId } = useParams();
  const location = useLocation();
  useEffect(() => {
    fetchCountry(countryId).then(data => setCountryInfo(data));
  }, [countryId]);
  if (!countryInfo) {
    return;
  }

  return (
    <Section> 
      <Container>
        <GoBack path={location?.state?.from ?? '/'}>Go back</GoBack>
        <CountryInfo
        
          flag={countryInfo.flag}
          capital={countryInfo.capital}
          country={countryInfo.countryName}
          id={countryId}
          languages={countryInfo.languages}
          population={countryInfo.population}
        />
      </Container>
    </Section>
  );
};
