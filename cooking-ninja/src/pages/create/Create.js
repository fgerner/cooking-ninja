// styles
import './Create.css'
import {useRef, useState} from "react";
import {useHistory} from "react-router-dom";
import {store} from "../../firebase/config";

export default function Create() {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredient, setNewIngredient] = useState('')
    const [ingredients, setIngredients] = useState([])
    const ingredientInput = useRef(null)

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const doc = {
            title,
            ingredients,
            method,
            cookingTime: cookingTime + ' minutes',
        }

        try {
            await store.collection('recipes').add(doc)
            history.push('/')
        } catch (err) {
            console.log(err)
        }

    };

    const handleAdd = (e) => {
        e.preventDefault()
        const ing = newIngredient.trim()
        if (ing && !ingredients.includes(ing)) {
            setIngredients(prevIngredients => [...prevIngredients, ing])
        }
        setNewIngredient('')
        ingredientInput.current.focus()
    };

    return (
        <div className={'create'}>
            <h2 className={"page-title"}>Add a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title:</span>
                    <input type="text" required onChange={e => setTitle(e.target.value)} value={title}/>
                </label>
                <label>
                    <span>Recipe ingredients:</span>
                    <div className="ingredients">
                        <input
                            type="text"
                            onChange={e => setNewIngredient(e.target.value)}
                            value={newIngredient}
                            ref={ingredientInput}
                        />
                        <button onClick={handleAdd} className={'btn'}>Add</button>
                    </div>
                </label>
                <p>Current ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>
                <label>
                    <span>Recipe method:</span>
                    <textarea required onChange={e => setMethod(e.target.value)} value={method}></textarea>
                </label>
                <label>
                    <span>Cooking time (minutes):</span>
                    <input required type="number" onChange={e => setCookingTime(e.target.value)} value={cookingTime}/>
                </label>
                <button className={'btn'}>Add Recipe</button>
            </form>
        </div>
    )
}
