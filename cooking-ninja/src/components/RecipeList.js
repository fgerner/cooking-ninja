import './RecipeList.css'
import {Link} from "react-router-dom";
import {useTheme} from "../hooks/useTheme";
import deleteIcon from '../assets/delete.svg';
import {store} from "../firebase/config";

export default function RecipeList({recipes}) {
    const {mode} = useTheme()

    if (recipes.length === 0) {
        return <div className={'error'}>No recipes found</div>
    }

    const handleDelete = (id) => {
        store.collection('recipes').doc(id).delete()
    };

    return (
        <div className={'recipe-list'}>
            {recipes.map(recipe => (
                <div className={`card ${mode}`} key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
                    <img className={'delete'} src={deleteIcon} onClick={() => handleDelete(recipe.id)} alt={'icon'}/>
                </div>
            ))}
        </div>
    )
}
