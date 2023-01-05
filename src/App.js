import "./App.css";
import { BenefitSection } from "./component/BenefitSection";
import { Header } from "./component/Header";
import { UpgradeComponent } from "./component/UpgradeComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <UpgradeComponent />
      <BenefitSection />
    </div>
  );
}

export default App;
