// styles
import './Home.css'
import RecipeList from "../../components/RecipeList";
import {useEffect, useState} from "react";
import {store} from "../../firebase/config";

export default function Home() {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsPending(true)
        const unsub = store.collection('recipes').onSnapshot((snapshot) => {
            if (snapshot.empty) {
                setError('No recopies to display')
                setIsPending(false)
            } else {
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({id: doc.id, ...doc.data()})
                })
                setData(results)
                setIsPending(false)
            }
        }, (err) => {
            setError(err.message)
            setIsPending(false)
        })
        return () => unsub()
    }, []);
    return (
        <div className={'home'}>
            {error && <p className={'error'}>{error}</p>}
            {isPending && <p className={'loading'}>Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    )
}
