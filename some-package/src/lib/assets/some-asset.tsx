import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SomePackageProps {}

const StyledSomePackage = styled.div`
  color: pink;
`;

export function SomePackage(props: SomePackageProps) {
  return (
    <StyledSomePackage>
      <h1>Welcome to SomePackage!</h1>
    </StyledSomePackage>
  );
}

export default SomePackage;
