import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContianer from "./GameCardContianer";

function GameGrid() {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContianer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContianer>
          ))}
        {data.map((game) => (
          <GameCardContianer>
            <GameCard key={game.id} game={game} />
          </GameCardContianer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
