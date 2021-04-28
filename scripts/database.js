const database = {
  : [
    { id: 1, color: "Silver", price: 0 },
    { id: 2, color: "Midnight Blue", price: 300},
    { id: 3, color: "Firebrick Red", price: 100},
    { id: 4, color: "Spring Green", price: 200}
  ],
  interiors: [
    { id: 1, style: "Beige Fabric", price: 0},
    { id: 2, style: "Charcoal Fabric", price: 0},
    { id: 3, style: "White Leather", price: 150},
    { id: 4, style: "Black Leather", price: 200}
  ],
  techs: [
    { id: 1, package: "Basic Package", price: 0},
    { id: 2, package: "Navigation Package", price: 500},
    { id: 3, package: "Visibility Package", price: 500},
    { id: 4, package: "Ultra Package", price: 1000}
  ],
  wheels: [
    { id: 1, style: "17-inch Pair Radial", price: 0},
    { id: 2, style: "17-inch Pair Radial Black", price: 100},
    { id: 3, style: "18-inch Pair Spoke Silver", price: 400},
    { id: 4, style: "18-inch Pair Spoke Black", price: 500}
  ] 
}

export const getPaints = () => {
  return [...database.paints]
}

export const getInteriors = () => {
  return [...database.interiors]
}

export const getTechs = () => {
  return [...database.techs]
}

export const getWheels = () => {
  return [...database.wheels]
}