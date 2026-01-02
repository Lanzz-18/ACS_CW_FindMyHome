import React from 'react';

function SearchBar(location, purpose){
    return(
        <section>
            {/* Creating the form*/}
            <form>
                <h1>Find property for {purpose} in {location}</h1>

                <label for="radius">Search radius</label>
            </form>
        </section>
    )
}

export default SearchBar;