import React, { useEffect, useState } from 'react';
import Axios from 'axios';

/**
 * Component to render the Front Page of the application
 */
function HackerNews() {
    const [items, setItems] = useState([]);

    /**
     * Makes api call to retrieve the items to display on front page.
     * Will be executed only once on initial render(once the component mounts)
     */
    useEffect(() => {
        Axios.get('https://hn.algolia.com/api/v1/search?tags=front_page').then(response => {
            setItems(response.data.hits.map(obj=> ({ ...obj, voteCount: 0 })));
        });
    }, []);

    /**
     * Increments the vote count
     * @param {string} id The unique identifier of the list item(object);
     */
    function upVote(id) {
        const elementsIndex = items.findIndex(element => element.objectID == id )
        items[elementsIndex].voteCount++;
        setItems([...items]);
    }

    return (
        <table cellPadding="0" cellSpacing="0" width="100%" background-color="#f6f6ef">
         <tr>
            <td>
               <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ padding:"2px" }}>
                    <tr bgcolor="#ff6600" style={{ color:"white", fontWeight: "bold" }}>
                        <td> Comments </td>
                        <td> Vote Count</td>
                        <td> Upvote</td>
                        <td> News Details</td>
                    </tr>
                    {
                        items.map((item) => {
                            return (
                            <tr className="table-rows" key={item.objectID}>
                                <td>{ item.num_comments }</td>
                                <td>{ item.voteCount }</td>
                                <td>
                                    <div 
                                        style={{ 
                                            width: 0, 
                                            height: 0, 
                                            borderTop: 0, 
                                            borderLeft: "5px solid transparent", 
                                            borderRight: "5px solid transparent", 
                                            borderBottom: "10px solid grey" 
                                        }}
                                        onClick={() => upVote(item.objectID)} 
                                    />
                                </td>
                                <td>{ item.title }</td>
                            </tr>)
                        })
                    }
               </table>
            </td>
         </tr>
         <tr>
            <td style={{ color: "#ff6600", fontWeight: "bold", padding: "5px" }}>
                 <div style={{ float: "right" }}><span>Previous&nbsp;</span>|<span>&nbsp;Next</span></div>
            </td>
         </tr>
         <tr>
            <td style={{ borderTop: "2px solid #ff6600", borderBottom: "4px solid #ff6600" }}>
                <div style={{ height: "300px" }}></div>
            </td>
         </tr>
      </table>
    );
}

export default HackerNews;