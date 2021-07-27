import React from "react";
import styled from "styled-components";
import { colors } from "../utils/StylingVariables";

const HeaderTop = () => {
  return (
    <StyledNav>
      <div className='container'>
        <ul className='main-left-nav'>
          <li className='nav-link'>Login</li>
          <li className='nav-link'>Sign Up</li>
          <li className='nav-link'>Order History</li>
          <li className='nav-link'>Return Form</li>
        </ul>
        <ul className='main-right-nav'>
          <li className='nav-link'>Frequently Asked Questions</li>
          <li className='nav-link'>Contact</li>
        </ul>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.secondaryColorDark};
  color: ${colors.lightColor};

  div.container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul.main-left-nav,
    ul.main-right-nav {
      display: flex;

      li.nav-link {
        cursor: pointer;
        &:hover {
          color: ${colors.secondaryColorLight};
        }
      }
    }
    ul.main-left-nav {
      width: 50%;

      li.nav-link {
        padding-right: 2rem;
      }
    }
    ul.main-right-nav {
      width: 50%;
      justify-content: flex-end;

      li.nav-link {
        padding-left: 2rem;
        justify-self: end;
      }
    }
  }
`;

export default HeaderTop;
