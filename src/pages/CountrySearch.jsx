import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { fetchByRegion } from '../service/country-service';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const CountrySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const region = searchParams.get('region');
    if (!region) {
      return;
    }
    fetchByRegion(region).then(data => {
      setCountries(data);
    });
  }, [searchParams]);

  const handleSubmit = region => {
    setSearchParams({ region });
  };
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
