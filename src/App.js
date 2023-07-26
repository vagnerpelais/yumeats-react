import Feature from "./components/feature/Feature";
import QuickDelivery from "./components/quickdelivery/QuickDelivery";
import TopNav from "./components/topnav/TopNav";
import TopPicks from "./components/toppicks/TopPicks";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Feature />
      <QuickDelivery />
      <TopPicks />
    </div>
  );
}

export default App;
