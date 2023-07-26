import Categories from "./components/categories/Categories";
import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";
import Meal from "./components/meal/Meal";
import Newsletter from "./components/newsletter/Newsletter";
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
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
