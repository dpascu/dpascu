import styled from 'styled-components';

const UnderscoreStyle = styled.span`
  animation: blinker 0.5s linear infinite;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

export default UnderscoreStyle;
