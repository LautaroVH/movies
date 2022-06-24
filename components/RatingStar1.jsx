import React from 'react';
import {FaStar} from "react-icons/fa"
import { useState } from 'react';



const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}

export function RatingStar1 ({movie}) {
    const stars = Array(5).fill(0);
    const [value, setValue] = useState (0);
    const [hover, setHover] = useState (undefined)

    const vote_average = "/discover/movie?sort_by=vote_average.desc?api_key=a2b7dbc498051d5d2ccdf31dc8079fdd" 

   


    
    const handleClick = value => {
        setValue(value)

        if (value == 2) {
            


            console.log("seleccionaste el 2");
            console.log(vote_average)
            
        }
        console.log(`valor de ${value*2}`)
        

    }
    const handleMouseOver = value => {
        setHover(value)
    }
    const handleMouseLeave = value => {
        setHover(null)
    }

    return (
        <div style={styles.container}>
            <h3>Search your movie by the rate stars!</h3>
            <div style={styles.stars}>
                {stars.map((_, i) => {
                    return(
                        <FaStar
                        key={i}
                        size={24}
                        style={{
                            marginRight: 10,
                            cursor: "pointer"
                        }}
                        color={(hover || value) > i ? colors.orange : colors.grey}
                        onClick={()=> handleClick (i + 1) }
                        onMouseOver={() => handleMouseOver( i + 1)}
                        onMouseLeave={handleMouseLeave}
                        />
                        
                    )
                    

                })}

            </div>
        </div>
    )
}


const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
}

