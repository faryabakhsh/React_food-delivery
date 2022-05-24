
import Meals from '../Meals/Meals'
import MenuCard from '../MenuCard/MenuCard'
import { useState } from 'react'
import {Fragment} from 'react'

function CompleteMeals() {

    
    const [ismeals, setmeals] = useState (
        meals.filter(element => element.itemId === "mcdonalds1")
            );
            

    const setData =(itemId) => {
        setmeals(meals.filter((element) => element.itemId ===itemId))
    }

  return (
    <Fragment>
        <div className="rowContainer">
        { Resturants && Resturants.map(data  => (
            <div key={data.id} onClick = {() => setData(data.itemId)}>
      <MenuCard 
      imgSrc={data.imgSrc}
      name={data.name}
      isActive={data.id == "1" ? true : false}
      />
      </div>
        ))}
    </div>

        {
            ismeals && ismeals.map(data  => (
  
      <Meals 
      key={data.id}
      id={data.itemId}
      imgSrc={data.imgSrc}
      name={data.name}
      ratings={data.ratings}
      price ={data.price}
      />

      )) }
    </Fragment>
  )
}

export default CompleteMeals









const Resturants = [
    {
      id: 1,
      itemId: "mcdonalds1",
      name: "McDonald's",
      imgSrc:"https://s3.eu-central-1.amazonaws.com/uberall-userpics-prod/1396123/ohql8LxxF9.jpeg",
      
        
    },
    {
      id: 2,
      itemId: "cheezious",
      name: "Cheezious",
      imgSrc:
        "https://scontent.fisb7-1.fna.fbcdn.net/v/t1.6435-9/184587952_3497259873708806_2138851288677287215_n.png?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=uhuOJiLuT_4AX_qnyCQ&_nc_ht=scontent.fisb7-1.fna&oh=00_AT_uvL5oaguGtBFPjopRNHXHUq9Bb--agG3EdBRh1RynCg&oe=628C140C",
    },
    {
      id: 3,
      itemId: "kfc",
      name: "KFC",
      imgSrc:
        "https://pbs.twimg.com/media/EhyNLEkXsAI7GGq?format=jpg&name=900x900",
    },
    {
      id: 4,
      itemId: "subway",
      name: "SubWay",
      imgSrc:
        "https://pbs.twimg.com/profile_images/1293278688465899521/-J-WylRi_400x400.png",
    },
    {
      id: 5,
      itemId: "newyorker",
      name: "NewYorker",
      imgSrc:
      "https://scontent.fisb7-1.fna.fbcdn.net/v/t1.6435-9/86187382_2741692115914042_5877936832208961536_n.png?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=j7GQ8GpqeV0AX8GNOTc&_nc_ht=scontent.fisb7-1.fna&oh=00_AT_V2cNITEdVKgsLVHZDt9l9dnk5Y0AoT9sCaqMlnIoPWw&oe=628C29DA",
    },
    {
      id: 6,
      itemId: "burgerfest",
      name: "BurgerFest",
      imgSrc:
        "https://scontent.fisb7-1.fna.fbcdn.net/v/t1.6435-9/59285358_590843014726517_453490525744398336_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dh9ChGRlDuoAX-6zCog&_nc_ht=scontent.fisb7-1.fna&oh=00_AT8awisFi07XhXVigyXfA2JBcysoImPR3nCjwru8rrmdcQ&oe=628C3528",
    },
  ];
  
  


