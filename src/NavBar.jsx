export default function NavBar({ cartCount }) {
  return (
    <nav className="navbar px-4" style={{ backgroundColor: "#131921" }}>
      <span className="navbar-brand text-white fw-bold fs-3">CampusCart</span>
      <span className="text-white">Cart Items: {cartCount}</span>
    </nav>
  );
}