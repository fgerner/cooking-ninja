import {useHistory, useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch";
import {useEffect} from "react";

export default function Article() {
    const {id} = useParams();
    const {data: article, isPending, error} = useFetch('http://localhost:3000/articles/' + id)
    const history = useHistory();

    useEffect(() => {
        if (error) {
            setTimeout(()=>(history.push('/')), 2000);
        }
    }, [error, history]);

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {article &&
                <div>
                    <h1>{article.title}</h1>
                    <p>By: {article.author}</p>
                    <p>{article.body}</p>
                </div>}

        </div>
    );
}
