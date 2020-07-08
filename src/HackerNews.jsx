import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function HackerNews() {
    useEffect(() => {
        Axios.get('https://hn.algolia.com/api/v1/search?tags=front_page').then(response => {
            setItems(response.data.hits);
        });
    }, []);

    const [items, setItems] = useState([]);
    const [vote, setVote] = useState(0);
    return (
        <table border="0" cellpadding="0" cellspacing="0" width="100%" background-color="#f6f6ef">
         <tr>
            <td>
               <table border="0" cellpadding="0" cellspacing="0" width="100%" style={{ padding:"2px" }}>
                  <tr bgcolor="#ff6600" style={{ color:"white", fontWeight: "bold" }}>
                     <td> Comments </td>
                     <td> Vote Count</td>
                     <td> Upvote</td>
                     <td> News Details</td>
                  </tr>
                  {
                        items.map((item) => {
                            return (<tr>
                                <td>{ item.num_comments }</td>
                                <td>{ vote }</td>
                                <td>
                                    <div 
                                        style={{ 
                                            width: 0, 
                                            height: 0, 
                                            borderTop: 0, 
                                            borderLeft: "10px solid transparent", 
                                            borderRight: "10px solid transparent", 
                                            borderBottom: "10px solid grey" 
                                        }}
                                    />
                                </td>
                                <td>{ item.title }</td>
                            </tr>)
                        })
                    }
               </table>
            </td>
         </tr>
      </table>
    );
}

export default HackerNews;