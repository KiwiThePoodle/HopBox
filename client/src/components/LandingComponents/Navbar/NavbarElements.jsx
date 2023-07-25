import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? 'white' : 'white')};;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: background 0.5s ease-in-out;
  @media screen and (max-width: 784px) {
    transition: 0.8s all ease;
    height: 50px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 -60px;

  @media screen and (max-width: 784px) {
    height: auto;
  }
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 2vw;


`;

export const MenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.2rem;
    cursor: pointer;
    color: #EB65A0;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-left: 9vw;
  /* margin-right: -22px; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  
`;

export const NavLink = styled(LinkS)`
  color: #0b0a0a;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 4.3rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #EB65A0;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 3vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 20px;
  background: #EB65A0;
  white-space: nowrap;
  padding: 10px 15px;
  color: #ffffff;
  font-size: 1.2rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f7d7e060;
  }
`;
export const NavBtnLink2 = styled(LinkR)`
  border-radius: 20px;
  background: #ffffff00;
  white-space: nowrap;
  padding: 10px 15px;
  color: #000000;
  font-size: 1.2rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f7d7e060;
  }
`;

export const ImgLogo = styled.img`
  width: 120px;
  height: 25px;
  @media screen and (max-width: 900px) {
    width: 95px;
    height: 22px;
  }
`;