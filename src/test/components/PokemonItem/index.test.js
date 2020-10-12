import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { ReactReduxContext } from 'react-redux';
import PokemonItem from '../../../components/PokemonItem';

describe('PokemonItem', () => {
  const pokemonItem = {
    id: 1,
    img: 'https://pokeres.bastionbot.org/images/pokemon/1.png',
    name: 'Bulbasaur',
    number: '001',
    types: [],
  };

  let history;
  let component;

  beforeEach(() => {
    // history = createMemoryHistory();

    component = renderer.create(
      <PokemonItem
        pokemon={pokemonItem}
      />,
    );
  });

  it('redirects to details page after click on component', () => {
    console.log(screen);
    component.onClick();
    console.log(screen);

    expect(screen.getByText(/you are home/i)).toBeInTheDocument();
  });

  test('renders snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