const meals = [
    {
      id: 1,
      itemId: "mcdonalds1",
      imgSrc:
        "https://images.unsplash.com/photo-1619881589316-56c7f9e6b587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      name: "Burger Bistro",
      ratings: 5,
      price: "7.5",
    },
    {
      id: 2,
      itemId: "mcdonalds1",
      imgSrc:
        "https://images.unsplash.com/photo-1552895638-f7fe08d2f7d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      name: "Smokin' Burger",
      ratings: 5,
      price: "12",
    },
    {
      id: 3,
      itemId: "mcdonalds1",
      imgSrc:
        "https://images.unsplash.com/photo-1619881589944-d8ae4bfb0c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      name: "Euphoria Burger",
      ratings: 5,
      price: "12",
    },
    {
      id: 4,
      itemId: "mcdonalds1",
      imgSrc:
        "https://images.unsplash.com/photo-1528669826296-dbd6f641707d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      name: "Sassy Burger",
      ratings: 5,
      price: "12",
    },
    {
      id: 5,
      itemId: "mcdonalds1",
      imgSrc:
        "https://images.unsplash.com/photo-1627053947279-3af797c5c05f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
      name: "Jazz Burger",
      ratings: 5,
      price: "12",
    },
    {
      id: 6,
      itemId: "mcdonalds1",
      imgSrc:
        "https://images.unsplash.com/photo-1594184919345-cf9d99014ed8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      name: "Healthy Buns",
      ratings: 5,
      price: "12",
    },
    {
      id: 7,
      itemId: "cheezious",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza1.png?alt=media&token=7ffbc681-5d86-4429-888b-9597f3e800e8",
      name: "Margherita",
      ratings: 5,
      price: "12",
    },
    {
      id: 8,
      itemId: "cheezious",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza2.png?alt=media&token=e9b65d7f-bd12-4c33-b172-729f1dfcf461",
      name: "Peppy Paneer",
      ratings: 5,
      price: "12",
    },
    {
      id: 9,
      itemId: "cheezious",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza3.png?alt=media&token=4dea85ad-c36d-405a-adcd-a9dfd0c63a6a",
      name: "Double Cheese",
      ratings: 5,
      price: "12",
    },
    {
      id: 10,
      itemId: "cheezious",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza4.png?alt=media&token=1e5259ff-3431-4c76-830e-80e9d7dcc01e",
      name: "Farm House",
      ratings: 4,
      price: "12",
    },
    {
      id: 11,
      itemId: "cheezious",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza5.png?alt=media&token=42bafbe4-f993-4aeb-93ee-57ea04b7cf1b",
      name: "Veg Extrava",
      ratings: 4,
      price: "12",
    },
    {
      id: 12,
      itemId: "cheezious",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza6.png?alt=media&token=72a1e335-68d0-4b1c-8bbd-f28c656ce3b5",
      name: "Deluxe Veggie",
      ratings: 4,
      price: "12",
    },
    {
      id: 13,
      itemId: "kfc",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog1.png?alt=media&token=658e67d8-9284-4ba4-93ad-778dad99ce9c",
      name: "Hot Dog",
      ratings: 4,
      price: "12",
    },
    {
      id: 14,
      itemId: "kfc",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog2.png?alt=media&token=20c79a23-546f-48ef-a0fb-d6801e22273c",
      name: "Hot Dog",
      ratings: 4,
      price: "12",
    },
    {
      id: 15,
      itemId: "kfc",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog3.png?alt=media&token=f0f0024f-0c1f-48ff-b589-b7f484ab5c96",
      name: "Hot Dog",
      ratings: 4,
      price: "12",
    },
    {
      id: 16,
      itemId: "kfc",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog4.png?alt=media&token=0c0e6531-db79-42b8-94f9-78a6d618f20c",
      name: "Hot Dog",
      ratings: 4,
      price: "12",
    },
    {
      id: 17,
      itemId: "kfc",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog5.png?alt=media&token=95f8330f-dc35-4029-b125-d9cf01e3e345",
      name: "Hot Dog",
      ratings: 4,
      price: "12",
    },
    {
      id: 18,
      itemId: "kfc",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog6.png?alt=media&token=d371d7dd-c23e-465a-87ec-605c7ed3bc02",
      name: "Hot Dog",
      ratings: 3,
      price: "12",
    },
    {
      id: 19,
      itemId: "subway",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco1.png?alt=media&token=b78c8e68-c1a6-4e43-8c43-6ef9f23aa59f",
      name: "Taco",
      ratings: 3,
      price: "7.5",
    },
    {
      id: 20,
      itemId: "subway",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco2.png?alt=media&token=a6e8d72e-f288-48dc-9f26-8322774f5216",
      name: "Taco",
      ratings: 3,
      price: "7.5",
    },
    {
      id: 21,
      itemId: "subway",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco3.png?alt=media&token=daa2cf5b-36b7-426a-9f2c-73ae70e62634",
      name: "Taco",
      ratings: 3,
      price: "7.5",
    },
    {
      id: 22,
      itemId: "subway",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco4.png?alt=media&token=5d067124-870f-4ea8-afe1-5bd4f94ca20c",
      name: "Taco",
      ratings: 3,
      price: "9",
    },
    {
      id: 23,
      itemId: "subway",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco5.png?alt=media&token=910f236f-2149-46cf-9b74-7d1ee0323c93",
      name: "Taco",
      ratings: 3,
      price: "9",
    },
    {
      id: 24,
      itemId: "subway",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco6.png?alt=media&token=91214a30-cad0-434d-9339-3c658150ccab",
      name: "Taco",
      ratings: 3,
      price: "9",
    },
    {
      id: 25,
      itemId: "newyorker",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack1.png?alt=media&token=d670617e-4bfc-4693-aa8c-211db9f9d706",
      name: "Snack",
      ratings: 4,
      price: "9",
    },
    {
      id: 26,
      itemId: "newyorker",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack2.png?alt=media&token=55d7fc65-869b-4d8b-83b3-be0158474413",
      name: "Snack",
      ratings: 4,
      price: "9",
    },
    {
      id: 27,
      itemId: "newyorker",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack3.png?alt=media&token=76b488a6-be44-4a3e-a29e-c34ac17f2e2c",
      name: "Snack",
      ratings: 4,
      price: "9",
    },
    {
      id: 28,
      itemId: "newyorker",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack4.png?alt=media&token=1efcd8c0-098b-44a5-8113-da225e7358ce",
      name: "Snack",
      ratings: 4,
      price: "9",
    },
    {
      id: 29,
      itemId: "newyorker",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack5.png?alt=media&token=80cece50-38cd-489f-a73f-edd740fba4ab",
      name: "Snack",
      ratings: 4,
      price: "9",
    },
    {
      id: 30,
      itemId: "newyorker",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack6.png?alt=media&token=a36cb2c5-72d1-4364-9817-3a8eb8c244b6",
      name: "Snack",
      ratings: 4,
      price: "9",
    },
    {
      id: 31,
      itemId: "burgerfest",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink1.png?alt=media&token=e9cc5e4e-2194-4766-9d5a-5e01657927b7",
      name: "Soft Drinks",
      ratings: 4,
      price: "9",
    },
    {
      id: 32,
      itemId: "burgerfest",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink2.png?alt=media&token=872c5ddd-23ae-4f1e-b1dd-18d375240ba6",
      name: "Soft Drinks",
      ratings: 4,
      price: "7.5",
    },
    {
      id: 33,
      itemId: "burgerfest",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink3.png?alt=media&token=c0efdccf-149a-4063-9658-00ae6c7c69dc",
      name: "Soft Drinks",
      ratings: 4,
      price: "7.5",
    },
    {
      id: 34,
      itemId: "burgerfest",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink4.png?alt=media&token=eaaa8826-7fc0-499f-9eaf-8369ff99c112",
      name: "Soft Drinks",
      ratings: 4,
      price: "7.5",
    },
    {
      id: 35,
      itemId: "burgerfest",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink5.png?alt=media&token=eecf1eee-73f5-4705-a7ce-9ccc363f4f47",
      name: "Soft Drinks",
      ratings: 4,
      price: "7.5",
    },
    {
      id: 36,
      itemId: "burgerfest",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink6.png?alt=media&token=86c4ba2c-0db7-47f0-b8cf-fed24db6c1ae",
      name: "Soft Drinks",
      ratings: 4,
      price: "7.5",
    },
  
    {
      id: 41,
      itemId: "mcdonalds1",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger1.png?alt=media&token=319dfbe9-462b-46ea-8f38-6ca7a20319e0",
      name: "Burger Bistro",
      ratings: 5,
      price: "7.5",
    },
    {
      id: 42,
      itemId: "mcdonalds1",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger2.png?alt=media&token=b256ed7a-fe35-4051-9bf5-24f39b79f2b2",
      name: "Smokin' Burger",
      ratings: 5,
      price: "12",
    },
    {
      id: 43,
      itemId: "mcdonalds1",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2",
      name: "Euphoria Burger",
      ratings: 5,
      price: "12",
    },
    {
      id: 44,
      itemId: "mcdonalds1",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger4.png?alt=media&token=f219c72c-22b5-484a-9135-34bbb84e7faa",
      name: "Sassy Burger",
      ratings: 5,
      price: "12",
    },
    {
      id: 45,
      itemId: "mcdonalds1",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger5.png?alt=media&token=e8963c79-af46-4f33-a28d-059f98f464e3",
      name: "Jazz Burger",
      ratings: 5,
      price: "12",
    },
    {
      id: 46,
      itemId: "mcdonalds1",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger6.png?alt=media&token=f2b8febd-f0f8-48d7-9e1a-72d26b7bb36b",
      name: "Healthy Buns",
      ratings: 5,
      price: "12",
    },
    {
      id: 47,
      itemId: "cheezious",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza1.png?alt=media&token=7ffbc681-5d86-4429-888b-9597f3e800e8",
      name: "Margherita",
      ratings: 5,
      price: "12",
    },
    {
      id: 48,
      itemId: "cheezious",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza2.png?alt=media&token=e9b65d7f-bd12-4c33-b172-729f1dfcf461",
      name: "Peppy Paneer",
      ratings: 5,
      price: "12",
    },
    {
      id: 49,
      itemId: "cheezious",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza3.png?alt=media&token=4dea85ad-c36d-405a-adcd-a9dfd0c63a6a",
      name: "Double Cheese",
      ratings: 5,
      price: "12",
    },
    {
      id: 50,
      itemId: "cheezious",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza4.png?alt=media&token=1e5259ff-3431-4c76-830e-80e9d7dcc01e",
      name: "Farm House",
      ratings: 4,
      price: "12",
    },
    {
      id: 51,
      itemId: "cheezious",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza5.png?alt=media&token=42bafbe4-f993-4aeb-93ee-57ea04b7cf1b",
      name: "Veg Extrava",
      ratings: 4,
      price: "12",
    },
    {
      id: 52,
      itemId: "cheezious",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza6.png?alt=media&token=72a1e335-68d0-4b1c-8bbd-f28c656ce3b5",
      name: "Deluxe Veggie",
      ratings: 4,
      price: "12",
    },
    {
      id: 53,
      itemId: "kfc",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog1.png?alt=media&token=658e67d8-9284-4ba4-93ad-778dad99ce9c",
      name: "Hot Dog",
      ratings: 4,
      price: "12",
    },
    {
      id: 54,
      itemId: "kfc",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog2.png?alt=media&token=20c79a23-546f-48ef-a0fb-d6801e22273c",
      name: "Hot Dog",
      ratings: 4,
      price: "12",
    },
    {
      id: 55,
      itemId: "kfc",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog3.png?alt=media&token=f0f0024f-0c1f-48ff-b589-b7f484ab5c96",
      name: "Hot Dog",
      ratings: 4,
      price: "12",
    },
    {
      id: 56,
      itemId: "kfc",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog4.png?alt=media&token=0c0e6531-db79-42b8-94f9-78a6d618f20c",
      name: "Hot Dog",
      ratings: 4,
      price: "12",
    },
    {
      id: 57,
      itemId: "kfc",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog5.png?alt=media&token=95f8330f-dc35-4029-b125-d9cf01e3e345",
      name: "Hot Dog",
      ratings: 4,
      price: "12",
    },
    {
      id: 58,
      itemId: "kfc",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog6.png?alt=media&token=d371d7dd-c23e-465a-87ec-605c7ed3bc02",
      name: "Hot Dog",
      ratings: 3,
      price: "12",
    },
    {
      id: 59,
      itemId: "subway",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco1.png?alt=media&token=b78c8e68-c1a6-4e43-8c43-6ef9f23aa59f",
      name: "Taco",
      ratings: 3,
      price: "7.5",
    },
    {
      id: 60,
      itemId: "subway",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco2.png?alt=media&token=a6e8d72e-f288-48dc-9f26-8322774f5216",
      name: "Taco",
      ratings: 3,
      price: "7.5",
    },
    {
      id: 61,
      itemId: "subway",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco3.png?alt=media&token=daa2cf5b-36b7-426a-9f2c-73ae70e62634",
      name: "Taco",
      ratings: 3,
      price: "7.5",
    },
    {
      id: 62,
      itemId: "subway",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco4.png?alt=media&token=5d067124-870f-4ea8-afe1-5bd4f94ca20c",
      name: "Taco",
      ratings: 3,
      price: "9",
    },
    {
      id: 63,
      itemId: "subway",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco5.png?alt=media&token=910f236f-2149-46cf-9b74-7d1ee0323c93",
      name: "Taco",
      ratings: 3,
      price: "9",
    },
    {
      id: 64,
      itemId: "subway",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco6.png?alt=media&token=91214a30-cad0-434d-9339-3c658150ccab",
      name: "Taco",
      ratings: 3,
      price: "9",
    },
    {
      id: 65,
      itemId: "newyorker",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack1.png?alt=media&token=d670617e-4bfc-4693-aa8c-211db9f9d706",
      name: "Snack",
      ratings: 4,
      price: "9",
    },
    {
      id: 66,
      itemId: "newyorker",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack2.png?alt=media&token=55d7fc65-869b-4d8b-83b3-be0158474413",
      name: "Snack",
      ratings: 4,
      price: "9",
    },
    {
      id: 67,
      itemId: "newyorker",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack3.png?alt=media&token=76b488a6-be44-4a3e-a29e-c34ac17f2e2c",
      name: "Snack",
      ratings: 4,
      price: "9",
    },
    {
      id: 68,
      itemId: "newyorker",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack4.png?alt=media&token=1efcd8c0-098b-44a5-8113-da225e7358ce",
      name: "Snack",
      ratings: 4,
      price: "9",
    },
    {
      id: 69,
      itemId: "newyorker",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack5.png?alt=media&token=80cece50-38cd-489f-a73f-edd740fba4ab",
      name: "Snack",
      ratings: 4,
      price: "9",
    },
    {
      id: 70,
      itemId: "newyorker",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack6.png?alt=media&token=a36cb2c5-72d1-4364-9817-3a8eb8c244b6",
      name: "Snack",
      ratings: 4,
      price: "9",
    },
    {
      id: 71,
      itemId: "burgerfest",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink1.png?alt=media&token=e9cc5e4e-2194-4766-9d5a-5e01657927b7",
      name: "Soft Drinks",
      ratings: 4,
      price: "9",
    },
    {
      id: 72,
      itemId: "burgerfest",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink2.png?alt=media&token=872c5ddd-23ae-4f1e-b1dd-18d375240ba6",
      name: "Soft Drinks",
      ratings: 4,
      price: "7.5",
    },
    {
      id: 73,
      itemId: "burgerfest",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink3.png?alt=media&token=c0efdccf-149a-4063-9658-00ae6c7c69dc",
      name: "Soft Drinks",
      ratings: 4,
      price: "7.5",
    },
    {
      id: 74,
      itemId: "burgerfest",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink4.png?alt=media&token=eaaa8826-7fc0-499f-9eaf-8369ff99c112",
      name: "Soft Drinks",
      ratings: 4,
      price: "7.5",
    },
    {
      id: 75,
      itemId: "burgerfest",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink5.png?alt=media&token=eecf1eee-73f5-4705-a7ce-9ccc363f4f47",
      name: "Soft Drinks",
      ratings: 4,
      price: "7.5",
    },
    {
      id: 76,
      itemId: "burgerfest",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink6.png?alt=media&token=86c4ba2c-0db7-47f0-b8cf-fed24db6c1ae",
      name: "Soft Drinks",
      ratings: 4,
      price: "7.5",
    },
  ];
  
  export { Resturants, meals };