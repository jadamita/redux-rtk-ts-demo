export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
  is_hidde: boolean;
  slot: number;
};

export type PokemonDetails = {
  id: number;
  name: string;
  height: string;
  weight: string;
  sprites: {
    front_default: string;
    back_default: string;
  };
  abilities: PokemonAbility[];
};
