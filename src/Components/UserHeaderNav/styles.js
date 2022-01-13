import styled from 'styled-components';

export const MobileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  height: 40px;
  width: 40px;
  border-radius: 0.2rem;
  border: 1px solid transparent;
  transition: 0.1s;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    border-radius: 15%;
    box-shadow: 0 8px currentColor, 0 -8px 0 currentColor;
    transition: 0.2s;
  }

  &:hover,
  &.active {
    border-color: #fb1;
    box-shadow: 0 0 0 3px #fea;
    background-color: white;
  }

  &.active:after {
    color: #fb1;
    transform: rotate(90deg);
    width: 4px;
    height: 4px;
    border-radius: 50%;
  }
`;

export const Nav = styled.nav`
  &.navMobileActive {
    position: absolute;
    top: 84px;
    right: 15px;
    padding: 0 1rem;
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;

    a,
    button {
      border: none;
      background-color: white;
      display: flex;
      align-items: center;
      width: 100%;
      border-bottom: 1px solid #eee;
      padding: 0.5rem 0;
    }

    button {
      border-bottom: none;
    }

    a > svg,
    button > svg {
      margin-right: 0.5rem;
    }

    a:hover,
    a:focus,
    button:hover,
    button:focus {
      svg > * {
        fill: #fb1;
      }
    }
  }

  &.navMobileDisabled {
    display: none;
  }

  &.navWeb {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 0.5rem;

    a,
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #eee;
      height: 40px;
      width: 40px;
      border-radius: 0.2rem;
      border: 1px solid transparent;
      transition: 0.1s;
    }

    a:hover,
    button:hover,
    a:focus,
    button:focus,
    a.active {
      border-color: #fb1;
      box-shadow: 0 0 0 3px #fea;
      background-color: white;
    }

    a.active {
      svg > * {
        fill: #fb1;
      }
    }
  }
`;
