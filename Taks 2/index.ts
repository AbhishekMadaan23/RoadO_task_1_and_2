interface Trip {
  start: string; // Starting point (pick-up, drop, or warehouse)
  end: string; // Ending point (pick-up, drop, or warehouse)
}

interface Shipment {
  pickups: string[]; // List of pick-up points
  dropoffs: string[]; // List of drop points
}

function isValidTrips(shipment: Shipment, trips: Trip[]): boolean {
  const visitedPickups = new Set<string>();
  const visitedDropoffs = new Set<string>();
  const allPoints = new Set<string>([
    ...shipment.pickups,
    ...shipment.dropoffs,
  ]);

  for (const trip of trips) {
    // Ensure each trip has either a pick-up, drop-off, or warehouse as start and end points.
    //if not it is not a vaild trip
    if (
      !(
        shipment.pickups.includes(trip.start) ||
        shipment.dropoffs.includes(trip.start) ||
        shipment.pickups.includes(trip.end) ||
        shipment.dropoffs.includes(trip.end)
      )
    ) {
      return false;
    }

    // Ensure each pick-up point is visited exactly once
    if (shipment.pickups.includes(trip.start)) {
      if (visitedPickups.has(trip.start)) {
        return false;
      }
      visitedPickups.add(trip.start);
    }

    // Ensure each drop-off point is visited exactly once
    if (shipment.dropoffs.includes(trip.end)) {
      if (visitedDropoffs.has(trip.end)) {
        return false;
      }
      visitedDropoffs.add(trip.end);
    }
  }

  // Ensure all pick-up and drop-off points are visited
  for (const point of allPoints) {
    if (!(visitedPickups.has(point) || visitedDropoffs.has(point))) {
      return false;
    }
  }

  return true;
}

//Our Shipment
const shipment: Shipment = {
  pickups: ["A", "B"],
  dropoffs: ["C", "D"],
};

//invalid trips
const trips: Trip[] = [
  { start: "A", end: "W" },
  { start: "B", end: "W" },
  { start: "W", end: "E" }, //invalid trip
  { start: "W", end: "D" },
];

//valid trips
const tripsValid: Trip[] = [
  { start: "A", end: "W" },
  { start: "B", end: "W" },
  { start: "W", end: "C" },
  { start: "W", end: "D" },
];

// should return false because trip third is not valid
console.log(isValidTrips(shipment, trips));

//should return true because trip are valid
console.log(isValidTrips(shipment, tripsValid));
