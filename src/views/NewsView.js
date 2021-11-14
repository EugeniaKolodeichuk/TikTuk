import { useState, useEffect, Fragment } from 'react';
import shortid from 'shortid';
import { Link } from 'react-router-dom';
import defaultImage from '../default.png';

export default function NewsView() {
  const [trendingFeed, setTrendingFeed] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = e => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  const axios = require('axios').default;

  const trends = {
    method: 'GET',
    url: `https://tiktok33.p.rapidapi.com/trending/feed/?limit=5&page=${currentPage}`,
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': '98c48d70edmsh2b6af9661af19a5p11b7f7jsnbe8317f49551',
    },
  };

  useEffect(() => {
    if (fetching) {
      axios
        .request(trends)
        .then(function (response) {
          const data = response.data;
          setTrendingFeed([...trendingFeed, ...data]);
          setCurrentPage(prevState => prevState + 1);
        })
        .catch(function (error) {
          console.error(error);
        })
        .finally(() => setFetching(false));
    }
    // eslint-disable-next-line
  }, [fetching]);

  return (
    <div>
      {trendingFeed &&
        trendingFeed.map(user => (
          <Fragment key={shortid.generate()}>
            <video
              width="200"
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
                width="150px"
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
