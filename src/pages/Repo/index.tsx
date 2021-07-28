import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { 
  Container, 
  Breadcrumb, 
  RepoIcon, 
  Stats, 
  StatsIcon, 
  ForkIcon, 
  LinkButton, 
  GithubIcon 
} from './styles';

const Repo: React.FC = () => {

  const { username = 'joaovictormartin', reponame="/" } = useParams()

  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={`/${username}`}>
          {username}
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={`/${username}/${reponame}`}>
          {reponame}
        </Link>
      </Breadcrumb>

      <p>{}</p>

      <Stats>
        <li>
          <StatsIcon />
          <b>{}</b>
          <span>{}</span>
        </li>
        <li>
          <ForkIcon />
          <b>{}</b>
          <span>{}</span>
        </li>
      </Stats>

      <LinkButton href={`https://github.com/${username}/${reponame}`}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;