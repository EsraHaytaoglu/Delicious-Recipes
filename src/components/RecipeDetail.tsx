import { useParams } from "react-router-dom";


function RecipeDetail() {
    const { id } = useParams();
    console.log(id);
    
    return (
        <div>
            detail kanka
        </div>
    )
}

export default RecipeDetail
