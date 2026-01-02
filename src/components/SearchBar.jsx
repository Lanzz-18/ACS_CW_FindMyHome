import React from 'react';

function SearchBar(){
    return(
        <section>
            <h1>Believe in Finding it</h1>
            <h3>Search for the gadget, you are looking for [rent or sale]</h3>
            
            {/* Creating the form*/}
            <form>
                <label htmlFor="term">Search Gadget or Location</label><br/>
                <input type="text" id="term" name="term"></input><br/>
                <button>For Sale</button>
                <button>For Rent</button>
            </form>
        </section>
    )
}

export default SearchBar;