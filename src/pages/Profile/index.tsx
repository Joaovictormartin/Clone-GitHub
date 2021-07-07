import React from 'react';

import ProfileDate from '../../components/ProfileDate';

import { 
  Container,
  Main,
  LeftSide,
  RightSide,
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
            company={''}
            location={'Barra Mansa, Rio de Janeiro'}
            email={'joao.teixeira@aedb.br'}
            blog={''}
          />
        </LeftSide>

        <RightSide>

        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;