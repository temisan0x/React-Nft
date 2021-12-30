import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Punklist from './components/Punklist';

function App() {
  const [punkListData, setpunkListData] = useState([])

  useEffect(() => {
    const getMyNfts = async()=> {
      const openseaData = await axios.get
      ('https://testnets-api.opensea.io/assets?asset_contract_address=0xb4ad07f6E4c0d0d7dE2e7F1d085Fcd76D6f2ee0a&order_direction=asc'
      ) 
      console.log(openseaData.data.assets);
      setpunkListData(openseaData.data.assets)
    }
    return getMyNfts();
  }, [])

  return (
    <div className="app">
        <Header/>
        <CollectionCard
          id={0}
          name={'temisan'}
          traits={[{'value':7}]}
          image="https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu"/>
        <Punklist punkListData={punkListData}/>
    </div>
  );
}

export default App;
