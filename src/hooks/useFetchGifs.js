import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

function useFetchGifs( category ){

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( function(){
        getGifs(category)
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })
    }, [category])

    return state;

}


export default useFetchGifs;