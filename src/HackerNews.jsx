import React from 'react';
import './TableRows.scss';

/**
 * Component to render the Front Page of the application
 */
function HackerNews(props) {
    return (
        <table>
            <tr>
                <td>
                    <table>
                            <tr bgcolor="#ff6600" style={{ color:"white", fontWeight: "bold" }}>
                                <td> Comments </td>
                                <td> Vote Count</td>
                                <td> Upvote</td>
                                <td> News Details</td>
                            </tr>
                            {
                                props.items.map((item) => {
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
                                                onClick={() => props.upVote(item.objectID)} 
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
                    {/* <Graph data={getGraphPoints(props.item)}/> */}
                </td>
            </tr>
      </table>
    );
}

export default HackerNews;