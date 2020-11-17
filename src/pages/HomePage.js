import React, { useEffect, useState } from "react";

import Hero from "../components/Hero";

import { Spinner } from "../components/Spinner";

import Carousel from "../components/Carousel";

import Post from "../components/Post";

import axios from "axios";

// 1)
// 2)
// 3) Check and take away all console.logs
// 4) Final calm look, then send in
// 5) Send in

import styled from "styled-components";

const PostsContainer = styled.div`
     display: flex;
     flex-direction: row;

     @media (max-width: 786px) {
          flex-direction: column;
     }
`;

export default function HomePage() {
     const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState("");

     const [featuredBookings, setFeaturedBookings] = useState([]);
     const [carouselBookings, setCarouselBookings] = useState([]);

     const fetchData = async () => {
          /**
           * Would have preffered to access products.json through the given website but
           * CORS header 'Access-Control-Allow-Origin' was missing, I had to add products.json in /public
           *
           */

          try {
               const response = await axios.get("../products.json");

               const data = response.data;

               setFeaturedBookings(data.featured);
               setCarouselBookings(data.carousel.items);
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

               <Carousel bookings={[...carouselBookings, ...carouselBookings]}></Carousel>
          </div>
     );
}

/**
 *
 *
 *
 *
 */
