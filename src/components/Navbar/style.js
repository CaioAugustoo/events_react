import styled from 'styled-components';

export const NavbarStyled = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 50;
  height: 4.375rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03);
  background: var(--first-orange);
  padding: 1.25rem 0rem !important;
  
  p {
    font-size: 1rem;
    color: var(--primary);
  }

  nav {
    display: flex;
    padding: 0rem 1.25rem;
    align-items: center;
    justify-content: space-between;

    a {
      margin: 0rem 0.9375rem;

      &:first-child {
        margin: 0rem 0.9375rem 0rem 0rem;

        @media (min-width: 300px) and (max-width: 500px) {
          display: none;
        }
      }
    }
  }

  ul {
    display: flex;

    @media (min-width: 300px) and (max-width: 500px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }
`;

export const MobileMenu = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  height: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03);
  background: var(--first-orange);
  padding: 1.25rem 0rem !important;
  transition: transform .4s;
  display: none;

  @media (min-width: 300px) and (max-width: 500px) {
    display: block;
  }
`;

export const TogglerMenu = styled.div`
  cursor: pointer;
  display: block;
  transition: all 0.6s ease;
  position: relative;
  top: 8px;
  z-index: 100;

  .d1 {
    content: "";
    display: block;
    background-color: var(--primary);
    width: 1.25rem;
    height: 0.1875rem;
    border-radius: 6.25rem;
    position: relative;
    top: ${({menuMobile}) => (menuMobile ? '0.1875rem' : '-0.125rem')};
    cursor: pointer;
    transition: all 0.4s ease;
    transform: ${({menuMobile}) => (menuMobile ? 'rotate(45deg)' : 'rotate(0deg)')};
  }
  .d2 {
    content: "";
    display: block;
    background-color: var(--primary);
    width: 1.25rem;
    height: 3px;
    border-radius: 6.25rem;
    position: relative;
    top: ${({menuMobile}) => (menuMobile ? '0rem' : '0.4375rem')};
    cursor: pointer;
    transition: all 0.4s ease;
    transform: ${({menuMobile}) => (menuMobile ? 'rotate(135deg)' : 'rotate(0deg)')};
  }
  .d3 {
    content: "";
    display: block;
    background-color: var(--primary);
    width: 1.25rem;
    height: 3px;
    border-radius: 6.25rem;
    position: relative;
    top: ${({menuMobile}) => (menuMobile ? '-0.1875rem' : '-0.125rem')};
    left: ${({menuMobile}) => (menuMobile ? '-0.3125rem' : '0rem')};
    opacity: ${({menuMobile}) => (menuMobile ? '0' : '1')};
    cursor: pointer;
    transition: all 0.4s ease;
    transform: ${({menuMobile}) => (menuMobile ? 'rotate(-45deg)' : 'rotate(0deg)')};
  }
`;

export const MenuWrap = styled.div`
  display: none;
  justify-content: space-between;
  padding: 0rem 0.9375rem;

  @media (min-width: 300px) and (max-width: 500px) {
    display: flex;
  }
`;