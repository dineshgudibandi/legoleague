import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import LogoIcon from 'assets/shared/logo.svg'
import queries from 'styles/breakpoints'

const StyledLink = styled(Link)`
  line-height: 1;
`

const Wrapper = styled.div`
  width: 20.0625rem;
  font-size: 24px;
  font-style: bold;
  text-decoration:none;
  color: #000;
  svg {
    width: 100%;
    height: auto;
  }

  @media ${queries.laptopUp} {
    width: 20.625rem;
  }
`

const Logo = (): JSX.Element => {
  return (
    <StyledLink to="/">
      <Wrapper>
        First Lego League
      </Wrapper>
    </StyledLink>
  )
}

export default Logo
