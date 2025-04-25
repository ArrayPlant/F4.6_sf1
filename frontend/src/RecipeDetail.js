import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`/api/recipes/${id}/`)
      .then(res => res.json())
      .then(data => setRecipe(data));
  }, [id]);

  if (!recipe) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{recipe.title}</h4>
        <h6 className="card-subtitle mb-3 text-muted">
          Категория: <Link to={`/category/${recipe.category}`} className="text-reset text-decoration-none">{recipe.category_name}</Link>
        </h6>
        <p className="card-text">{recipe.description}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
