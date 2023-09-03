export type Gender = 'male' | 'female'

const getGender = (gender: string): Gender => {
  return gender === 'female' ? 'female' : 'male'
}

export { getGender }
