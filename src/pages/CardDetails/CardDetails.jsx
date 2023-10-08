import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCardDetails from "../SingleCardDetails/SingleCardDetails";


const CardDetails = () => {

    const [card, setCard] = useState()

    const { id } = useParams();

    const cards = useLoaderData()
    console.log(cards)

    useEffect(() => {
        const findCard = cards?.find(card => card.id == id)
        console.log(findCard);

        setCard(findCard);

    }, [id, cards])

    return (
        <div>
            <SingleCardDetails card={card}></SingleCardDetails>
        </div>
    );
};

export default CardDetails;