export type TaskI = {
  _id: string
  title: string
  description: string
  priority: string
  dueDate: Date
  owner: string
  completed: boolean | string | number
  createdAt: Date
  id?: string | number
}
