import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Data from "./Data";

export default function App() {
    const card = Data.map(x => {
        return(
            <Card 
                key={x.id}
                x={x}
        />
        )
    })
    
   return(
    <div>
        <Navbar />
        <Hero />
        <section className="cards-list">{card}</section>
    </div>
   ) 
}