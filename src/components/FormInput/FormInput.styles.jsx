import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';

const shrinkLabel = () => css`
  top: -14px;
  font-size: 12px;
`;

export const InputStyles = styled.div`
  --main-color: black;
  --sub-color: grey;

  position: relative;
  margin: 45px 0;

  input {
    background: none;
    background-color: white;
    color: var(--sub-color);
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid var(--sub-color);
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ label {
      ${shrinkLabel}
    }

    &[type='password'] {
      letter-spacing: 0.3em;
    }
  }

  label {
    color: var(--sub-color);
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    ${({ shrink }) => shrink && shrinkLabel}
  }
`;
