import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage-info">
        <p>62 Stays - 25 August to 29 August - 2 Guest</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Room and Beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in the center of Berlin"
        title="Beautiful and spacious Victorian house"
        description="1 Guest · 1 Bedroom · 1 Bed · 1 Shared Bathroom · Wifi · Kitchen · Free Parking · Washing Machine"
        star={4.9}
        price="$60 / night"
        total="$300 total"
      />

      <SearchResult
        img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
        location="Brand new studio downtown Dortmund"
        title="Luxury studio apartment"
        description="2 Guest · 1 Bedroom · 1 Bed · 1 Bathroom · Wifi · Kitchen"
        star={4.3}
        price="$100 / night"
        total="$500 total"
      />

      <SearchResult
        img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
        location="Countryside house located just outside of Munich"
        title="Giant 4 bedroom house"
        description="4 Guest · 4 Bedroom · 4 Beds · 2 Bathrooms · 30 Acres · 9 Hole Golf Course"
        star={3.8}
        price="$250 / night"
        total="$1,250 total"
      />
      <SearchResult
        img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
        location="Recently renovated bungalow in Frankfurt"
        title="1 bedroom bungalow"
        description="1 Guest · 1 Bedroom · 1 Bed · 1 Bathroom · Wifi · Jacuzzi"
        star={4.1}
        price="$75 / night"
        total="$425 total"
      />
      <SearchResult
        img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
        location="Wooded cabin on a private lake near Stuttgart"
        title="Peaceful modern cabin"
        description="3 Guest · 2 Bedroom · 2 Bed · 1.5 Shared Bathrooms · Wifi · Personal Chef · Dry Cleaning"
        star={5.0}
        price="180 / night"
        total="$900 total"
      />
      <SearchResult
        img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
        location="Stunning view overlooking the Rhine River in Cologne"
        title="The Blue Room Country Club"
        description="2 Guest · 1 Bedroom · 1 Bed · 1 Bathroom · Wifi · Exercise Room"
        star={4.2}
        price="$80 / night"
        total="$400 total"
      />
      <SearchResult
        img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
        location="Great value with this modern Hamburg apartment"
        title="5 star luxury apartment"
        description="4 Guest · 3 Bedroom · 3 Beds · 2 Bathrooms · Wifi · Pool · Fully Stocked Bar"
        star={3.8}
        price="$200 / night"
        total="$1,000 total"
      />
    </div>
  );
}

export default SearchPage;
