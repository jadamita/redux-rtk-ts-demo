import { useGetPokemonDetailsQuery } from '../slice/apiSlice';
import { PokemonAbility } from '../types/pokemon';

export const PokemonDetails = ({ name }: any) => {
	const { data, isLoading } = useGetPokemonDetailsQuery(name);

	if (isLoading) {
		return (
			<>
				<h4>Loading pokemon details...</h4>
			</>
		);
	}

	return (
		<>
			{data && name.length > 0 ? (
				<>
					<img src={data?.sprites?.front_default} />
					<img src={data?.sprites?.back_default} />
					<div className="text-capitalize fs-5 fw-bold">{data?.name}</div>
					<div>Height: {data?.height}</div>
					<div>Weight: {data?.weight}</div>
					<div>
						Abilities:{' '}
						{data?.abilities?.map((ability: PokemonAbility, aIdx: number) => (
							<span key={aIdx} className="badge bg-secondary mx-1">
								{ability.ability.name}
							</span>
						))}
					</div>
				</>
			) : (
				<span>Click on the rows from the list to see details</span>
			)}
		</>
	);
};
