import { useEffect, useState } from 'react';
import { getCountries } from '../service/country-service';
import { Container, CountryList, Loader, Section } from 'components';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getCountries()
      .then(data => setCountries(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (

    <Section>
      <Container>
        {isLoading && <Loader/>}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
