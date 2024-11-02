/**
 * Header
 *  - logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - ReastaurantCard
 *      - Img
 *      - Name of Res, Star rating, delivery Title
 * Footer
 *  - Copyrights
 *  - Links
 *  - Address
 *  - Contact
 *
 */
import logo from "./assets/logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} />
      </div>
      <div className="nav-items">
        <div>Home</div>
        <div>About us</div>
        <div>Contact us</div>
        <div>Cart</div>
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const App = () => {
  return (
    <>
      <Applayout />
    </>
  );
};
export default App;
