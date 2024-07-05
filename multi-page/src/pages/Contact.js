import {useLocation} from "react-router-dom";

export default function Contact() {

    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const name = queryParams.get('name')


    return (
        <div>
            <h2>hello {name}, Contact</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci animi commodi, corporis debitis
                eius error expedita, fugit hic incidunt nostrum perspiciatis possimus quibusdam quis reiciendis rerum
                veniam voluptatibus voluptatum.</p>
        </div>
    )
}
