const Head = ({ title, description }) => {
  document.title = `${title} | Dogs`;
  document
    .querySelector('meta[name=description]')
    .setAttribute('content', { description });

  return null;
};

export default Head;
