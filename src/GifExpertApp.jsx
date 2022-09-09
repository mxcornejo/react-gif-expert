import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon ball']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        // categories.push(newCategory);
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Gift expert app</h1>
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />


            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}
