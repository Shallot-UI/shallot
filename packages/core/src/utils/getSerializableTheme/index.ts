import { DefaultTheme } from 'styled-components/native'

// Create a new object to store the serializable theme
// newSerializableTheme = {}

// Define a function to serialize an object
// function getSerializableTheme(object, theme) {
//   for each key in object {
//     if (typeof object[key] is function) {
// If the property is a function, call getStyles with the theme
//       newSerializableTheme[key] = getStyles(object[key], theme)
//     } else if (typeof object[key] is object and not null) {
// If the property is an object, recursively call getSerializableTheme
//       newSerializableTheme[key] = getSerializableTheme(object[key], theme)
//     } else {
// Otherwise, it's a serializable value, just add it
//       newSerializableTheme[key] = object[key]
//     }
//   }
// }

// return the new serializable theme

export const getSerializableTheme = (theme: DefaultTheme) => {
  const newSerializableTheme = {}

  for (let key in theme) {
  }
}
