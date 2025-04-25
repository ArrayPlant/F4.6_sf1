import { Link, Routes, Route } from 'react-router-dom';
import CategoryList from './CategoryList';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

function App() {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
        <Link to="/" className="navbar-brand">Рецепты</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="/category/:id" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
