import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Pizza',
        description: 'Large stove-top baked cheese pizza',
        price: 17.99,
    },
    {
        id: 'm2',
        name: 'Burrito',
        description: 'A veggie burrito with cheese, beans and burrito sauce',
        price: 12.99,
    },
    {
        id: 'm3',
        name: 'Veggie Burger',
        description: 'Standard burger with a plant-based veggie patty',
        price: 8.99,
    },
    {
        id: 'm4',
        name: 'Tacos',
        description: 'Hard tacos with beans, cheese and veggies',
        price: 9.00,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal =>
        <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}></MealItem>
    );

    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
}

export default AvailableMeals