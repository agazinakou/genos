export const isValidJSON = (val: any) => {
    try {
      JSON.parse(val)
      return true
    } catch (error) {
      return false
    }
}