import "./App.css";
import { Album, Photo } from "./components";
import React from "react";
import axios from "axios";
import { MoonLoader } from "react-spinners";

const DUMMY_DATA = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
];
const BASE_URL = import.meta.env.VITE_BASE_URL + "/albums";

function App() {
  // you can make use of the following to get the base url

  const [albums, setAlbums] = React.useState([]);
  const [photos, setPhotos] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    async function getAlbums() {
      try {
        const response = await axios.get(BASE_URL);
        setAlbums(response.data);
      } catch (error) {
        console.error("Fetch error: ", error);
      }
    }
    getAlbums();
  }, []);

  // console.log(albums)

  async function getPhotos(id) {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${id + 98}/photos`
      );
      setPhotos(response.data);
      response.data.length === 0 ? setError("No photos") : setError("")
    } catch (error) {
      setError("Fetch failed");
      console.error("Fetch error: ", error);
    } finally {
      setLoading(false);
    }
  }

  
  
  console.log(error)

  return (
    <div className="container">
      <div className="flex gap-4">
        <div>
          <h1 className="pb-4 border-b-2 mb-4 sticky">Albums</h1>

          <div className="flex flex-col gap-2 h-screen overflow-y-auto pr-2">
            {/* Get Album data from https://jsonplaceholder.typicode.com/albums */}
            {albums.map((album) => (
              <Album
                key={album.id}
                id={album.id}
                title={album.title}
                onClick={() => getPhotos(album.id)}
              />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h1 className="pb-4 border-b-2 mb-4">Photos</h1>

          <div className="grid grid-cols-4 gap-4">
            {/* Only show this initially */}
            {photos.length === 0 && error === "" &&
              <p className="col-span-4 text-gray-500">
                "Click on an album to start viewing photos."
              </p>
            }
            {error !== "" &&
              <p className="col-span-4 text-gray-500">{error}</p>
            }

            {photos.map((photo, index) => (
              <Photo {...photo} key={index} />
            ))}
            {loading ? <MoonLoader color="#36d7b7" size={60} /> : null}

            {!albums.length && (
              <p className="col-span-4">No photos found in this album</p>
            )}
          </div>
        </div>
      </div>
      {/* <div className="flex">
        <img src="/vite.svg" className="v__logo" alt="Vite logo" />
        <img src={reactLogo} className="v__logo react" alt="React logo" />
      </div> */}
    </div>
  );
}

export default App;
