import { ReservoirMetaData } from '../../../../interfaces';
import About from './contents/About';
import Error from './contents/Error';
import Home from './contents/Home';
import Settings from './contents/Settings';

interface ContentProps {
  navValue: number;
  setNavValue: React.Dispatch<React.SetStateAction<number>>;
  sortedReservoirMetaDataList: ReservoirMetaData[];
  isError: boolean;
}

function Content(props: ContentProps) {
  const { navValue, sortedReservoirMetaDataList, setNavValue, isError } = props;

  let content: JSX.Element | undefined;

  switch (navValue) {
    case 0:
      content = (
        <Home sortedReservoirMetaDataList={sortedReservoirMetaDataList} setNavValue={setNavValue} />
      );
      break;
    case 1:
      content = <Settings sortedReservoirMetaDataList={sortedReservoirMetaDataList} />;
      break;
    case 2:
      content = <About />;
      break;
  }

  return <>{navValue !== 2 && isError ? <Error /> : content}</>;
}

export default Content;
