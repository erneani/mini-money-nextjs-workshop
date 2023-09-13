import Error from 'next/error'

export interface IError {
  error: Error
  reset: () => void
}
