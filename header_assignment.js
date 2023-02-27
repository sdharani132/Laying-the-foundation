import ReactDOM from "react-dom/client";
import logo from "./images/cricket.png";
import searchIcon from "./images/search-icon.png";
import userIcon from "./images/user-icon.png";
import React from "react";

const Logo = () => {
    return (
        <div class="logo">
            <img src={logo} alt="Logo not loaded" id="logo_img"></img>
        </div>
    )
}

const SearchBar = () => {
    return (
        <div class="search">
            <input type="text" class="searchTerm"></input>
            <button type="submit" class="searchButton">
                <img src={searchIcon} class="searchIcon"></img>
            </button>
        </div>
    )
}

const Icon = () => {
    return (
        <div class="icon">
            <img src={userIcon} class="usericon"></img>
        </div>
    )
}

const BindingComp = () => {
    return (
        <React.Fragment>
            <Logo />
            <SearchBar />
            <Icon />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BindingComp />);