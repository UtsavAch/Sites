import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Taj Mahal",
    discription: "One of the wonders of the world",
    imageUrl:
      "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
    address: "Agra, Uttar Pradesh 282001, India",
    location: {
      lat: 27.1751,
      lng: 78.0421,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Taj Mahal v2",
    discription: "One of... the wonders of the world",
    imageUrl:
      "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
    address: "Agra, Uttar Pradesh 282001, India",
    location: {
      lat: 27.1751,
      lng: 78.0421,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
