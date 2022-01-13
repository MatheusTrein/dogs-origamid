import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@700&display=swap');

* {
  box-sizing: border-box;
}

body {
  padding-top: 4rem;
  margin: 0px;
  --color-first: #333;
  --type-first: Helvetica, Arial, sans-serif;
  --type-second: 'Spectral', georgia;
  color: var(--color-first);
  font-family: var(--type-first);

h1, h2, h3, h4, h5, h6 {
  margin: 0px;
}

ul, li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

img {
  display: block;
  max-width: 100%;
}

input, button {
  display: block;
  font-size: 1rem;
  font-family: var(--type-first);
  color: var(--color-first);
}

a {
  text-decoration: none;
  color: var(--color-first);
}

.animeLeft {
  opacity: 0;
  transform: translateX(-20px);
  animation: animation 0.2s forwards;
}

.animeLeftFeedPhoto {
  opacity: 0;
  transform: translateX(-5rem);
  animation: animation 1s forwards;
}

@keyframes animation {
  to {
    opacity: 1;
    transform: initial;
  }
}

.container {
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;

}

.title {
  font-family: var(--type-second);
  font-size: 3rem;
  position: relative;
  margin: 1rem 0;
  z-index: 1;

  &:after {
    display: block;
    content: '';
    position: absolute;
    background-color: #fb1;
    width: 1.5rem;
    height: 1.5rem;
    bottom: 5px;
    left: -3px;
    z-index: -1;
    border-radius: 0.2rem;
  }
}

.buttonForm {
  display: inline-block;
  text-align: center;
  font-size: 1rem;
  color: var(--type-first);
  padding: 0.8rem 1.2rem;
  background: #fb1;
  border: none;
  color: #764701;
  border-radius: 0.4rem;
  min-width: 8rem;
  cursor: pointer;
  box-sizing: border-box;
  transition: 0.2s;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
}

.App {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.AppBody {
  min-height: calc(100vh - 13rem);
  flex: 1;
}
`;
