import { Delete, Param, Put } from '@nestjs/common';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Task } from '../models/task.interface';
import { TaskService } from '../services/task.service';

@Controller('tarefas')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Post()
  create(@Body() task: Task): Observable<Task> {
    return this.taskService.createTask(task);
  }
  @Get()
  findAll(): Observable<Task[]> {
    return this.taskService.listAllTasks();
  }
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() task: Task,
  ): Observable<UpdateResult> {
    return this.taskService.updateTask(id, task);
  }
  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.taskService.deleteTask(id);
  }
}
