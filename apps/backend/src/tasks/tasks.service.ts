import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  findAll() {
    return [];
  }

  create(createTaskDto: CreateTaskDto) {
    return createTaskDto;
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    throw new NotFoundException(`Task with id '${id}' not found`);
  }

  remove(id: string) {
    throw new NotFoundException(`Task with id '${id}' not found`);
  }
}
