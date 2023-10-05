import Feed from "./Feed";
import { useStoreState } from "easy-peasy";

const Home = ({ isLoading, fetchError }) => {
  const searchResults = useStoreState((state) => state.searchResults);

  return (
    <main className="Home">
      {isLoading && <p className="loading">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed />
        ) : (
          <p className="statusMsg">No posts to display.</p>
        ))}
    </main>
  );
};

export default Home;
