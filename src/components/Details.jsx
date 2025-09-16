import React from "react";
import { Card } from "flowbite-react";
import {  useNavigate} from 'react-router-dom'


const Details = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex container mx-auto">
      <div>
        <span style={{ 'fontSize' : '20px'}} onClick={() => navigate('/')}>Back</span>
      </div>
      <div className="mx-auto">
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://www.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-584655766.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Details;
