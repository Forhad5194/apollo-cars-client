export default function carsDetailsPages({ params }: { params: { carId: string } }) {
    console.log(params);
    return (
      <div>
        <h2>This is car: {params.carId}</h2>
      </div>
    );
  }
  