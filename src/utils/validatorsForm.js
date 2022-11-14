export const required = value => (value ? undefined : ' Field is required') 


const maxLength = max => value =>value && value.length > max ? `Must be ${max} characters or less` : undefined

export const maxLength30 = maxLength(30)