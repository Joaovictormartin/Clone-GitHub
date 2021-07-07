import styled, { css } from 'styled-components';
import { RiGroupLine, RiBuilding4Line, RiMapPin2Line, RiMailLine, RiLinksLine} from 'react-icons/ri';

export const Container = styled.div`
  
`;

export const Flex = styled.div``;

export const Avatar = styled.div``;

export const Row = styled.div``;

export const Column = styled.div``;

const iconCSS = css`
  width: 16px;
  height: 1;
`;

export const PeopleIcon = styled(RiGroupLine)`${iconCSS}`;

export const CompanyIcon = styled(RiBuilding4Line)`${iconCSS}`;

export const LocationIcon = styled(RiMapPin2Line)`${iconCSS}`;

export const EmailIcon = styled(RiMailLine)`${iconCSS}`;

export const BlogIcon = styled(RiLinksLine)`${iconCSS}`;
