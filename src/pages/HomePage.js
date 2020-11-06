import React, { useContext, useEffect, useState } from "react";

import { DispatchContext, StateContext } from "../context/StoreProvider";

import { Link } from "react-router-dom";

import Hero from "../components/Hero";

import { Spinner } from "../components/Spinner";

import Carousel from "../components/Carousel";

import HamburgerMenuNavbar from "../components/mobile/HamburgerMenuNavbar";

import Post from "../components/Post";

import axios from "axios";

// 1) Make Posts, Posts Container
// 2) Insert carousel and featured bookings into Hero, posts and carousel and make the buttons work
// 3) Make that weird little bookings image
// 4) Make image animate in for smoother transition
// 5) Get rid of the frame

import styled from "styled-components";

const PostsContainer = styled.div`
     display: flex;
     flex-direction: row;

     @media (max-width: 786px) {
          flex-direction: column;
     }
`;

export default function HomePage() {
     const dispatch = useContext(DispatchContext);
     const state = useContext(StateContext);

     const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState("");

     const [featuredBookings, setFeaturedBookings] = useState([]);
     const [carouselBookings, setCarouselBookings] = useState();

     const fetchData = async () => {
          /** Cross-Origin begäran blockerad: Same-Origin policyn tillåter inte läsningar av
           *  fjärresurs på https://webdev-exercise.netlify.app/data/products.json.
           *  (Orsak: CORS header 'Access-Control-Allow-Origin' saknas).
           */

          try {
               const response = await axios.get("../products.json");

               const data = response.data;

               setFeaturedBookings(data.featured);
               setCarouselBookings(data.carousel.items);

               console.log(data);
          } catch (error) {
               setError(error.message);
          } finally {
               setIsLoading(false);
          }
     };

     useEffect(() => {
          fetchData();
     }, []);

     if (isLoading) {
          return <Spinner></Spinner>;
     }

     if (error) {
          return <p>Something went wrong...{error}</p>;
     }

     console.log(carouselBookings);

     return (
          <div>
               <Hero
                    id={featuredBookings[0].id}
                    image={featuredBookings[0].media.large.url}
                    title={featuredBookings[0].title}
                    price={featuredBookings[0].price.value}
               ></Hero>

               <PostsContainer>
                    <Post
                         id={featuredBookings[1].id}
                         image={featuredBookings[1].media.large.url}
                         title={featuredBookings[1].title}
                         price={featuredBookings[1].price.value}
                         body={featuredBookings[1].body}
                    ></Post>

                    <Post
                         id={featuredBookings[2].id}
                         image={featuredBookings[2].media.large.url}
                         title={featuredBookings[2].title}
                         price={featuredBookings[2].price.value}
                         body={featuredBookings[2].body}
                    ></Post>
               </PostsContainer>

               <Carousel bookings={carouselBookings}></Carousel>
          </div>
     );
}

/**
 *
 *
 *
 *
 */
