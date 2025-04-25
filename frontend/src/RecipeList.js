import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function RecipeList() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`/api/categories/${id}/`)
      .then(res => res.json())
      .then(data => setCategory(data));

    fetch(`/api/recipes/?category=${id}`)
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, [id]);

  if (!category) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h2>Категория: {category.name}</h2>
      <ul className="list-group">
        {recipes.map(recipe => (
          <li key={recipe.id} className="list-group-item">
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
