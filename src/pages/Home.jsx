import { useEffect, useState } from 'react';
import {getCountries} from '../service/country-service'
import { Container, CountryList, Heading, Loader, Section } from 'components';

export const Home = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {getCountries().then(data => setCountries(data));},[]);

  return (
    <Section>
      <Container>
        <CountryList countries ={countries} />
      </Container>
    </Section>
  );
};
