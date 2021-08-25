import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TaskEntity } from '../models/task.entity';
import { Task } from '../models/task.interface';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  createTask(task: Task): Observable<Task> {
    return from(this.taskRepository.save(task));
  }
  listAllTasks(): Observable<Task[]> {
    return from(this.taskRepository.find());
  }
  updateTask(id: number, task: Task): Observable<UpdateResult> {
    return from(this.taskRepository.update(id, task));
  }
  deleteTask(id: number): Observable<DeleteResult> {
    return from(this.taskRepository.delete(id));
  }
}
