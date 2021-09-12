import React from 'react';
import {render,screen} from "@testing-library/react";
import NavBar from "../NavBar";
import { BrowserRouter } from 'react-router-dom';

test("render link titles",()=>{
    render(
        <BrowserRouter>
        <NavBar/>
        </BrowserRouter>);

    const linkElementOne = screen.getByText(/Lia Sökar/i);
    const linkElementTwo = screen.getByText(/Skapa Annons/i);
    const linkElementThree = screen.getByText(/Favoriter/i);
    const linkElementFour = screen.getByText(/Mina Sidor/i);

    expect(linkElementOne).toBeInTheDocument()
    expect(linkElementTwo).toBeInTheDocument()
    expect(linkElementThree).toBeInTheDocument()
    expect(linkElementFour).toBeInTheDocument()


})

it('should test router path', function () {
    
}); 