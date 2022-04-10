import About from './contents/About';
import Home from './contents/Home';
import Settings from './contents/Settings';

interface ContentProps {
  navValue: Number;
}

function Content(props: ContentProps) {
  const { navValue } = props;

  let content;

  switch (navValue) {
    case 0:
      content = <Home />;
      break;
    case 1:
      content = <Settings />;
      break;
    case 2:
      content = <About />;
      break;
  }

  return <>{content}</>;
}

export default Content;
