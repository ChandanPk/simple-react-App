import SearchField from "../SearchField/SearchField";

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="nav">
            <span style={{ fontSize: "3rem" }}>Lorem ipsum</span>
            <div className="anchors">
                <div id="wrapper"><li href="#">Home</li>
                    <li href="#">footer</li>
                    <li href="#">contacts</li>
                </div>
            </div>
            </div>
            <div className="context">
                <SearchField />
           </div>
           </div>
    );
}

export default NavBar;