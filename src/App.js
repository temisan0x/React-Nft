import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';


function App() {
  return (
    <div className="app">
        <Header/>
        <CollectionCard
          id={0}
          name={0}
          traits={[{'value':7}]}
          image="https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu"
        eth="https://cwstatic.nyc3.digitaloceanspaces.com/401/WETH-Token-Logotype.jpg?v=1584532520"/>
    </div>
  );
}

export default App;
