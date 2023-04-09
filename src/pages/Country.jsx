import { Section, Container, CountryInfo, Loader } from 'components';
import { GoBack } from 'components/GoBack/GoBack';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [countryInfo, setCountryInfo] = useState(null);
  const { countryId } = useParams();
  const location = useLocation();
  useEffect(() => {
     setIsLoading(true);
    fetchCountry(countryId)
      .then(data => setCountryInfo(data))
      .finally(() => setIsLoading(false));
  }, [countryId]);
  if (!countryInfo) {
    return;
  }

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
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
