import React, {useState} from "react";
import {Menu} from "../../menu/components/Menu"
import {Login} from "../../authentication/components/Login";

export const Home = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleMenuIsOpenChange = (isOpen) => {
        setMenuIsOpen(isOpen);
    };
console.log(menuIsOpen, "isOpen");
    return(
        <>
            <div>
                <Menu onIsOpenChange={handleMenuIsOpenChange}/>
                {menuIsOpen && <Login />}
            </div>
        </>
    )
}