import Feature from "./components/feature/Feature";
import Meal from "./components/meal/Meal";
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
      <Meal />
    </div>
  );
}

export default App;
