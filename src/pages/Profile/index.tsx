import React from 'react';

import ProfileDate from '../../components/ProfileDate';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

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

const Profile: React.FC = () => {

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">21</span>
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
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

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