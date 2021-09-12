import React from "react";
import {render,screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import NavMenu from "../NavMenu";


it('should cheek link titles',  () =>{

    render(
        <BrowserRouter>
            <NavMenu/>
        </BrowserRouter>
    )

    const linkElement = screen.getByRole("heading"); //get by role finns många alternatiev om du kollar inom ""

    const linkElementOne = screen.getByText(/Lia Sökar/i);
    const linkElementTwo = screen.getByText(/Skapa Annons/i);
    const linkElementThree = screen.getByText(/Favoriter/i);
    const linkElementFour = screen.getByText(/Mina Sidor/i);

    expect(linkElementOne).toBeInTheDocument()
    expect(linkElementTwo).toBeInTheDocument()
    expect(linkElementThree).toBeInTheDocument()
    expect(linkElementFour).toBeInTheDocument()

});