import Feature from "./components/feature/Feature";
import QuickDelivery from "./components/quickdelivery/QuickDelivery";
import TopNav from "./components/topnav/TopNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Feature />
      <QuickDelivery />
    </div>
  );
}

export default App;
