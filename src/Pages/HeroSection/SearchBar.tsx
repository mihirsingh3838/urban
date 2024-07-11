import React from 'react';
import { Grid, TextInput, Button, Container } from '@mantine/core';

const SearchBar: React.FC = () => {
  return (
    <Container className="mt-5">
      <Grid>
        <Grid.Col span="auto">
          <TextInput
            placeholder="What do you want to learn?"
            size="lg"
          />
        </Grid.Col>
        <Grid.Col span="auto">
          <Button size="lg">Search</Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default SearchBar;