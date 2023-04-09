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
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const region = searchParams.get('region');
    if (!region) {
      return;
    }
    fetchByRegion(region)
      .then(data => {
        setCountries(data);
      })
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  const handleSubmit = region => {
    setSearchParams({ region });
  };
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        <SearchForm onSubmit={handleSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
