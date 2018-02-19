import React from 'react';

const Search = ({searchYouTube}) => {

  let clickHandler = function() {
    let query = document.getElementById('query');

    searchYouTube(query.value);

    query.value = '';
  }

  return (
    <div>
      <form>
        <input id="query" type="text"/>
        <button type="button" onClick={clickHandler}>search</button>
      </form>
    </div>
  )
}

export default Search;