export const minifyCss = (cssString: string) =>
  cssString
    // Remove leading and trailing whitespace
    .trim()
    // Replace multiple spaces with a single space
    .replace(/\s+/g, ' ')
    // Replace space before and after curly braces with no space
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    // Replace space before and after colons and semicolons with no space
    .replace(/\s*:\s*/g, ':')
    .replace(/\s*;\s*/g, ';')
