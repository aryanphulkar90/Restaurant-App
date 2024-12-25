import React from "react";
import {screen, render, act, fireEvent} from "@testing-library/react"
import Body from "../Body"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/mockResListData.json"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should Search final list with subway as input", async()=>{

    await act(async () => 
        render
        (
          <BrowserRouter>
            <Body/>
          </BrowserRouter>
        )
    )
    
   const cardsBeforeSearch = screen.getAllByTestId("resCard")

   expect(cardsBeforeSearch.length).toBe(20)
   
    const searchBtn = screen.getByRole("button", {name : "Search"})

    const searchInput = screen.getByTestId("searchInput")
    
    fireEvent.change(searchInput, {target : {value : "subway"}})
    
    fireEvent.click(searchBtn)

    const cards = screen.getAllByTestId("resCard")

    expect(cards.length).toBe(1)
    
})

it("Should show top rated restaurants", async()=>{

    await act(async()=>{
            render(
                <BrowserRouter>
                   <Body/>
                </BrowserRouter>
            )
        }
    )

    const cardsBeforeSearch = screen.getAllByTestId("resCard")

   expect(cardsBeforeSearch.length).toBe(20)
   
    const topRatedBtn = screen.getByRole("button", {name : "Top Rated Restaurants"})
        
    fireEvent.click(topRatedBtn)

    const cards = screen.getAllByTestId("resCard")

    expect(cards.length).toBe(3)

})