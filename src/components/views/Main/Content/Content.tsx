import { ReservoirMetaData } from '../../../../interfaces';
import About from './contents/About';
import Home from './contents/Home';
import Settings from './contents/Settings';

interface ContentProps {
  navValue: number;
  sortedReservoirMetaDataList: ReservoirMetaData[];
}

function Content(props: ContentProps) {
  const { navValue, sortedReservoirMetaDataList } = props;

  let content;

  switch (navValue) {
    case 0:
      content = (
        <Home sortedReservoirMetaDataList={sortedReservoirMetaDataList} />
      );
      break;
    case 1:
      content = (
        <Settings sortedReservoirMetaDataList={sortedReservoirMetaDataList} />
      );
      break;
    case 2:
      content = <About />;
      break;
  }

  return <>{content}</>;
}

export default Content;
