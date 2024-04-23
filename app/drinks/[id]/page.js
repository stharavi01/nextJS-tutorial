import Link from 'next/link';
import Image from 'next/image';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import drinkImg from './drink.jpg';
console.log(drinkImg);

const getSingleDrink = async (id) => {
    const res = await fetch(`${url}${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch a drink');
    }
    return res.json();
};

const SingleDrinkPage = async ({ params }) => {
    const data = await getSingleDrink(params.id);
    const title = data?.drinks[0]?.strDrink;
    const imgSrc = data?.drinks[0]?.strDrinkThumb;
    console.log(data);
    console.log(title, imgSrc);
    return (
        <div>
            <Link href='/drinks' className='btn btn-primary mt-4 mb-8'>
                Back to Drinks
            </Link>
            <h1 className='text-4xl mb-8'>{title}</h1>
            {/* Static Image */}
            {/* <Image src={drinkImg} className='w-48 h-48 rounded-lg' alt='drink' /> */}
            {/* Remote image */}
            <Image src={imgSrc} width={300} height={300} className='w-48 h-48 rounded-lg shadow-lg mb-4 ' priority alt={title} />
        </div>
    );
};
export default SingleDrinkPage;