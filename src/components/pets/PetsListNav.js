import { Link, Navigate, useParams, useNavigate } from "react-router-dom";
import "./PetsListNav.css";

//pets page to display all pets, side nav has links to display each animal type
export const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
        <li>
          <Link
           to="/pets/cats">See All Cats ({cats.length})</Link>
        </li>
        <li>
          <Link to="/pets/dogs">See All Dogs ({dogs.length})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;
