export type TaskI = {
  _id?: string
  title: string
  description: string
  priority: PriorityType
  dueDate: string
  owner?: string
  completed: boolean | string | number
  createdAt?: Date
  id?: string | number | null
}

export type PriorityType = 'Low' | 'Medium' | 'High'
