import Clock from '../common/clock/Clock';

const Header = () => {
  return (
    <header className='bg-blue-700 text-white p-3 mb-5'>
      <h1 className='text-2xl text-center font-bold uppercase'>
        React 19 Playground
      </h1>
      <Clock position='right'/>
    </header>
  );
};

export default Header;
