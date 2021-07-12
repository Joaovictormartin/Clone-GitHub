import React from 'react';

import ProfileDate from '../../components/ProfileDate';
import RepoCard from '../../components/RepoCard';

import { 
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
} from './styles';

const Profile: React.FC = () => {
  return(
    <Container>
      <Main>
        <LeftSide>
          <ProfileDate 
            username={'joaovictormartin'}
            name={'João Victor Martins'}
            avatarUrl={'https://avatars.githubusercontent.com/u/69825217?v=4'}
            followers={5}
            following={5}
            company={'Prefeitura de BM'}
            location={'Barra Mansa, Rio de Janeiro'}
            email={'joao.teixeira@aedb.br'}
            blog={'linkedin.com/in/joão-victor-martins-teixeira'}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard 
                key={n}
                username={'joaovictormartin'}
                reponame={'clone-github'}
                description={'Projeto feito em React JS usando TypeScript'}
                language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                stars={8}
                forks={4}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;