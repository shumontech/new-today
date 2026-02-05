import React, { use } from 'react';
import { NavLink } from 'react-router-dom';

const categoryPromise = fetch("/public/categories.json")
    .then((res) => res.json())
console.log(categoryPromise);


const Categories = () => {
    const categories = use(categoryPromise)




    return (
        <div>
            <p className='font-bold'>All Categories ({categories.length})</p>
            <div className='grid grid-cols-1 mt-5'>
                {categories.map((category) => (<NavLink
                    key={category.id}
                    to={`/category/${category.id}`}
                    className={({ isActive }) =>
                        ` btn px-4 py-2 m-1 rounded-lg font-medium transition-all duration-100
       ${isActive ? "bg-primary text-white shadow-lg" : "bg-base-200 text-primary hover:bg-primary hover:text-white"}`
                    }
                >
                    {category.name}
                </NavLink>))}

            </div>

        </div>
    );
};

export default Categories;