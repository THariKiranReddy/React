import styled from "styled-components"
const StyledNav = styled.nav`
 .nav-center{
width:auto;
display:flex;
flex-direction:row;
justify-content: space-between;

}
.logo{
 font-size: 3rem;
    color: green;
    font-weight: 700;
    letter-spacing: 2px;
}
.nav-links{
width:300px;
display: flex;
justify-content: space-between;
}
 .nav-link {
    color: grey;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    transition: transition;
    letter-spacing: 2px;
  }
.active{
color : green;
}

  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;
export default StyledNav