import React from 'react';

import { Container } from './styles';

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  start: number;
  forks: number;
}

const RepoCard: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  start,
  forks,
}) => {
  return(
    <Container>
      
    </Container>
  );
}

export default RepoCard;