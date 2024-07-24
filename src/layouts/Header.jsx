import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Magnifier, Bars, Xmark } from '@gravity-ui/icons';
import { Button, TextInput } from '@gravity-ui/uikit';
import { useSearchContext } from '../context/context'
import useSearch from "../hooks/useSearch";
import logo_lipstick from '../assets/logo_lipstick.PNG';
import logo_icon from '../assets/logo_icon.PNG';
import logo from '../assets/logo.PNG';

export default function Header() {
    const { isSearchVisible, toggleSearchVisibility, handleSearchValue, searchValue } = useSearchContext()
    const { searchProducts } = useSearch()
    const [burgerOpen, setBurgerOpen] = useState()

    return (
        <>
            <div className="container-wide">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <NavLink to={"/"} >
                            <picture>
                                <source media="(max-width: 576px)" srcSet={logo_lipstick} alt="logo" />
                                <source media="(max-width: 992px)" srcSet={logo_icon} alt="logo" />
                                <img src={logo} alt="logo" />
                            </picture>
                        </NavLink>
                    </div>
                    <div className={`header__nav ${burgerOpen ? "active" : ""}`}>
                        <div className="header__links">
                            <NavLink to={"/"} className="header__link">
                                Home
                            </NavLink>
                            <NavLink to={"/about"} className="header__link">
                                About
                            </NavLink>
                            {
                                !isSearchVisible && (
                                    <>
                                        <NavLink to={"/catalog"} className="header__link">
                                            Catalog
                                        </NavLink>
                                        <NavLink to={"/brands"} className="header__link">
                                            Brands
                                        </NavLink>
                                    </>
                                )
                            }
                            <NavLink to={"/contact"} className="header__link">
                                Contact
                            </NavLink>
                            <div className="header__nav-close" onClick={() => setBurgerOpen(!burgerOpen)}>
                                <Xmark />
                            </div>
                        </div>
                    </div>
                    {
                        isSearchVisible ? <div className="header search">
                            <TextInput
                                className="validate"
                                placeholder="search by name"
                                type="search"
                                value={searchValue}
                                onChange={(e) => handleSearchValue(e.target.value)}
                            />
                            <Button className="header search__button" onClick={searchProducts} >Go</Button>
                        </div> : null
                    }
                    <div className="header__icons">
                        {isSearchVisible ?
                            (<div className="header search__close" onClick={toggleSearchVisibility}><Xmark /></div>)
                            :
                            (<div className="header search__open" onClick={toggleSearchVisibility} ><Magnifier size='xl' /></div>)}
                        <div className="header__burger" onClick={() => setBurgerOpen(!burgerOpen)}> <Bars size='xl' /></div>
                    </div>
                    {burgerOpen && <div className="header__overlay" onClick={() => setBurgerOpen(false)}></div>}
                </div>
            </div >
        </>
    );
}