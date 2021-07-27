import React from "react";
import styled from "styled-components";
import { colors } from "../utils/StylingVariables";

const HeaderMiddle = () => {
  return (
    <StyledHeaderMiddle>
      <div className='container'>
        <form className='search-form'>
          <button type='submit'>
            <i className='las la-search la-2x'></i>
          </button>
          <input type='text' placeholder='Search for products' />
        </form>
        <div className='logo'>
          <h1 className='site-title'>Erevan</h1>
        </div>
        <div className='cart-icon'>
          <p>Cart icon</p>
        </div>
      </div>
    </StyledHeaderMiddle>
  );
};

const StyledHeaderMiddle = styled.div`
  margin: 1.5rem 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    form.search-form,
    div.logo,
    div.cart-icon {
      width: 100%;
    }

    form.search-form {
      display: flex;
      &:hover {
        input {
          &::-webkit-input-placeholder {
            color: #333;
          }
          &::-moz-placeholder {
            color: #333;
          }
          &:-ms-input-placeholder {
            color: #333;
          }
        }
        input,
        button {
          background: ${colors.lightColor};
        }
      }

      button,
      input {
        transition: all 1s ease;

        border: none;
        outline: none;

        background: #fff;
        color: #333;

        padding: 0.5rem 0;
      }

      button {
        padding-right: 0.5rem;
        cursor: pointer;
        padding-left: 0.5rem;
      }

      input {
        font-size: 1.1rem;
        &::-webkit-input-placeholder {
          color: transparent;
        }
        &::-moz-placeholder {
          color: transparent;
        }
        &:-ms-input-placeholder {
          color: transparent;
        }
      }
    }

    div.logo {
      text-align: center;
    }

    div.cart-icon {
      text-align: end;
    }
  }
`;

export default HeaderMiddle;
