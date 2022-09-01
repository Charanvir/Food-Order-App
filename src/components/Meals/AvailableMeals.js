import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {

    const fetchMeals = async () => {
      const response = await fetch('https://food-order-app-636d1-default-rtdb.firebaseio.com/meals.json')

      if (!response.ok) {
        throw new Error("Something went wrong!")
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const meal in responseData) {
        loadedMeals.push({
          id: meal,
          name: responseData[meal].name,
          description: responseData[meal].description,
          price: responseData[meal].price
        })
      }
      setMeals(loadedMeals)
      setIsLoading(false)
    }

    // .catch will just handle the error of the function
    // cannot use a try/catch here because it must be await, therefore making the useEffect a async function, which is cannot
    fetchMeals().catch(error => {
      setIsLoading(false)
      setHttpError(error.message)
    });

  }, [])

  if (isLoading) {
    return <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
  }

  if (httpError) {
    return <section className={classes.MealsError}>
      <p>{httpError}</p>
    </section>
  }


  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
