import { useState, useEffect, Fragment } from 'react';
import shortid from 'shortid';
import { Link /* useRouteMatch */ } from 'react-router-dom';
/* import { trends, axios } from '../services/apiService'; */
/* import * as infoAPI from '../services/apiService'; */
/* import axios from 'axios';
import { Link } from 'react-router-dom';
import userEvent from '@testing-library/user-event'; */
import defaultImage from '../default.png';

export default function NewsView() {
  /* const { url } = useRouteMatch(); */
  const [trendingFeed, setTrendingFeed] = useState([]);

  const axios = require('axios').default;

  const trends = {
    method: 'GET',
    url: 'https://tiktok33.p.rapidapi.com/trending/feed',
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': '98c48d70edmsh2b6af9661af19a5p11b7f7jsnbe8317f49551',
    },
  };

  /* const axios = require('axios').default;

  const options = {
    method: 'GET',
    url: 'https://tiktok33.p.rapidapi.com/trending/feed',
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': '98c48d70edmsh2b6af9661af19a5p11b7f7jsnbe8317f49551',
    },
  }; */

  useEffect(() => {
    axios
      .request(trends)
      .then(function (response) {
        const data = response.data;
        setTrendingFeed(data);
      })
      .catch(function (error) {
        console.error(error);
      });
    // eslint-disable-next-line
  }, [setTrendingFeed]);

  return (
    <div>
      {trendingFeed &&
        trendingFeed.map(user => (
          <Fragment key={shortid.generate()}>
            <video
              width="400"
              controls="controls"
              /* poster="video/duel.jpg" */
            >
              <source src={user.videoUrl} type="video/mp4;" />
            </video>
            <p key={shortid.generate()}>{user.text}</p>
            {user.authorMeta.avatar ? (
              <img
                key={shortid.generate()}
                width="150px"
                src={user.authorMeta.avatar}
                alt={user.authorMeta.nickName}
              />
            ) : (
              <img
                width="400px"
                src={defaultImage}
                alt={user.authorMeta.nickName}
              />
            )}
            <p key={shortid.generate()}>
              <Link to={`/profile/${user.authorMeta.name}`}>
                <b>{user.authorMeta.nickName}</b>
              </Link>
            </p>
            {user.hashtags &&
              user.hashtags.map(tag => (
                <p key={shortid.generate()}>#{tag.name}</p>
              ))}
            <p>
              Comments: <b>{user.commentCount}</b>
            </p>
            <p>
              Likes: <b>{user.diggCount}</b>
            </p>
          </Fragment>
        ))}
    </div>
  );
}
