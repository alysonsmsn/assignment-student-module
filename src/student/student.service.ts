import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
      ) {}

      async createStudent(data: Partial<Student>): Promise<Student> {
        const student = this.studentRepository.create(data);
        return this.studentRepository.save(student);
      }
}
