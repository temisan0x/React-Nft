import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [punkListData, setpunkListData] = useState([])

  useEffect(() => {
    const getMyNfts = async()=> {
      const openseaData = await axios.get
      ('https://testnets-api.opensea.io/assets?asset_contract_address=0x5620516283720Bb2bA07Ec8A6E68f1bCF85e791e&order_direction=asc'
      ) 
      console.log(openseaData.data.assets);
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
    </div>
  );
}

export default App;
