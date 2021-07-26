import React from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={'/joaovictormartin'}>
          joaovictormartin
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/joaovictormartin/clone-github'}>
          clone-github
        </Link>
      </Breadcrumb>

      <p>Projeto feito em React JS usando TypeScript</p>

      <Stats>
        <li>
          <StatsIcon />
          <b>8</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>4</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/Joaovictormartin/Clone-GitHub'}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;