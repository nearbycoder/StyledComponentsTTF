import styled from 'styled-components';

export const Center = styled.div`
  text-align: center;
  margin: 0 auto;
  ${props => props.largeSyntax && `
    pre {
      font-size: 2vw!important;
    }
  `}
`;
