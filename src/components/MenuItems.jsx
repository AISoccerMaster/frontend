import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/quickstart">
        <NavLink to="/quickstart">🚀 My Data</NavLink>
      </Menu.Item>
      {/* <Menu.Item key="/wallet">
        <NavLink to="/wallet">👛 Wallet</NavLink>
      </Menu.Item>
      <Menu.Item key="/1inch">
        <NavLink to="/1inch">🏦 Dex</NavLink>
      </Menu.Item>
      <Menu.Item key="onramp">
        <NavLink to="/onramp">💵 Fiat</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20balance">
        <NavLink to="/erc20balance">💰 Balances</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20transfers">
        <NavLink to="/erc20transfers">💸 Transfers</NavLink>
      </Menu.Item> */}
      <Menu.Item key="/programs">
        <NavLink to="/programNFT">🖼 Programs</NavLink>
      </Menu.Item>
      <Menu.Item key="/robots">
        <NavLink to="/robotNFT">🖼 Robots</NavLink>
      </Menu.Item>
      <Menu.Item key="/competitions">
        <NavLink to="/robocup">🖼 Robocup</NavLink>
      </Menu.Item>
      {/* <Menu.Item key="/contract">
        <NavLink to="/contract">📄 Contract</NavLink>
      </Menu.Item> */}
    </Menu>
  );
}

export default MenuItems;
