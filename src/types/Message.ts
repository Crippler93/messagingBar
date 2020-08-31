export interface Message {
  value: string
  user: string
}

export interface RepositoryResponse<D> {
  code: 200 | 404 | 400 | 500
  result: D | string | null
}
