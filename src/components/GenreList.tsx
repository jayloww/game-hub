import useGernres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, isLoading, error } = useGernres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
