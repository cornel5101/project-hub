import { TaskStatus } from "./task-status"

export interface Task {
  id: number,
  title: string,
  description: string
  status: TaskStatus,
  projectId: number,
  createdAt: Date
}