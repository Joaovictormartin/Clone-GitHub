import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import ProfileDate from '../../components/ProfileDate';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';
import { ApiUser, ApiRepo } from '../../@types';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from './styles';

interface Data {
  user?: ApiUser;
  repos?: ApiRepo[];
  error?: string;
}

const Profile: React.FC = () => {

  const [data, setData] = useState<Data>();
  const { username = 'joaovictormartin' } = useParams()

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),              //Api do Github - informações do user
      fetch(`https://api.github.com/users/${username}/repos`)         //Api do Github - informações do repos
    ])
      .then(async (response) => {
        const [userReponse, repoReponse] = response;                  //Desconstrói o response

        if (userReponse.status === 404) {                             //Verifica o error 404, e mostra a mensagem de error
          setData({ error: 'User not found' })
        }

        const user = await userReponse.json();                         //Transformar o user em JSON
        const repos = await repoReponse.json();                        //Transformar o repos em JSON

        const shuffledRepos = repos.sort(() => 0.50 - Math.random());  //Sortear os repos
        const slicedRepos = shuffledRepos.slice(0, 6);                 //Pega somente 6 repos

        setData({ user, repos: slicedRepos })
      })
      .catch( error => {<h1>User not found</h1>})
  }, []);

  if (data?.error) {
    return <h1>{data.error}</h1>
  }

  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>
  }

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">{data.user?.public_repos}</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileDate
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            star={0}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            <h2>Random repos</h2>

            <div>
              {data.repos.map((item) => (
                <RepoCard
                  key={item.name}
                  username={item.owner.login}
                  reponame={item.name}
                  description={item.description}
                  language={item.language}
                  stars={item.stargazers_count}
                  forks={item.forks}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;