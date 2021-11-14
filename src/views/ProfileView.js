import { useParams } from 'react-router';
/* import { axios } from '../services/apiService'; */

import { useState, useEffect, Fragment } from 'react';
import shortid from 'shortid';

/* export const uniqueId = 'kikakiim'; */

export default function ProfileView() {
  const { uniqueId } = useParams();
  /* console.log(uniqueId); */

  const [userFeed, setUserFeed] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  const axios = require('axios').default;

  const feed = {
    method: 'GET',
    url: `https://tiktok33.p.rapidapi.com/user/feed/${uniqueId}`,
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': '98c48d70edmsh2b6af9661af19a5p11b7f7jsnbe8317f49551',
    },
  };

  useEffect(() => {
    axios
      .request(feed)
      .then(function (response) {
        const feedsData = response.data;
        setUserFeed(feedsData);
      })
      .catch(function (error) {
        console.error(error);
      });
    // eslint-disable-next-line
  }, [setUserFeed]);
  /* console.log(userFeed); */

  const info = {
    method: 'GET',
    url: `https://tiktok33.p.rapidapi.com/user/info/${uniqueId}`,
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': '98c48d70edmsh2b6af9661af19a5p11b7f7jsnbe8317f49551',
    },
  };
  useEffect(() => {
    axios
      .request(info)
      .then(function (response) {
        const infoData = response.data;
        setUserInfo(infoData);
      })
      .catch(function (error) {
        console.error(error);
      });
    // eslint-disable-next-line
  }, [setUserInfo]);
  /* console.log(userInfo); */

  return (
    <div>
      {userInfo.user && (
        <Fragment key={shortid.generate()}>
          <img
            key={shortid.generate()}
            width="150px"
            src={userInfo.user.avatarThumb}
            alt={userInfo.user.nickname}
          />
          <h2>{userInfo.user.nickname}</h2>
          <p>{userInfo.user.signature}</p>
          <p>
            <b>{userInfo.stats.followerCount}</b> followers
          </p>
          <p>
            <b>{userInfo.stats.followingCount}</b> followings
          </p>
          <p>
            <b>{userInfo.stats.videoCount}</b> videos
          </p>
          <p>
            <b>{userInfo.stats.heart}</b> hearts
          </p>
          <h3>Other posts created by {userInfo.user.nickname}</h3>
        </Fragment>
      )}
      {userFeed.length ? (
        userFeed.map(user => (
          <Fragment key={shortid.generate()}>
            <p>
              <b>{user.stats.playCount}</b> views
            </p>
            <img
              key={shortid.generate()}
              width="400px"
              src={user.video.dynamicCover}
              alt={user.desc}
            />

            <p>{user.desc}</p>
          </Fragment>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
