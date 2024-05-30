const HamburguerIcon = ({ className }) => {
  return (
    <svg
      className={` ${className}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      id='hamburger-menu'
      width={'1em'}
      height={'1em'}
      fill='currentColor'
    >
      <path d='M5 7h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm0 6h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm0 6h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1z'></path>
    </svg>
  );
};

export default HamburguerIcon;
