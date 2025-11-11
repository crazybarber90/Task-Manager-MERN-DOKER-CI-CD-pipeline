import type { UserI } from '../types/userType'
import type { TaskI } from '../types/taskType'

type SidebarProps = {
  user: UserI
  task: TaskI[]
}

const Sidebar = ({ user, task }: SidebarProps) => {
  return <div>Sidebar</div>
}

export default Sidebar
