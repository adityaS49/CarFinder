// src/app/api/cars/route.js

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const brand = searchParams.get("brand");
  const fuel = searchParams.get("fuel");
  const minPrice = parseInt(searchParams.get("minPrice")) || 0;
  const maxPrice = parseInt(searchParams.get("maxPrice")) || Infinity;
  const seats = parseInt(searchParams.get("seats")) || 0;
  const sort = searchParams.get("sort");
 
  const cars = [
    {
      id: 1,
      name: "MG Hector",
      brand: "MG",
      price: 23000,
      fuel: "Petrol",
      seats: 5,
      image: "/car9.webp",
      mileage: 15,
      transmission: "Automatic",
      description:
        "A spacious SUV with smart features, panoramic sunroof, and internet inside.",
    },
    {
      id: 2,
      name: "Hyundai Creta",
      brand: "Hyundai",
      price: 16000,
      fuel: "Petrol",
      seats: 5,
      image: "/car4.webp",
      mileage: 17,
      transmission: "Manual",
      description:
        "Compact SUV with premium interiors, ideal for city and highway driving.",
    },
    {
      id: 3,
      name: "Honda City",
      brand: "Honda",
      price: 18000,
      fuel: "Petrol",
      seats: 6,
      image: "/car5.webp",
      mileage: 18,
      transmission: "Automatic",
      description:
        "Sleek sedan known for its comfort, fuel efficiency, and smooth ride.",
    },
    {
      id: 4,
      name: "Maruti Swift",
      brand: "Maruti",
      price: 8000,
      fuel: "Petrol",
      seats: 4,
      image: "/car2.webp",
      mileage: 21,
      transmission: "Manual",
      description:
        "India’s favorite hatchback with sporty design and exceptional mileage.",
    },
    {
      id: 5,
      name: "Tesla Model 3",
      brand: "Tesla",
      price: 55000,
      fuel: "Electric",
      seats: 5,
      image: "/car1.webp",
      mileage: 350,
      transmission: "Automatic",
      description:
        "High-performance electric car with cutting-edge tech and autopilot capabilities.",
    },
    {
      id: 6,
      name: "Renault Kwid",
      brand: "Renault",
      price: 7000,
      fuel: "Petrol",
      seats: 4,
      image: "/car10.webp",
      mileage: 22,
      transmission: "Manual",
      description:
        "Budget-friendly compact car perfect for city commuting and daily drives.",
    },
    {
      id: 7,
      name: "Tata Nexon EV",
      brand: "Tata",
      price: 22000,
      fuel: "Electric",
      seats: 5,
      image: "/car7.webp",
      mileage: 312,
      transmission: "Automatic",
      description:
        "India's most trusted electric SUV with high safety rating and fast charging.",
    },
    {
      id: 8,
      name: "Toyota Fortuner",
      brand: "Toyota",
      price: 35000,
      fuel: "Diesel",
      seats: 7,
      image: "/car3.webp",
      mileage: 14,
      transmission: "Automatic",
      description:
        "Powerful 7-seater SUV perfect for off-roading and family adventures.",
    },
    {
      id: 9,
      name: "Mahindra Scorpio",
      brand: "Mahindra",
      price: 25000,
      fuel: "Diesel",
      seats: 7,
      image: "/car6.jpg",
      mileage: 16,
      transmission: "Manual",
      description:
        "Rugged and reliable SUV built for performance and Indian roads.",
    },
    {
      id: 10,
      name: "Kia Seltos",
      brand: "Kia",
      price: 20000,
      fuel: "Petrol",
      seats: 8,
      image: "/car8.webp",
      mileage: 16,
      transmission: "Automatic",
      description:
        "Feature-packed urban SUV with stylish looks and modern interiors.",
    },
    {
      id: 11,
      name: "Toyota Fortuner",
      brand: "Toyota",
      price: 35000,
      fuel: "Diesel",
      seats: 10,
      image: "/car3.webp",
      mileage: 14,
      transmission: "Automatic",
      description:
        "Powerful 7-seater SUV perfect for off-roading and family adventures.",
    },
    {
      id: 12,
      name: "Honda City",
      brand: "Honda",
      price: 18000,
      fuel: "Petrol",
      seats: 5,
      image: "/car5.webp",
      mileage: 18,
      transmission: "Automatic",
      description:
        "Sleek sedan known for its comfort, fuel efficiency, and smooth ride.",
    },
    {
      id: 13,
      name: "Hyundai Creta",
      brand: "Hyundai",
      price: 16000,
      fuel: "Petrol",
      seats: 5,
      image: "/car4.webp",
      mileage: 17,
      transmission: "Manual",
      description:
        "Compact SUV with premium interiors, ideal for city and highway driving.",
    },
    {
      id: 14,
      name: "Renault Kwid",
      brand: "Renault",
      price: 7000,
      fuel: "Petrol",
      seats: 5,
      image: "/car10.webp",
      mileage: 22,
      transmission: "Manual",
      description:
        "Budget-friendly compact car perfect for city commuting and daily drives.",
    },
    {
      id: 15,
      name: "Tesla Model 3",
      brand: "Tesla",
      price: 55000,
      fuel: "Electric",
      seats: 5,
      image: "/car1.webp",
      mileage: 350,
      transmission: "Automatic",
      description:
        "High-performance electric car with cutting-edge tech and autopilot capabilities.",
    },
    {
      id: 16,
      name: "Mahindra Scorpio",
      brand: "Mahindra",
      price: 25000,
      fuel: "Diesel",
      seats: 7,
      image: "/car6.jpg",
      mileage: 16,
      transmission: "Manual",
      description:
        "Rugged and reliable SUV built for performance and Indian roads.",
    },
    {
      id: 17,
      name: "MG Hector",
      brand: "MG",
      price: 23000,
      fuel: "Petrol",
      seats: 5,
      image: "/car9.webp",
      mileage: 15,
      transmission: "Automatic",
      description:
        "A spacious SUV with smart features, panoramic sunroof, and internet inside.",
    },
    {
      id: 18,
      name: "Tata Nexon EV",
      brand: "Tata",
      price: 22000,
      fuel: "Electric",
      seats: 5,
      image: "/car7.webp",
      mileage: 312,
      transmission: "Automatic",
      description:
        "India's most trusted electric SUV with high safety rating and fast charging.",
    },
    {
      id: 19,
      name: "Maruti Swift",
      brand: "Maruti",
      price: 8000,
      fuel: "Petrol",
      seats: 5,
      image: "/car2.webp",
      mileage: 21,
      transmission: "Manual",
      description:
        "India’s favorite hatchback with sporty design and exceptional mileage.",
    },
    {
      id: 20,
      name: "Kia Seltos",
      brand: "Kia",
      price: 20000,
      fuel: "Petrol",
      seats: 5,
      image: "/car8.webp",
      mileage: 16,
      transmission: "Automatic",
      description:
        "Feature-packed urban SUV with stylish looks and modern interiors.",
    },
  ];

  const filtered = cars.filter((car) => {
    return (
      (!brand || car.brand.toLowerCase() === brand.toLowerCase()) &&
      (!fuel || car.fuel.toLowerCase() === fuel.toLowerCase()) &&
      car.price >= minPrice &&
      car.price <= maxPrice &&
      (seats === 0 || car.seats === seats)
    );
  });
  // Sort logic
  if (sort?.toLowerCase() === "lowtohigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort?.toLowerCase() === "hightolow") {
    filtered.sort((a, b) => b.price - a.price);
  }
  

  return Response.json(filtered);
}
