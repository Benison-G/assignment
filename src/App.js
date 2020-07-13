import React, { useEffect, useState } from "react";
import HackerNews from "./HackerNews";
import Axios from 'axios';


function App() {
  const [items, setItems] = useState([]);

  /**
   * Makes api call to retrieve the items to display on front page.
   * Will be executed only once on initial render(once the component mounts)
   */
  useEffect(() => {
      // Get the items from the localStorage if the component is refreshed otherwise call API
      const storedData = JSON.parse(localStorage.getItem("items"));
      if(!storedData) {
          Axios.get('https://hn.algolia.com/api/v1/search?tags=front_page').then(response => {
              const serviceResponse = response.data.hits.map(obj=> ({ ...obj, voteCount: 0 }));
              localStorage.setItem("items", JSON.stringify(serviceResponse));
              setItems(serviceResponse);
          });
      } else {
          setItems(storedData);
      }
  }, []);

  // Updates the localStorage on every state change.
  useEffect(() => {
      localStorage.setItem("items", JSON.stringify(items));
  })

  /**
   * Increments the vote count
   * @param {string} id The unique identifier of the list item(object);
   */
  function upVote(id) {
      const elementsIndex = items.findIndex(element => element.objectID === id )
      items[elementsIndex].voteCount++;
      // one of its values but it's still the same array, so React will not re-render as the state hasn't changed. 
      // The new array is still the old array. So using spread operator to avoid this behaviour.
      setItems([...items]);
  }

  return (
   <HackerNews items={items} upVote={upVote} points={getGraphPoints(items)}/>
  );
}

function getGraphPoints(items) {
    let points = [];
    items.map(item => {
        let obj = {};
        obj.x = parseInt(item.objectID);
        obj.y = item.voteCount;
        points.push(obj);
    })
    return points;
}

export default App;
